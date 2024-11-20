interface LinkInlineBannerVariant {
  /**
  * @default neutralWeak
  */
  variant: "neutralWeak" | "positiveWeak" | "informativeWeak" | "warningWeak" | "warningSolid" | "dangerWeak" | "dangerSolid";
}

type LinkInlineBannerVariantMap = {
  [key in keyof LinkInlineBannerVariant]: Array<LinkInlineBannerVariant[key]>;
};

export type LinkInlineBannerVariantProps = Partial<LinkInlineBannerVariant>;

export type LinkInlineBannerSlotName = "root" | "content" | "icon" | "title" | "spacer" | "label" | "linkLabel";

export const linkInlineBannerVariantMap: LinkInlineBannerVariantMap;

export function linkInlineBanner(
  props?: LinkInlineBannerVariantProps,
): Record<LinkInlineBannerSlotName, string>;