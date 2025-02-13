import * as v3TextStyles from "@/features/design-system/data/__generated__/styles";
import type {
  SerializedTextStyleSuggestionsResults,
  GroupedSerializedTextStyleSuggestionsResults,
} from "@/features/design-system/types";
import {
  getAllTextNodesInSceneNodes,
  getClosestInstanceNode,
  isNodeWithinSystemComponents,
  serializeInstanceNode,
  serializeTextNode,
} from "@/features/design-system/utils/nodes";
import { serializeTextStyle } from "@/features/design-system/utils/styles";
import {
  getFontWeight,
  getFontWeightLabel,
  getLineHeightUnitString,
  getTextPropertyDifferences,
} from "@/features/design-system/utils/text-node-properties";

const v3TextStyleKeys = Object.values(v3TextStyles).map(({ key }) => key);

export async function getSerializedTextStyleSuggestions({
  nodeIds,
  systemComponentKeys,
}: {
  nodeIds: SceneNode["id"][];
  systemComponentKeys: string[];
}): Promise<GroupedSerializedTextStyleSuggestionsResults> {
  const nodes = (await Promise.all(nodeIds.map((id) => figma.getNodeByIdAsync(id)))).filter(
    (node) => node !== null && node.type !== "DOCUMENT" && node.type !== "PAGE",
  );

  const textNodesInTarget = getAllTextNodesInSceneNodes(nodes);

  // figma.teamLibrary에서는 variable만 확인할 수 있고, style은 확인할 수 없다.
  // 하드코딩한 key를 가지고 있는 게 현재로서는 최선

  const styles = await Promise.all(v3TextStyleKeys.map((key) => figma.importStyleByKeyAsync(key)));
  const textStyles = styles.filter(({ type }) => type === "TEXT") as TextStyle[];

  // library 추가되어있지 않아도 텍스트 스타일 import는 가능함.
  if (textStyles.length === 0) {
    throw new Error(
      "텍스트 스타일을 찾을 수 없습니다. 최신 버전의 라이브러리가 추가되었는지 확인해주세요.",
    );
  }

  const results = [];

  for await (const textNode of textNodesInTarget) {
    if (await isNodeWithinSystemComponents({ node: textNode, systemComponentKeys })) continue;

    const suggestions = getTextStyleSuggestions(textNode, textStyles);

    const minDistance = Math.min(...suggestions.map(({ distance }) => distance));

    if (minDistance === 0) {
      results.push({
        textNode,
        closestInstanceNode: getClosestInstanceNode(textNode),
        suggestions: suggestions.filter(({ distance }) => distance === minDistance),
      });

      continue;
    }

    const isAllSuggestionsEquivalent =
      suggestions.length > 0 &&
      suggestions.every(
        ({ differences }) =>
          suggestions[0].differences.fontSize === differences.fontSize &&
          suggestions[0].differences.fontWeight === differences.fontWeight &&
          suggestions[0].differences.lineHeight === differences.lineHeight,
      );

    results.push({
      textNode,
      closestInstanceNode: getClosestInstanceNode(textNode),
      suggestions: isAllSuggestionsEquivalent ? suggestions : suggestions.slice(0, 1),
    });
  }

  const serializedResults: SerializedTextStyleSuggestionsResults = results.map(
    ({ textNode, closestInstanceNode, suggestions, ...rest }) => ({
      ...rest,
      selectedNewTextStyleId: textStyles.find(({ id }) => id === textNode.textStyleId)?.id ?? null,
      textNode: serializeTextNode(textNode),
      closestInstanceNode: closestInstanceNode ? serializeInstanceNode(closestInstanceNode) : null,
      suggestions: suggestions.map(({ textStyle, ...rest }) => ({
        ...rest,
        textStyle: serializeTextStyle(textStyle),
      })),
    }),
  );

  const grouped: GroupedSerializedTextStyleSuggestionsResults =
    groupSerializedTextStyleSuggestionsResults(serializedResults);

  const sorted = grouped.sort((a, b) => {
    const aUnselectedCount = a.items.filter(
      ({ selectedNewTextStyleId }) => selectedNewTextStyleId === null,
    ).length;
    const bUnselectedCount = b.items.filter(
      ({ selectedNewTextStyleId }) => selectedNewTextStyleId === null,
    ).length;

    if (aUnselectedCount < a.items.length && bUnselectedCount === b.items.length) return 1;
    if (aUnselectedCount === a.items.length && bUnselectedCount < b.items.length) return -1;

    if (a.items[0].suggestions.length === 0 && b.items[0].suggestions.length > 0) return 1;
    if (a.items[0].suggestions.length > 0 && b.items[0].suggestions.length === 0) return -1;

    if (aUnselectedCount - bUnselectedCount > 0) return 1;
    if (aUnselectedCount - bUnselectedCount < 0) return -1;

    return a.groupId.localeCompare(b.groupId);
  });

  return sorted;
}

export function groupSerializedTextStyleSuggestionsResults(
  serializedResults: SerializedTextStyleSuggestionsResults,
) {
  const grouped: GroupedSerializedTextStyleSuggestionsResults = [];

  for (const result of serializedResults) {
    const { fontSize, fontWeight, lineHeight } = result.textNode;
    const groupId =
      fontSize === null || fontWeight === null || lineHeight === null
        ? "Mixed"
        : `${fontSize} ${getFontWeightLabel(fontWeight)} ${getLineHeightUnitString(lineHeight, fontSize)}`;

    const group = grouped.find(({ groupId: groupIdToCompare }) => groupIdToCompare === groupId);

    if (group) {
      group.items.push(result);

      continue;
    }

    grouped.push({ groupId, items: [result] });
  }

  return grouped;
}

// 가정: 마이그레이션 대상 화면은 iOS 기준으로 디자인되어 있다.
// 혹시 모르니 property에 android같은 정보 있으면 실행 전 알려주는 것도 좋을 듯
export function getTextStyleSuggestions(textNode: TextNode, availableTextStyles: TextStyle[]) {
  return availableTextStyles
    .map((textStyle) => {
      const { fontSize, fontWeight, lineHeight } = textNode;

      // textStyle의 속성들은 mode가 달라져도 기본 mode(V3 Typo에서 iOS)의 값으로 나온다.
      // (모드별 값을 알고 싶으면 boundVariables 참고 필요)
      // 따라서, iOS 기준으로 그려진 대상 화면 - iOS 기준 textStyle 속성 값을 바로 비교 가능.
      const {
        fontSize: styleFontSize,
        lineHeight: styleLineHeight,
        fontName: { style: styleFontStyle },
      } = textStyle;

      const styleFontWeight = getFontWeight(styleFontStyle);

      if (!styleFontWeight) return null;

      const differences = getTextPropertyDifferences(
        { fontSize: styleFontSize, fontWeight: styleFontWeight, lineHeight: styleLineHeight },
        { fontSize, fontWeight, lineHeight },
      );

      if (
        differences.fontSize === null ||
        differences.fontWeight === null ||
        differences.lineHeight === null
      )
        return null;

      // o: 정확히 일치하는 경우
      if (
        differences.fontSize === 0 &&
        differences.fontWeight === 0 &&
        differences.lineHeight === 0
      )
        return { distance: 0, textStyle, differences };

      // o: fontSize와 fontWeight가 일치하는 경우
      if (differences.fontSize === 0 && differences.fontWeight === 0)
        return { distance: 1, textStyle, differences };

      return null;
    })
    .filter((suggestion) => suggestion !== null)
    .sort((a, b) => {
      if (a.distance === b.distance)
        return Math.abs(a.differences.lineHeight ?? 0) - Math.abs(b.differences.lineHeight ?? 0);

      return a.distance - b.distance;
    });
}
