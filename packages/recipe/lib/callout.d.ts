interface CalloutVariant {
  type: "default" | "dismissible" | "actionable";
/**
  * @default neutral
  */
  variant: "neutral" | "informative" | "warning" | "danger" | "magic";
}

type CalloutVariantMap = {
  [key in keyof CalloutVariant]: Array<CalloutVariant[key]>;
};

export type CalloutVariantProps = Partial<CalloutVariant>;

export type CalloutSlotName = "root" | "content" | "icon" | "title" | "spacer" | "label" | "linkLabel" | "dismissButton" | "xIcon" | "chevronRightIcon";

export const calloutVariantMap: CalloutVariantMap;

export function callout(
  props?: CalloutVariantProps,
): Record<CalloutSlotName, string>;