declare interface CalloutVariant {
  /**
  * @default neutral
  */
  variant: "neutral" | "informative" | "warning" | "danger" | "magic";
}

declare type CalloutVariantMap = {
  [key in keyof CalloutVariant]: Array<CalloutVariant[key]>;
};

export declare type CalloutVariantProps = Partial<CalloutVariant>;

export declare type CalloutSlotName = "root" | "icon" | "title" | "spacer" | "label" | "linkLabel" | "actionableIcon" | "dismissButton" | "dismissIcon";

export declare const calloutVariantMap: CalloutVariantMap;

export declare const callout: ((
  props?: CalloutVariantProps,
) => Record<CalloutSlotName, string>) & {
  splitVariantProps: <T extends CalloutVariantProps>(
    props: T,
  ) => [CalloutVariantProps, Omit<T, keyof CalloutVariantProps>];
}