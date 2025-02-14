declare interface ActionSheetItemVariant {
  /**
  * @default neutral
  */
  tone: "neutral" | "critical";
}

declare type ActionSheetItemVariantMap = {
  [key in keyof ActionSheetItemVariant]: Array<ActionSheetItemVariant[key]>;
};

export declare type ActionSheetItemVariantProps = Partial<ActionSheetItemVariant>;

export declare type ActionSheetItemSlotName = "root";

export declare const actionSheetItemVariantMap: ActionSheetItemVariantMap;

export declare const actionSheetItem: ((
  props?: ActionSheetItemVariantProps,
) => Record<ActionSheetItemSlotName, string>) & {
  splitVariantProps: <T extends ActionSheetItemVariantProps>(
    props: T,
  ) => [ActionSheetItemVariantProps, Omit<T, keyof ActionSheetItemVariantProps>];
}