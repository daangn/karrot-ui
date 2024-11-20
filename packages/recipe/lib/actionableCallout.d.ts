interface ActionableCalloutVariant {
  /**
  * @default neutral
  */
  variant: "neutral" | "informative" | "warning" | "danger" | "magic";
}

type ActionableCalloutVariantMap = {
  [key in keyof ActionableCalloutVariant]: Array<ActionableCalloutVariant[key]>;
};

export type ActionableCalloutVariantProps = Partial<ActionableCalloutVariant>;

export type ActionableCalloutSlotName = "root" | "content" | "title" | "spacer" | "label" | "chevronRightIcon";

export const actionableCalloutVariantMap: ActionableCalloutVariantMap;

export function actionableCallout(
  props?: ActionableCalloutVariantProps,
): Record<ActionableCalloutSlotName, string>;