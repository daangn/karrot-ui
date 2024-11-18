interface InlineBannerVariant {
  layout: "withAction" | "withoutAction";
/**
  * @default neutral
  */
  tone: "neutral" | "positive" | "informative" | "warning" | "danger";
/**
  * @default weak
  */
  variant: "weak" | "solid";
}

type InlineBannerVariantMap = {
  [key in keyof InlineBannerVariant]: Array<InlineBannerVariant[key]>;
};

export type InlineBannerVariantProps = Partial<InlineBannerVariant>;

export type InlineBannerSlotName = "root" | "content" | "contentIcon" | "title" | "spacer" | "label" | "link" | "button" | "buttonIcon";

export const inlineBannerVariantMap: InlineBannerVariantMap;

export function inlineBanner(
  props?: InlineBannerVariantProps,
): Record<InlineBannerSlotName, string>;