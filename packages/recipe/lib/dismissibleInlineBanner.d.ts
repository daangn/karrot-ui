interface DismissibleInlineBannerVariant {
  /**
  * @default neutralWeak
  */
  variant: "neutralWeak" | "positiveWeak" | "informativeWeak" | "warningWeak" | "warningSolid";
}

type DismissibleInlineBannerVariantMap = {
  [key in keyof DismissibleInlineBannerVariant]: Array<DismissibleInlineBannerVariant[key]>;
};

export type DismissibleInlineBannerVariantProps = Partial<DismissibleInlineBannerVariant>;

export type DismissibleInlineBannerSlotName = "root" | "dismissButton" | "xIcon";

export const dismissibleInlineBannerVariantMap: DismissibleInlineBannerVariantMap;

export function dismissibleInlineBanner(
  props?: DismissibleInlineBannerVariantProps,
): Record<DismissibleInlineBannerSlotName, string>;