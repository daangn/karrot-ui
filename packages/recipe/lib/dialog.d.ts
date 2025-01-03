declare interface DialogVariant {
  /**
  * @default horizontal
  */
  footerLayout: "horizontal" | "vertical";
}

declare type DialogVariantMap = {
  [key in keyof DialogVariant]: Array<DialogVariant[key]>;
};

export declare type DialogVariantProps = Partial<DialogVariant>;

export declare type DialogSlotName = "backdrop" | "container" | "content" | "header" | "footer" | "action" | "title" | "description";

export declare const dialogVariantMap: DialogVariantMap;

export declare const dialog: ((
  props?: DialogVariantProps,
) => Record<DialogSlotName, string>) & {
  splitVariantProps: <T extends DialogVariantProps>(
    props: T,
  ) => [DialogVariantProps, Omit<T, keyof DialogVariantProps>];
}