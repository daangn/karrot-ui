interface DismissibleCalloutVariant {
  /**
  * @default neutral
  */
  variant: "neutral" | "informative" | "warning" | "danger" | "magic";
}

type DismissibleCalloutVariantMap = {
  [key in keyof DismissibleCalloutVariant]: Array<DismissibleCalloutVariant[key]>;
};

export type DismissibleCalloutVariantProps = Partial<DismissibleCalloutVariant>;

export type DismissibleCalloutSlotName = "root" | "content" | "title" | "spacer" | "label" | "linkLabel" | "dismissButton" | "xIcon";

export const dismissibleCalloutVariantMap: DismissibleCalloutVariantMap;

export function dismissibleCallout(
  props?: DismissibleCalloutVariantProps,
): Record<DismissibleCalloutSlotName, string>;