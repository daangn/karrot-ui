import {
  v3HotfixMonochromeKeyMap,
  v3HotfixMultiColorKeyMap,
} from "@/iconography/data/icon-component-name-key-map";
import { iconOldNewMap, iconOldNewMapMultiColor } from "@/iconography/data/icon-old-new-map";
import type {
  ErrorEventHandler,
  HotfixCountIconsEventHandler,
  HotfixCountUpEventHandler,
  OldWeight,
  Reports,
  ReportsEventHandler,
} from "@/iconography/types";
import { findClosestFrameParent } from "@/iconography/utils/frame";
import { stripBeforeIcon } from "@/iconography/utils/string";
import { getNewVariant } from "@/iconography/utils/variant";
import { emit } from "@create-figma-plugin/utilities";
import { findNewIcons } from "./find-new-icons";
import { findOldIconsInSelection } from "./find-old-icons";

type IconOldName = keyof typeof iconOldNewMap;
type IconOldNameMultiColor = keyof typeof iconOldNewMapMultiColor;
type IconNewName = keyof typeof iconOldNewMap;
type IconNewNameMultiColor = keyof typeof iconOldNewMapMultiColor;

async function changeMonochromeIconByComponentKey(node: InstanceNode, componentKey: string) {
  try {
    const oldVariantProperties = node.variantProperties;
    const oldWeight = oldVariantProperties?.Weight as OldWeight;
    const oldVectorNode = node.children[0] as VectorNode;
    const oldVectorFill = (oldVectorNode.fills as SolidPaint[])[0] as SolidPaint | undefined;
    const oldVectorStroke = (oldVectorNode.strokes as SolidPaint[])[0] as SolidPaint | undefined;
    const oldVectorFillStyleId = (oldVectorNode.fillStyleId as string) || "";
    const oldVectorStrokeStyleId = (oldVectorNode.strokeStyleId as string) || "";

    const newComponentSet = (await figma.importComponentSetByKeyAsync(
      componentKey,
    )) as ComponentSetNode;
    const newComponent = newComponentSet.children.find(
      (node) => node.type === "COMPONENT" && node.name.includes(getNewVariant(oldWeight)),
    ) as ComponentNode;

    node.swapComponent(newComponent);

    const vectorNodes = node.children.filter((node) => node.type === "VECTOR") as VectorNode[];
    for (const vectorNode of vectorNodes) {
      vectorNode.name = "vector";

      if (oldVectorFillStyleId || oldVectorStrokeStyleId) {
        await vectorNode.setFillStyleIdAsync(oldVectorFillStyleId);
        await vectorNode.setStrokeStyleIdAsync(oldVectorStrokeStyleId);
      } else {
        vectorNode.fills = oldVectorFill
          ? [oldVectorFill]
          : oldVectorStroke
            ? [oldVectorStroke]
            : [];
      }
    }

    return {
      ok: true,
      message: "아이콘 변경 완료",
    };
  } catch (error) {
    return {
      ok: false,
      message: error,
    };
  }
}

async function changeMultiColorIconByComponentKey(node: InstanceNode, componentKey: string) {
  try {
    const newComponent = (await figma.importComponentByKeyAsync(componentKey)) as ComponentNode;

    const originalWidth = node.width;
    const originalHeight = node.height;

    node.swapComponent(newComponent);
    node.fills = [];
    node.resize(originalWidth, originalHeight);

    return {
      ok: true,
      message: "아이콘 변경 완료",
    };
  } catch (error) {
    return {
      ok: false,
      message: error,
    };
  }
}

export async function hotfix(target: "root" | "page" | "selection") {
  const icons = await findNewIcons({ target });
  const result: { ok: boolean; message: unknown }[] = [];

  emit<HotfixCountIconsEventHandler>("HOTFIX_COUNT_ICONS", icons.length);

  for (const iconFrame of icons) {
    const { node, type } = iconFrame;

    if (type === "monochrome") {
      const newComponentKey =
        v3HotfixMonochromeKeyMap[iconFrame.name as keyof typeof v3HotfixMonochromeKeyMap];

      if (!newComponentKey) {
        console.warn(`newComponentKey가 없습니다. ${iconFrame.name}`);
        result.push({ ok: false, message: "newComponentKey가 없습니다." });
        continue;
      }

      const changeResult = await changeMonochromeIconByComponentKey(node, newComponentKey);
      result.push(changeResult);
      emit<HotfixCountUpEventHandler>("HOTFIX_COUNT_UP");
    } else {
      const newComponentKey =
        v3HotfixMultiColorKeyMap[iconFrame.name as keyof typeof v3HotfixMultiColorKeyMap];

      if (!newComponentKey) {
        console.warn(`newComponentKey가 없습니다. ${iconFrame.name}`);
        result.push({ ok: false, message: "newComponentKey가 없습니다." });
        continue;
      }

      const changeResult = await changeMultiColorIconByComponentKey(node, newComponentKey);
      result.push(changeResult);
      emit<HotfixCountUpEventHandler>("HOTFIX_COUNT_UP");
    }
  }

  return result;
}

export async function changeIcons() {
  const storageReports = await figma.clientStorage.getAsync("icon-migration-reports");
  const reports: Reports = storageReports || {};

  const selection = figma.currentPage.selection;
  if (selection.length === 0) {
    figma.notify("선택된 프레임이 없습니다.", { error: true });
    return;
  }

  const icons = await findOldIconsInSelection();

  const noti = `${selection.length}개 프레임의 아이콘들을 변경하고 있어요.`;
  figma.notify(noti, { timeout: 2000 });

  for (const iconFrame of icons) {
    try {
      const { node, name, type } = iconFrame;

      const oldName = stripBeforeIcon(name as string);
      const newName =
        type === "monochrome"
          ? stripBeforeIcon(iconOldNewMap[oldName as IconOldName])
          : stripBeforeIcon(iconOldNewMapMultiColor[oldName as IconOldNameMultiColor]);

      const oldVariantProperties = node.variantProperties;
      if (!oldVariantProperties) {
        console.warn("no variantProperties", name);
        continue;
      }

      // 모노크롬 아이콘 변경
      if (type === "monochrome") {
        const map = v3HotfixMonochromeKeyMap as unknown as Record<IconNewName, string>;
        const newComponentKey = map[newName as IconNewName];
        if (!newComponentKey) {
          console.warn(`newComponentKey가 없습니다. ${oldName}`);
          continue;
        }

        await changeMonochromeIconByComponentKey(node, newComponentKey);

        // Report 추가
        const encodedRootName = encodeURIComponent(figma.root.name);
        if (!reports[figma.root.name]) {
          reports[figma.root.name] = {
            rootFigmaLink: `https://www.figma.com/file/${figma.fileKey}/${encodedRootName}`,
            pages: {},
          };
        }
        if (!reports[figma.root.name].pages[figma.currentPage.name]) {
          reports[figma.root.name].pages[figma.currentPage.name] = {
            figmaPageLink: `https://www.figma.com/design/${figma.fileKey}/${encodedRootName}?node-id=${figma.currentPage.id}`,
            figmaPageId: figma.currentPage.id,
            reports: [],
          };
        }

        const closetFrame = findClosestFrameParent(node);
        if (!closetFrame || closetFrame.type !== "FRAME") {
          console.warn("closetFrame이 없습니다.");
          continue;
        }

        reports[figma.root.name].pages[figma.currentPage.name].reports.push({
          beforeNodeId: node.id,
          beforeNodeName: oldName,
          type: "monochrome",
          afterNodeName: iconOldNewMap[oldName as IconOldName],
          parentFrameName: closetFrame.name,
          link: `https://www.figma.com/design/${figma.fileKey}/${encodedRootName}?node-id=${closetFrame.id}&node-type=frame`,
        });
      }
      // 멀티컬러 아이콘 변경
      else {
        const map = v3HotfixMultiColorKeyMap as unknown as Record<IconNewNameMultiColor, string>;

        const newComponentKey = map[newName as IconNewNameMultiColor];

        if (!newComponentKey) {
          console.warn(`newComponentKey가 없습니다. ${oldName}`);
          // figma.notify(`${oldName}은 삭제되었어요.`, { error: true, timeout: 5000 });
          // node.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
          continue;
        }

        await changeMultiColorIconByComponentKey(node, newComponentKey);

        // Report 추가
        const encodedRootName = encodeURIComponent(figma.root.name);
        if (!reports[figma.root.name]) {
          reports[figma.root.name] = {
            rootFigmaLink: `https://www.figma.com/file/${figma.fileKey}/${encodedRootName}`,
            pages: {},
          };
        }
        if (!reports[figma.root.name].pages[figma.currentPage.name]) {
          reports[figma.root.name].pages[figma.currentPage.name] = {
            figmaPageLink: `https://www.figma.com/design/${figma.fileKey}/${encodedRootName}?node-id=${figma.currentPage.id}`,
            figmaPageId: figma.currentPage.id,
            reports: [],
          };
        }

        const closetFrame = findClosestFrameParent(node);
        if (!closetFrame || closetFrame.type !== "FRAME") {
          console.warn("closetFrame이 없습니다.");
          continue;
        }

        reports[figma.root.name].pages[figma.currentPage.name].reports.push({
          beforeNodeId: node.id,
          beforeNodeName: oldName,
          type: "multicolor",
          afterNodeName: iconOldNewMapMultiColor[oldName as IconOldNameMultiColor],
          parentFrameName: closetFrame.name,
          link: `https://www.figma.com/design/${figma.fileKey}/${encodedRootName}?node-id=${closetFrame.id}&node-type=frame`,
        });
      }
    } catch (error) {
      emit<ErrorEventHandler>("ERROR");
      console.log("error", error);
      figma.notify(`아이콘 변경 실패: ${error}`, { error: true });
    }
  }

  // iconFrame.id이 같은 경우는 제거
  const filteredReports = Object.entries(reports).reduce((acc, [key, value]) => {
    const filteredPages = Object.entries(value.pages).reduce(
      (acc, [key, value]) => {
        const filteredReports = value.reports.filter(
          (report, index, self) =>
            index ===
            self.findIndex(
              (t) =>
                t.beforeNodeId === report.beforeNodeId && t.afterNodeName === report.afterNodeName,
            ),
        );
        acc[key] = { ...value, reports: filteredReports };
        return acc;
      },
      {} as (typeof value)["pages"],
    );
    acc[key] = { ...value, pages: filteredPages };
    return acc;
  }, {} as Reports);

  await figma.clientStorage.setAsync("icon-migration-reports", filteredReports);
  figma.notify("아이콘 변경 완료");
  emit<ReportsEventHandler>("REPORTS", filteredReports);
}
