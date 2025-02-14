declare interface ActionSheetCloseButtonVariant {
  
}

declare type ActionSheetCloseButtonVariantMap = {
  [key in keyof ActionSheetCloseButtonVariant]: Array<ActionSheetCloseButtonVariant[key]>;
};

export declare type ActionSheetCloseButtonVariantProps = Partial<ActionSheetCloseButtonVariant>;

export declare type ActionSheetCloseButtonSlotName = "root" | "label";

export declare const actionSheetCloseButtonVariantMap: ActionSheetCloseButtonVariantMap;

export declare const actionSheetCloseButton: ((
  props?: ActionSheetCloseButtonVariantProps,
) => Record<ActionSheetCloseButtonSlotName, string>) & {
  splitVariantProps: <T extends ActionSheetCloseButtonVariantProps>(
    props: T,
  ) => [ActionSheetCloseButtonVariantProps, Omit<T, keyof ActionSheetCloseButtonVariantProps>];
}