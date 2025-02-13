import { iconOldComponentNameKeyMapMultiColor } from "@/iconography/data/icon-component-name-key-map";
import { iconOldNewMap } from "@/iconography/data/icon-old-new-map";
import { getInstanceFromSelection } from "@/iconography/utils/selection";
import { stripBeforeIcon } from "@/iconography/utils/string";

type IconOldName = keyof typeof iconOldNewMap;

const olds = Object.keys(iconOldNewMap);
const oldsMultiColor = Object.keys(iconOldComponentNameKeyMapMultiColor);

export async function findOldIconsInSelection() {
  const instances = getInstanceFromSelection();

  const result = [];
  for (const instance of instances) {
    if (!instance?.name) continue;

    // Promises
    const mainComponent = await instance.getMainComponentAsync();

    if (!mainComponent) continue;

    const parent = mainComponent.parent;

    if (!parent || parent.type !== "COMPONENT_SET") continue;
    const parentName = stripBeforeIcon(parent.name) as IconOldName;

    // 멀티컬러 아이콘 체크
    if (oldsMultiColor.includes(parentName) && instance.visible === true) {
      const definitions = parent.componentPropertyDefinitions;

      // NOTE: Property 1이 없는 경우는 제외
      if (definitions["Property 1"]) {
        if (definitions["Property 1"]?.variantOptions?.length !== 4) {
          continue;
        }

        result.push({
          name: parentName,
          node: instance,
          type: "multicolor",
        });
      }

      // NOTE: 이전 아이콘 Component Set은 4개의 variantOptions를 가지고 있음
      if (definitions.size?.variantOptions?.length !== 4) {
        continue;
      }

      result.push({
        name: parentName,
        node: instance,
        type: "multicolor",
      });
    }

    // 모노크롬 아이콘 체크
    else if (olds.includes(parent.name) && instance.visible === true) {
      const definitions = parent.componentPropertyDefinitions;

      // NOTE: Property 1이 없는 경우는 제외
      if (definitions["Property 1"]) {
        if (definitions["Property 1"]?.variantOptions?.length !== 3) {
          continue;
        }

        result.push({
          name: parentName,
          node: instance,
          type: "monochrome",
        });
      }

      // NOTE: 이전 아이콘 Component Set은 3개의 variantOptions를 가지고 있음
      // NOTE: 새 아이콘은 2개
      if (definitions.Weight?.variantOptions?.length !== 3) {
        continue;
      }

      result.push({
        name: parentName,
        node: instance,
        type: "monochrome",
      });
    }
  }

  return result;
}
