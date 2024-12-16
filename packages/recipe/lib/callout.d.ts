interface CalloutVariant {
  /**
  * @default neutral
  */
  variant: "neutral" | "informative" | "warning" | "danger" | "magic";
}

type CalloutVariantMap = {
  [key in keyof CalloutVariant]: Array<CalloutVariant[key]>;
};

export type CalloutVariantProps = Partial<CalloutVariant>;

export type CalloutSlotName = "root" | "icon" | "title" | "spacer" | "label" | "linkLabel" | "actionableIcon" | "dismissButton" | "dismissIcon";

export const calloutVariantMap: CalloutVariantMap;

export function callout(
  props?: CalloutVariantProps,
): Record<CalloutSlotName, string>;