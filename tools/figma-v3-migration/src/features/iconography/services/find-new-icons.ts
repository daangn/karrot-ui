import { iconNewComponentNameKeyMapMultiColor } from "@/iconography/data/icon-component-name-key-map";
import { iconOldNewMap } from "@/iconography/data/icon-old-new-map";
import {
  getInstanceFromPage,
  getInstanceFromRoot,
  getInstanceFromSelection,
} from "@/iconography/utils/selection";
import { stripBeforeIcon } from "@/iconography/utils/string";

type IconNewName = keyof typeof iconOldNewMap;

const news = Object.values(iconOldNewMap);
const newsMultiColor = Object.keys(iconNewComponentNameKeyMapMultiColor);

export async function findNewIcons({
  target,
}: {
  target: "selection" | "root" | "page";
}) {
  const instances =
    target === "root"
      ? await getInstanceFromRoot()
      : target === "page"
        ? getInstanceFromPage()
        : getInstanceFromSelection();

  const result = [];
  for (const instance of instances) {
    if (!instance?.name) continue;

    // Promises
    const mainComponent = await instance.getMainComponentAsync();
    if (!mainComponent) continue;

    const name = stripBeforeIcon(mainComponent.name) as IconNewName;

    // 멀티컬러 아이콘 체크
    // 멀티컬러는 Component Set이 아닌 Component라서 미리 체크
    if (newsMultiColor.includes(name)) {
      const description = mainComponent.description;

      if (!description.includes("🥕Keyword🥕")) {
        continue;
      }

      result.push({
        name,
        node: instance,
        type: "multicolor",
      });
    }

    const parent = mainComponent.parent;
    if (!parent || parent.type !== "COMPONENT_SET") continue;
    const parentName = stripBeforeIcon(parent.name) as IconNewName;

    // 모노크롬 아이콘 체크
    if (news.includes(parentName)) {
      const definitions = parent.componentPropertyDefinitions;
      const description = parent.description;

      if (!description.includes("🥕Keyword🥕")) {
        continue;
      }

      // NOTE: 이전 아이콘 Component Set은 3개의 variantOptions를 가지고 있음
      // NOTE: 새 아이콘은 2개
      if (definitions.Weight.variantOptions?.length !== 2) {
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
