interface ActionableInlineBannerVariant {
  /**
  * @default neutralWeak
  */
  variant: "neutralWeak" | "positiveWeak" | "informativeWeak" | "warningWeak" | "warningSolid" | "dangerWeak" | "dangerSolid";
}

type ActionableInlineBannerVariantMap = {
  [key in keyof ActionableInlineBannerVariant]: Array<ActionableInlineBannerVariant[key]>;
};

export type ActionableInlineBannerVariantProps = Partial<ActionableInlineBannerVariant>;

export type ActionableInlineBannerSlotName = "root" | "chevronRightIcon";

export const actionableInlineBannerVariantMap: ActionableInlineBannerVariantMap;

export function actionableInlineBanner(
  props?: ActionableInlineBannerVariantProps,
): Record<ActionableInlineBannerSlotName, string>;