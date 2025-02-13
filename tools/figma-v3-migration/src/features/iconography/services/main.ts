import { changeIcons, hotfix } from "@/iconography/services/change-icons";
import { findNewIcons } from "@/iconography/services/find-new-icons";
import { findOldIconsInSelection } from "@/iconography/services/find-old-icons";
import { stripBeforeIcon } from "@/iconography/utils/string";
import { convertMonochromeWeight } from "@/iconography/services/convert-monochrome-weight";
import { emit, on, showUI } from "@create-figma-plugin/utilities";
import type {
  ChangeComponentPrefix,
  ChangeIconEventHandler,
  CheckNewIconEventHandler,
  CheckOldIconEventHandler,
  ClearReportsEventHandler,
  ConvertMonochromeWeightEventHandler,
  EmitGetChangedIconCountEventHandler,
  FrameSelectionEventHandler,
  GetComponentKeysEventHandler,
  HotfixEventHandler,
  HotfixStatusEventHandler,
  OnGetChangedIconCountEventHandler,
  ReportsEventHandler,
  ReturnNewIconEventHandler,
  ReturnOldIconEventHandler,
} from "../types";

/**
 * 1. 이전 아이콘 -> 새로운 아이콘 변경할 때도 변경될 variant를 설정할 수 있도록
 * - auto (fill -> fill, thin, regular -> line)
 * - fill (무조건 fill로 변경됩니다.)
 * - line (무조건 line로 변경됩니다.)
 *
 * 2. 새로운 아이콘 -> 새로운 아이콘의 variant를 설정할 수 있도록
 * - fill (무조건 fill로 변경됩니다.)
 * - line (무조건 line로 변경됩니다.)
 */

export default async function () {
  showUI({
    height: 460,
    width: 300,
  });

  const storageReports = await figma.clientStorage.getAsync("icon-migration-reports");
  emit<ReportsEventHandler>("REPORTS", storageReports);

  // 시작했을 때 선택된 프레임이 있는지 체크
  const selection = figma.currentPage.selection;
  emit<FrameSelectionEventHandler>("FRAME_SELECTION", selection.length);
}

on<HotfixEventHandler>("HOTFIX", async (target) => {
  emit<HotfixStatusEventHandler>("HOTFIX_STATUS", "loading");
  const result = await hotfix(target);
  emit<HotfixStatusEventHandler>("HOTFIX_STATUS", "init");
  figma.notify(`${result?.length ?? 0}개의 아이콘이 변경됐어요.`, { timeout: 2000 });
});

on<CheckOldIconEventHandler>("CHECK_OLD_ICON", async () => {
  const icons = await findOldIconsInSelection();

  for (const icon of icons) {
    const { node } = icon;
    const iconNode = (await figma.getNodeByIdAsync(node.id)) as InstanceNode;
    iconNode.fills = [{ type: "SOLID", color: { r: 1, g: 0, b: 0 } }];
  }

  figma.notify(`${icons.length}개의 예전 아이콘들을 발견했어요.`, { timeout: 2000 });
});

on<CheckNewIconEventHandler>("CHECK_NEW_ICON", async () => {
  const icons = await findNewIcons({ target: "selection" });

  for (const icon of icons) {
    const { node } = icon;
    const iconNode = (await figma.getNodeByIdAsync(node.id)) as InstanceNode;
    iconNode.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 1 } }];
  }

  figma.notify(`${icons.length}개의 새로운 아이콘이 발견됐어요.`, { timeout: 2000 });
});

on<ReturnNewIconEventHandler>("RETURN_NEW_ICON", async () => {
  const newIcons = await findNewIcons({ target: "selection" });

  for (const icon of newIcons) {
    const { node } = icon;
    const iconNode = (await figma.getNodeByIdAsync(node.id)) as InstanceNode;
    iconNode.fills = [];
  }

  figma.notify(`${newIcons.length}개의 새로운 아이콘 배경색을 되돌렸어요.`, { timeout: 2000 });
});
on<ReturnOldIconEventHandler>("RETURN_OLD_ICON", async () => {
  const oldIcons = await findOldIconsInSelection();

  for (const icon of oldIcons) {
    const { node } = icon;
    const iconNode = (await figma.getNodeByIdAsync(node.id)) as InstanceNode;
    iconNode.fills = [];
  }

  figma.notify(`${oldIcons.length}개의 예전 아이콘 배경색을 되돌렸어요.`, { timeout: 2000 });
});

on<ChangeIconEventHandler>("CHANGE_ICON", async () => {
  await changeIcons();
});

on<ClearReportsEventHandler>("CLEAR_REPORTS", async () => {
  await figma.clientStorage.setAsync("icon-migration-reports", {});
  emit<ReportsEventHandler>("REPORTS", {});
});

on<GetComponentKeysEventHandler>("GET_COMPONENT_KEYS", () => {
  const iconaFrame = figma.currentPage.findOne((node) =>
    node.name.startsWith("icona-frame"),
  ) as FrameNode;

  const frames = iconaFrame.children as FrameNode[];

  const result = {} as Record<string, string>;
  for (const frame of frames) {
    for (const child of frame.children) {
      if (child.type === "COMPONENT") {
        const name = stripBeforeIcon(child.name);
        result[name] = child.key;
      }

      if (child.type === "COMPONENT_SET") {
        const name = stripBeforeIcon(child.name);
        result[name] = child.key;
      }
    }
  }

  console.log("result", result);
});

on<EmitGetChangedIconCountEventHandler>("EMIT_GET_CHANGED_ICON_COUNT", async () => {
  const selection = figma.currentPage.selection;
  if (selection.length === 0) {
    figma.notify("선택된 프레임이 없습니다.", { error: true });
    return;
  }
  const icons = await findOldIconsInSelection();

  emit<OnGetChangedIconCountEventHandler>(
    "ON_GET_CHANGED_ICON_COUNT",
    icons.length,
    selection.length,
  );
});

on<ChangeComponentPrefix>("CHANGE_COMPONENT_PREFIX", async () => {
  const iconaFrame = figma.currentPage.findOne((node) =>
    node.name.startsWith("icona-frame"),
  ) as FrameNode;

  const componentSets = iconaFrame.children.filter(
    (node) => node.type === "COMPONENT_SET",
  ) as ComponentSetNode[];

  // ❌ -> 🌱
  for (const componentSet of componentSets) {
    const oldName = componentSet.name;
    if (oldName.startsWith("❌")) {
      componentSet.name = oldName.replace(/^❌/, "🌱");
    }
  }
});

on<ConvertMonochromeWeightEventHandler>("CONVERT_MONOCHROME_WEIGHT", async () => {
  await convertMonochromeWeight();
});

figma.on("selectionchange", () => {
  const selection = figma.currentPage.selection;
  emit<FrameSelectionEventHandler>("FRAME_SELECTION", selection.length);
});
