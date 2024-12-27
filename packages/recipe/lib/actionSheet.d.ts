interface ActionSheetVariant {
  
}

type ActionSheetVariantMap = {
  [key in keyof ActionSheetVariant]: Array<ActionSheetVariant[key]>;
};

export type ActionSheetVariantProps = Partial<ActionSheetVariant>;

export type ActionSheetSlotName = "backdrop" | "container" | "content" | "list" | "group" | "footer";

export const actionSheetVariantMap: ActionSheetVariantMap;

export function actionSheet(
  props?: ActionSheetVariantProps,
): Record<ActionSheetSlotName, string>;