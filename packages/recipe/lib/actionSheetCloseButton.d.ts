interface ActionSheetCloseButtonVariant {
  
}

type ActionSheetCloseButtonVariantMap = {
  [key in keyof ActionSheetCloseButtonVariant]: Array<ActionSheetCloseButtonVariant[key]>;
};

export type ActionSheetCloseButtonVariantProps = Partial<ActionSheetCloseButtonVariant>;

export type ActionSheetCloseButtonSlotName = "root" | "label";

export const actionSheetCloseButtonVariantMap: ActionSheetCloseButtonVariantMap;

export function actionSheetCloseButton(
  props?: ActionSheetCloseButtonVariantProps,
): Record<ActionSheetCloseButtonSlotName, string>;