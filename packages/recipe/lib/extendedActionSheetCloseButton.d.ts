declare interface ExtendedActionSheetCloseButtonVariant {
  
}

declare type ExtendedActionSheetCloseButtonVariantMap = {
  [key in keyof ExtendedActionSheetCloseButtonVariant]: Array<ExtendedActionSheetCloseButtonVariant[key]>;
};

export declare type ExtendedActionSheetCloseButtonVariantProps = Partial<ExtendedActionSheetCloseButtonVariant>;

export declare type ExtendedActionSheetCloseButtonSlotName = "root" | "label";

export declare const extendedActionSheetCloseButtonVariantMap: ExtendedActionSheetCloseButtonVariantMap;

export declare const extendedActionSheetCloseButton: ((
  props?: ExtendedActionSheetCloseButtonVariantProps,
) => Record<ExtendedActionSheetCloseButtonSlotName, string>) & {
  splitVariantProps: <T extends ExtendedActionSheetCloseButtonVariantProps>(
    props: T,
  ) => [ExtendedActionSheetCloseButtonVariantProps, Omit<T, keyof ExtendedActionSheetCloseButtonVariantProps>];
}