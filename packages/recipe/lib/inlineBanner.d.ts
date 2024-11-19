interface InlineBannerVariant {
  type: "default" | "link" | "dismissible" | "actionable";
/**
  * @default neutralWeak
  */
  variant: "neutralWeak" | "positiveWeak" | "informativeWeak" | "warningWeak" | "warningSolid" | "dangerWeak" | "dangerSolid";
}

type InlineBannerVariantMap = {
  [key in keyof InlineBannerVariant]: Array<InlineBannerVariant[key]>;
};

export type InlineBannerVariantProps = Partial<InlineBannerVariant>;

export type InlineBannerSlotName = "root" | "content" | "icon" | "title" | "spacer" | "label" | "linkLabel" | "dismissButton" | "xIcon" | "chevronRightIcon";

export const inlineBannerVariantMap: InlineBannerVariantMap;

export function inlineBanner(
  props?: InlineBannerVariantProps,
): Record<InlineBannerSlotName, string>;