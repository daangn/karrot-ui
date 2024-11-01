interface InlineBannerVariant {
  variant: "solid" | "weak";
  tone: "neutral" | "positive" | "informative" | "warning" | "danger"
}

type InlineBannerVariantMap = {
  [key in keyof InlineBannerVariant]: Array<InlineBannerVariant[key]>;
};

export type InlineBannerVariantProps = Partial<InlineBannerVariant>;

export type InlineBannerSlotName = "root" | "content" | "prefixIconContainer" | "prefixIcon" | "xIcon" | "label" | "link";

export const inlineBannerVariantMap: InlineBannerVariantMap;

export function inlineBanner(
  props?: InlineBannerVariantProps,
): Record<InlineBannerSlotName, string>;