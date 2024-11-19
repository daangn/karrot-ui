interface InlineBannerVariant {
  /**
  * @default neutralWeak
  */
  variant: "neutralWeak" | "positiveWeak" | "informativeWeak" | "warningWeak" | "warningSolid" | "dangerWeak" | "dangerSolid";
}

type InlineBannerVariantMap = {
  [key in keyof InlineBannerVariant]: Array<InlineBannerVariant[key]>;
};

export type InlineBannerVariantProps = Partial<InlineBannerVariant>;

export type InlineBannerSlotName = "root" | "content" | "icon" | "title" | "spacer" | "label";

export const inlineBannerVariantMap: InlineBannerVariantMap;

export function inlineBanner(
  props?: InlineBannerVariantProps,
): Record<InlineBannerSlotName, string>;