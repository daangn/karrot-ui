interface ActionSheetItemVariant {
  /**
  * @default neutral
  */
  tone: "neutral" | "danger";
}

type ActionSheetItemVariantMap = {
  [key in keyof ActionSheetItemVariant]: Array<ActionSheetItemVariant[key]>;
};

export type ActionSheetItemVariantProps = Partial<ActionSheetItemVariant>;

export type ActionSheetItemSlotName = "root" | "prefixIcon" | "label";

export const actionSheetItemVariantMap: ActionSheetItemVariantMap;

export function actionSheetItem(
  props?: ActionSheetItemVariantProps,
): Record<ActionSheetItemSlotName, string>;