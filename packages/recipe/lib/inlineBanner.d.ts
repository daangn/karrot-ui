interface InlineBannerVariant {
  /**
  * @default weak
  */
  variant: "solid" | "weak";
/**
  * @default neutral
  */
  tone: "neutral" | "positive" | "informative" | "warning" | "danger";
}

type InlineBannerVariantMap = {
  [key in keyof InlineBannerVariant]: Array<InlineBannerVariant[key]>;
};

export type InlineBannerVariantProps = Partial<InlineBannerVariant>;

export type InlineBannerSlotName = "root" | "content" | "prefixIcon" | "label" | "actionLabel" | "dismissButton" | "xIcon";

export const inlineBannerVariantMap: InlineBannerVariantMap;

export function inlineBanner(
  props?: InlineBannerVariantProps,
): Record<InlineBannerSlotName, string>;