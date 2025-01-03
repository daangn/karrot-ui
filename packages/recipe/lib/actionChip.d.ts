interface ActionChipVariant {
  /**
  * @default medium
  */
  size: "medium" | "small";
/**
  * @default withText
  */
  layout: "withText" | "iconOnly";
}

type ActionChipVariantMap = {
  [key in keyof ActionChipVariant]: Array<ActionChipVariant[key]>;
};

export type ActionChipVariantProps = Partial<ActionChipVariant>;

export type ActionChipSlotName = "root" | "label" | "icon" | "prefixIcon" | "suffixIcon" | "count";

export const actionChipVariantMap: ActionChipVariantMap;

export function actionChip(
  props?: ActionChipVariantProps,
): Record<ActionChipSlotName, string>;