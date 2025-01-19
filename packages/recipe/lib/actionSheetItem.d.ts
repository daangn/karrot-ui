declare interface ActionSheetItemVariant {
  /**
  * @default neutral
  */
  tone: "neutral" | "danger";
}

declare type ActionSheetItemVariantMap = {
  [key in keyof ActionSheetItemVariant]: Array<ActionSheetItemVariant[key]>;
};

export declare type ActionSheetItemVariantProps = Partial<ActionSheetItemVariant>;

export declare type ActionSheetItemSlotName = "root" | "label";

export declare const actionSheetItemVariantMap: ActionSheetItemVariantMap;

export declare const actionSheetItem: ((
  props?: ActionSheetItemVariantProps,
) => Record<ActionSheetItemSlotName, string>) & {
  splitVariantProps: <T extends ActionSheetItemVariantProps>(
    props: T,
  ) => [ActionSheetItemVariantProps, Omit<T, keyof ActionSheetItemVariantProps>];
}