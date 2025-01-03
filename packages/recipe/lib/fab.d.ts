declare interface FabVariant {
  /**
  * @default medium
  */
  size: "small" | "medium";
}

declare type FabVariantMap = {
  [key in keyof FabVariant]: Array<FabVariant[key]>;
};

export declare type FabVariantProps = Partial<FabVariant>;

export declare type FabSlotName = "root" | "icon";

export declare const fabVariantMap: FabVariantMap;

export declare const fab: ((
  props?: FabVariantProps,
) => Record<FabSlotName, string>) & {
  splitVariantProps: <T extends FabVariantProps>(
    props: T,
  ) => [FabVariantProps, Omit<T, keyof FabVariantProps>];
}