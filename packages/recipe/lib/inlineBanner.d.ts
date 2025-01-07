declare interface InlineBannerVariant {
  /**
  * @default neutralWeak
  */
  variant: "neutralWeak" | "positiveWeak" | "informativeWeak" | "warningWeak" | "warningSolid" | "dangerWeak" | "dangerSolid";
}

declare type InlineBannerVariantMap = {
  [key in keyof InlineBannerVariant]: Array<InlineBannerVariant[key]>;
};

export declare type InlineBannerVariantProps = Partial<InlineBannerVariant>;

export declare type InlineBannerSlotName = "root" | "content" | "icon" | "title" | "spacer" | "description" | "linkLabel" | "actionableIcon" | "dismissButton" | "dismissIcon";

export declare const inlineBannerVariantMap: InlineBannerVariantMap;

export declare const inlineBanner: ((
  props?: InlineBannerVariantProps,
) => Record<InlineBannerSlotName, string>) & {
  splitVariantProps: <T extends InlineBannerVariantProps>(
    props: T,
  ) => [InlineBannerVariantProps, Omit<T, keyof InlineBannerVariantProps>];
}