// TODO: 이터레이션이 너무 많다

import type {
  LayoutVariablesSuggestionsResults,
  SerializedLayoutVariablesSuggestionsResults,
  SerializedSizingVariablesSuggestionsResults,
  SerializedStrokeWeightAndCornerRadiusVariablesSuggestionsResults,
  SizingVariablesSuggestionsResults,
  StrokeWeightAndCornerRadiusVariablesSuggestionsResults,
} from "@/features/design-system/types";
import { getLibraryVariableCollection } from "@/features/design-system/utils/libraries";
import {
  getAllLayoutVariableBindableNodesInSceneNodes,
  getAllSizingVariableBindableNodesInSceneNodes,
  getAllStrokeWeightOrCornerRadiusVariableBindableNodesInSceneNodes,
  getClosestInstanceNode,
  isNodeWithinSystemComponents,
  serializeBaseNode,
} from "@/features/design-system/utils/nodes";
import { serializeVariable } from "@/features/design-system/utils/variables";
import {
  SEED_V3_LIBRARY_NAME,
  SEED_V3_LIBRARY_VARIABLE_COLLECTION_NAMES,
  SEED_V3_LIBRARY_VARIABLE_PREFIXES,
} from "@/shared/constants";

export const SIZING_VARIABLE_BINDABLE_NODE_FIELDS = [
  "width",
  "height",
  "minWidth",
  "maxWidth",
  "minHeight",
  "maxHeight",
] as const;

export const LAYOUT_VARIABLE_BINDABLE_NODE_FIELDS = [
  "itemSpacing",
  "counterAxisSpacing",
  "paddingLeft",
  "paddingRight",
  "paddingTop",
  "paddingBottom",
] as const;

export const CORNER_RADIUS_VARIABLE_BINDABLE_NODE_FIELDS = [
  "topLeftRadius",
  "topRightRadius",
  "bottomLeftRadius",
  "bottomRightRadius",
] as const;

export const STROKE_WEIGHT_VARIABLE_BINDABLE_NODE_FIELDS = [
  "strokeTopWeight",
  "strokeRightWeight",
  "strokeBottomWeight",
  "strokeLeftWeight",
] as const;

export async function getSerializedSizingVariableSuggestions({
  nodeIds,
  systemComponentKeys,
}: {
  nodeIds: SceneNode["id"][];
  systemComponentKeys: string[];
}): Promise<SerializedSizingVariablesSuggestionsResults> {
  const nodes = (await Promise.all(nodeIds.map((id) => figma.getNodeByIdAsync(id)))).filter(
    (node) => node !== null && node.type !== "DOCUMENT" && node.type !== "PAGE",
  );

  const unitLibrary = await getLibraryVariableCollection({
    libraryName: SEED_V3_LIBRARY_NAME,
    name: SEED_V3_LIBRARY_VARIABLE_COLLECTION_NAMES.UNIT,
  });
  const previewLibrary = await getLibraryVariableCollection({
    libraryName: SEED_V3_LIBRARY_NAME,
    name: SEED_V3_LIBRARY_VARIABLE_COLLECTION_NAMES.PREVIEW,
  });

  if (!unitLibrary || !previewLibrary) {
    throw new Error("신규 라이브러리를 찾을 수 없습니다. 라이브러리가 추가되었는지 확인해주세요.");
  }

  const unitVariableKeys = (
    await figma.teamLibrary.getVariablesInLibraryCollectionAsync(unitLibrary.key)
  ).map(({ key }) => key);

  const previewVariableKeys = (
    await figma.teamLibrary.getVariablesInLibraryCollectionAsync(previewLibrary.key)
  ).map(({ key }) => key);

  if (unitVariableKeys.length === 0 || previewVariableKeys.length === 0) {
    throw new Error("신규 Variable을 찾을 수 없습니다. 라이브러리가 추가되었는지 확인해주세요.");
  }

  const nodesInTarget = getAllSizingVariableBindableNodesInSceneNodes(nodes);

  const availableUnitVariables = await Promise.all(
    unitVariableKeys.map((key) => figma.variables.importVariableByKeyAsync(key)),
  );

  if (nodesInTarget.length === 0) return [];

  const firstNodeWithoutExplicitVariableMode = nodesInTarget.find(
    (node) => Object.keys(node.explicitVariableModes).length === 0,
  );

  if (!firstNodeWithoutExplicitVariableMode)
    throw new Error("모든 레이어에 Variable Mode가 설정되어 있습니다.");

  const availableUnitVariablesWithResolvedValue = availableUnitVariables
    .filter(({ name }) => name.startsWith(SEED_V3_LIBRARY_VARIABLE_PREFIXES.UNIT.DIMENSION))
    .map((variable) => {
      const { value } = variable.resolveForConsumer(firstNodeWithoutExplicitVariableMode);

      if (typeof value !== "number") return null;

      return { variable, value };
    })
    .filter((item) => item !== null);

  const availablePreviewVariables = await Promise.all(
    previewVariableKeys.map((key) => figma.variables.importVariableByKeyAsync(key)),
  );

  const availablePreviewVariablesWithResolvedValue = availablePreviewVariables
    .map((variable) => {
      const { value } = variable.resolveForConsumer(firstNodeWithoutExplicitVariableMode);

      if (typeof value !== "number") return null;

      return { variable, value };
    })
    .filter((item) => item !== null);

  const availableVariablesWithResolvedValue = [
    ...availableUnitVariablesWithResolvedValue,
    ...availablePreviewVariablesWithResolvedValue,
  ];

  const results: SizingVariablesSuggestionsResults = [];

  for await (const node of nodesInTarget) {
    if (node.type === "VECTOR" || node.type === "BOOLEAN_OPERATION") continue;
    if (
      "children" in node &&
      node.children.length > 0 &&
      node.children.every((child) => child.type === "VECTOR")
    )
      continue;

    if (await isNodeWithinSystemComponents({ node, systemComponentKeys })) continue;

    for (const field of SIZING_VARIABLE_BINDABLE_NODE_FIELDS) {
      if (!(field in node)) continue;

      if (
        (field === "width" &&
          "layoutSizingHorizontal" in node &&
          node.layoutSizingHorizontal !== "FIXED") ||
        (field === "height" &&
          "layoutSizingVertical" in node &&
          node.layoutSizingVertical !== "FIXED")
      )
        // hug/fill로 계산된 값을 가진 경우
        continue;

      const value = node[field];
      if (value === null || value === 0) continue;

      const resultFound = results.find((result) => result.oldValue === value);

      if (resultFound) {
        const consumerFound = resultFound.consumers.find(
          ({ node: consumerNode }) => consumerNode.id === node.id,
        );

        if (consumerFound) {
          if (consumerFound.properties.includes(field)) continue;

          consumerFound.properties.push(field);
          continue;
        }

        resultFound.consumers.push({ node, properties: [field] });
        continue;
      }

      results.push({
        oldValue: value,
        consumers: [{ node, properties: [field] }],
        suggestions: availableVariablesWithResolvedValue.filter(
          ({ value: variableValue }) => value === variableValue,
        ),
      });
    }
  }

  const serializedResults: SerializedSizingVariablesSuggestionsResults = results
    .map(({ oldValue, consumers, suggestions }) => ({
      oldValue,
      consumers: consumers.map(({ node, properties }) => {
        const closestInstanceNode = getClosestInstanceNode(node);

        const selectedNewVariableId =
          availableVariablesWithResolvedValue.find(({ value, variable }) =>
            properties.every(
              (property) =>
                node[property] === value &&
                node.boundVariables &&
                node.boundVariables[property]?.id === variable.id,
            ),
          )?.variable.id ?? null;

        return {
          node: serializeBaseNode(node),
          closestInstanceNode: closestInstanceNode ? serializeBaseNode(closestInstanceNode) : null,
          properties,
          selectedNewVariableId,
        };
      }),
      suggestions: suggestions.map(({ variable, value }) => ({
        variable: serializeVariable(variable),
        value,
      })),
    }))
    .sort((a, b) => {
      const aUnselectedCount = a.consumers.filter(
        ({ selectedNewVariableId }) => selectedNewVariableId === null,
      ).length;
      const bUnselectedCount = b.consumers.filter(
        ({ selectedNewVariableId }) => selectedNewVariableId === null,
      ).length;

      if (aUnselectedCount < a.consumers.length && bUnselectedCount === b.consumers.length)
        return 1;
      if (aUnselectedCount === a.consumers.length && bUnselectedCount < b.consumers.length)
        return -1;

      if (a.suggestions.length === 0 && b.suggestions.length > 0) return 1;
      if (a.suggestions.length > 0 && b.suggestions.length === 0) return -1;

      if (a.oldValue - b.oldValue > 0) return 1;
      if (a.oldValue - b.oldValue < 0) return -1;

      if (aUnselectedCount - bUnselectedCount > 0) return 1;
      if (aUnselectedCount - bUnselectedCount < 0) return -1;

      return 0;
    });

  return serializedResults;
}

export async function getSerializedLayoutVariableSuggestions({
  nodeIds,
  systemComponentKeys,
}: {
  nodeIds: SceneNode["id"][];
  systemComponentKeys: string[];
}): Promise<SerializedLayoutVariablesSuggestionsResults> {
  const nodes = (await Promise.all(nodeIds.map((id) => figma.getNodeByIdAsync(id)))).filter(
    (node) => node !== null && node.type !== "DOCUMENT" && node.type !== "PAGE",
  );

  const library = await getLibraryVariableCollection({
    libraryName: SEED_V3_LIBRARY_NAME,
    name: SEED_V3_LIBRARY_VARIABLE_COLLECTION_NAMES.UNIT,
  });
  if (!library) {
    throw new Error("신규 라이브러리를 찾을 수 없습니다. 라이브러리가 추가되었는지 확인해주세요.");
  }

  const variableKeys = (
    await figma.teamLibrary.getVariablesInLibraryCollectionAsync(library.key)
  ).map(({ key }) => key);
  if (variableKeys.length === 0) {
    throw new Error("신규 Variable을 찾을 수 없습니다. 라이브러리가 추가되었는지 확인해주세요.");
  }

  const nodesInTarget = getAllLayoutVariableBindableNodesInSceneNodes(nodes);

  const availableVariables = await Promise.all(
    variableKeys.map((key) => figma.variables.importVariableByKeyAsync(key)),
  );

  if (nodesInTarget.length === 0) return [];

  const firstNodeWithoutExplicitVariableMode = nodesInTarget.find(
    (node) => Object.keys(node.explicitVariableModes).length === 0,
  );

  if (!firstNodeWithoutExplicitVariableMode)
    throw new Error("모든 레이어에 Variable Mode가 설정되어 있습니다.");

  const availableUnitVariablesWithResolvedValue = availableVariables
    .filter(({ name }) => name.startsWith(SEED_V3_LIBRARY_VARIABLE_PREFIXES.UNIT.DIMENSION))
    .map((variable) => {
      const { value } = variable.resolveForConsumer(firstNodeWithoutExplicitVariableMode);

      if (typeof value !== "number") return null;

      return { variable, value };
    })
    .filter((item) => item !== null);

  const results: LayoutVariablesSuggestionsResults = [];

  for await (const node of nodesInTarget) {
    if (node.type === "VECTOR" || node.type === "BOOLEAN_OPERATION") continue;
    if (
      "children" in node &&
      node.children.length > 0 &&
      node.children.every((child) => child.type === "VECTOR")
    )
      continue;

    if (await isNodeWithinSystemComponents({ node, systemComponentKeys })) continue;

    for (const field of LAYOUT_VARIABLE_BINDABLE_NODE_FIELDS) {
      if (!(field in node)) continue;

      if (
        (field === "paddingLeft" ||
          field === "paddingRight" ||
          field === "paddingTop" ||
          field === "paddingBottom") &&
        "children" in node &&
        node.children.length === 0
      )
        continue;

      if (
        (field === "itemSpacing" || field === "counterAxisSpacing") &&
        "children" in node &&
        node.children.length <= 1
      )
        continue;

      const value = (node as FrameNode)[field];
      if (value === null || value === 0) continue;

      const resultFound = results.find((result) => result.oldValue === value);

      if (resultFound) {
        const consumerFound = resultFound.consumers.find(
          ({ node: consumerNode }) => consumerNode.id === node.id,
        );

        if (consumerFound) {
          if (consumerFound.properties.includes(field)) continue;

          consumerFound.properties.push(field);
          continue;
        }

        resultFound.consumers.push({ node, properties: [field] });
        continue;
      }

      results.push({
        oldValue: value,
        consumers: [{ node, properties: [field] }],
        suggestions: availableUnitVariablesWithResolvedValue.filter(
          ({ value: variableValue }) => value === variableValue,
        ),
      });
    }
  }

  const serializedResults: SerializedLayoutVariablesSuggestionsResults = results
    .map(({ oldValue, consumers, suggestions }) => ({
      oldValue,
      consumers: consumers.map(({ node, properties }) => {
        const closestInstanceNode = getClosestInstanceNode(node);

        const selectedNewVariableId =
          availableUnitVariablesWithResolvedValue.find(({ value, variable }) =>
            properties.every(
              (property) =>
                (node as FrameNode)[property] === value &&
                node.boundVariables &&
                node.boundVariables[property]?.id === variable.id,
            ),
          )?.variable.id ?? null;

        return {
          node: serializeBaseNode(node),
          closestInstanceNode: closestInstanceNode ? serializeBaseNode(closestInstanceNode) : null,
          properties,
          selectedNewVariableId,
        };
      }),
      suggestions: suggestions.map(({ variable, value }) => ({
        variable: serializeVariable(variable),
        value,
      })),
    }))
    .sort((a, b) => {
      const aUnselectedCount = a.consumers.filter(
        ({ selectedNewVariableId }) => selectedNewVariableId === null,
      ).length;
      const bUnselectedCount = b.consumers.filter(
        ({ selectedNewVariableId }) => selectedNewVariableId === null,
      ).length;

      if (aUnselectedCount < a.consumers.length && bUnselectedCount === b.consumers.length)
        return 1;
      if (aUnselectedCount === a.consumers.length && bUnselectedCount < b.consumers.length)
        return -1;

      if (a.suggestions.length === 0 && b.suggestions.length > 0) return 1;
      if (a.suggestions.length > 0 && b.suggestions.length === 0) return -1;

      if (a.oldValue - b.oldValue > 0) return 1;
      if (a.oldValue - b.oldValue < 0) return -1;

      if (aUnselectedCount - bUnselectedCount > 0) return 1;
      if (aUnselectedCount - bUnselectedCount < 0) return -1;

      return 0;
    });

  return serializedResults;
}

export async function getSerializedStrokeWeightAndCornerRadiusVariableSuggestions({
  nodeIds,
  systemComponentKeys,
}: {
  nodeIds: SceneNode["id"][];
  systemComponentKeys: string[];
}): Promise<SerializedStrokeWeightAndCornerRadiusVariablesSuggestionsResults> {
  const nodes = (await Promise.all(nodeIds.map((id) => figma.getNodeByIdAsync(id)))).filter(
    (node) => node !== null && node.type !== "DOCUMENT" && node.type !== "PAGE",
  );

  const library = await getLibraryVariableCollection({
    libraryName: SEED_V3_LIBRARY_NAME,
    name: SEED_V3_LIBRARY_VARIABLE_COLLECTION_NAMES.UNIT,
  });
  if (!library) {
    throw new Error("신규 라이브러리를 찾을 수 없습니다. 라이브러리가 추가되었는지 확인해주세요.");
  }

  const variableKeys = (
    await figma.teamLibrary.getVariablesInLibraryCollectionAsync(library.key)
  ).map(({ key }) => key);
  if (variableKeys.length === 0) {
    throw new Error("신규 Variable을 찾을 수 없습니다. 라이브러리가 추가되었는지 확인해주세요.");
  }

  const nodesInTarget = getAllStrokeWeightOrCornerRadiusVariableBindableNodesInSceneNodes(nodes);

  const availableVariables = await Promise.all(
    variableKeys.map((key) => figma.variables.importVariableByKeyAsync(key)),
  );

  if (nodesInTarget.length === 0) return [];

  const firstNodeWithoutExplicitVariableMode = nodesInTarget.find(
    (node) => Object.keys(node.explicitVariableModes).length === 0,
  );

  if (!firstNodeWithoutExplicitVariableMode)
    throw new Error("모든 레이어에 Variable Mode가 설정되어 있습니다.");

  const availableVariablesWithResolvedValue = availableVariables
    .map((variable) => {
      const { value } = variable.resolveForConsumer(firstNodeWithoutExplicitVariableMode);

      if (typeof value !== "number") return null;

      return { variable, value };
    })
    .filter((item) => item !== null);

  const availableStrokeWeightVariablesWithResolvedValue =
    availableVariablesWithResolvedValue.filter(({ variable }) =>
      variable.name.startsWith(SEED_V3_LIBRARY_VARIABLE_PREFIXES.UNIT.STROKE_WIDTH),
    );

  const availableCornerRadiusVariablesWithResolvedValue =
    availableVariablesWithResolvedValue.filter(({ variable }) =>
      variable.name.startsWith(SEED_V3_LIBRARY_VARIABLE_PREFIXES.UNIT.RADIUS),
    );

  const results: StrokeWeightAndCornerRadiusVariablesSuggestionsResults = [];

  for await (const node of nodesInTarget) {
    if (node.type === "VECTOR" || node.type === "BOOLEAN_OPERATION") continue;
    if (
      "children" in node &&
      node.children.length > 0 &&
      node.children.every((child) => child.type === "VECTOR")
    )
      continue;

    if (await isNodeWithinSystemComponents({ node, systemComponentKeys })) continue;

    for (const field of [
      ...STROKE_WEIGHT_VARIABLE_BINDABLE_NODE_FIELDS,
      ...CORNER_RADIUS_VARIABLE_BINDABLE_NODE_FIELDS,
    ]) {
      switch (field) {
        case "strokeLeftWeight":
        case "strokeRightWeight":
        case "strokeTopWeight":
        case "strokeBottomWeight": {
          if (!(field in node) || !("strokes" in node)) continue;

          // stroke가 없는 레이어도 stroke 기본값을 가지고 있음
          if (node.strokes.length === 0) continue;

          const value = (node as FrameNode)[field];
          if (value === null || value === 0) continue;

          const resultFound = results.find(
            (result) => result.oldValue.type === "strokeWeight" && result.oldValue.value === value,
          );

          if (resultFound) {
            const consumerFound = resultFound.consumers.find(
              ({ node: consumerNode }) => consumerNode.id === node.id,
            );

            if (consumerFound) {
              if (consumerFound.properties.includes(field)) continue;

              consumerFound.properties.push(field);
              continue;
            }

            resultFound.consumers.push({ node, properties: [field] });
            continue;
          }

          results.push({
            oldValue: { type: "strokeWeight", value },
            consumers: [{ node, properties: [field] }],
            suggestions: availableStrokeWeightVariablesWithResolvedValue.filter(
              ({ value: variableValue }) => value === variableValue,
            ),
          });

          break;
        }
        case "topLeftRadius":
        case "topRightRadius":
        case "bottomLeftRadius":
        case "bottomRightRadius": {
          if (!(field in node)) continue;

          const value = (node as FrameNode)[field];
          if (value === null || value === 0) continue;

          const resultFound = results.find(
            (result) => result.oldValue.type === "cornerRadius" && result.oldValue.value === value,
          );

          if (resultFound) {
            const consumerFound = resultFound.consumers.find(
              ({ node: consumerNode }) => consumerNode.id === node.id,
            );

            if (consumerFound) {
              if (consumerFound.properties.includes(field)) continue;

              consumerFound.properties.push(field);
              continue;
            }

            resultFound.consumers.push({ node, properties: [field] });
            continue;
          }

          results.push({
            oldValue: { type: "cornerRadius", value },
            consumers: [{ node, properties: [field] }],
            suggestions: availableCornerRadiusVariablesWithResolvedValue.filter(
              ({ value: variableValue }) => value === variableValue,
            ),
          });

          break;
        }
      }
    }
  }

  const serializedResults: SerializedStrokeWeightAndCornerRadiusVariablesSuggestionsResults =
    results
      .map(({ oldValue, consumers, suggestions }) => ({
        oldValue,
        consumers: consumers.map(({ node, properties }) => {
          const closestInstanceNode = getClosestInstanceNode(node);

          const selectedNewVariableId =
            availableVariablesWithResolvedValue.find(({ value, variable }) =>
              properties.every(
                (property) =>
                  (node as FrameNode)[property] === value &&
                  node.boundVariables &&
                  node.boundVariables[property]?.id === variable.id,
              ),
            )?.variable.id ?? null;

          return {
            node: serializeBaseNode(node),
            closestInstanceNode: closestInstanceNode
              ? serializeBaseNode(closestInstanceNode)
              : null,
            properties,
            selectedNewVariableId,
          };
        }),
        suggestions: suggestions.map(({ variable, value }) => ({
          variable: serializeVariable(variable),
          value,
        })),
      }))
      .sort((a, b) => {
        const aUnselectedCount = a.consumers.filter(
          ({ selectedNewVariableId }) => selectedNewVariableId === null,
        ).length;
        const bUnselectedCount = b.consumers.filter(
          ({ selectedNewVariableId }) => selectedNewVariableId === null,
        ).length;

        if (aUnselectedCount < a.consumers.length && bUnselectedCount === b.consumers.length)
          return 1;
        if (aUnselectedCount === a.consumers.length && bUnselectedCount < b.consumers.length)
          return -1;

        const localeCompared = a.oldValue.type.localeCompare(b.oldValue.type);
        if (localeCompared !== 0) return localeCompared;

        if (a.suggestions.length === 0 && b.suggestions.length > 0) return 1;
        if (a.suggestions.length > 0 && b.suggestions.length === 0) return -1;

        if (a.oldValue.value - b.oldValue.value > 0) return 1;
        if (a.oldValue.value - b.oldValue.value < 0) return -1;

        if (aUnselectedCount - bUnselectedCount > 0) return 1;
        if (aUnselectedCount - bUnselectedCount < 0) return -1;

        return 0;
      });

  return serializedResults;
}
