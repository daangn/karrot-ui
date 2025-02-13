import { findNewIcons } from "./find-new-icons";

const V3_MONOCHROME_WEIGHT = {
  Line: "Fill",
  Fill: "Line",
};

export async function convertMonochromeWeight() {
  const selection = figma.currentPage.selection;
  if (selection.length === 0) {
    figma.notify("선택된 프레임이 없습니다.", { error: true });
    return;
  }

  const icons = await findNewIcons({ target: "selection" });

  const noti = `${selection.length}개 프레임의 아이콘들을 변경하고 있어요.`;
  figma.notify(noti, { timeout: 2000 });

  for (const icon of icons) {
    const { node, type } = icon;

    if (type !== "monochrome") continue;

    const oldWeight = node.variantProperties?.Weight;

    // V3 아이콘은 Line, Fill이 있음
    if (!oldWeight || (oldWeight !== "Line" && oldWeight !== "Fill")) continue;

    const newWeight = V3_MONOCHROME_WEIGHT[oldWeight];
    node.setProperties({
      Weight: newWeight,
    });
  }

  figma.notify(`${icons.length}개의 모노크롬 아이콘의 Weight를 변경했어요.`, { timeout: 2000 });
}
