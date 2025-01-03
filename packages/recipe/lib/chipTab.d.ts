declare interface ChipTabVariant {
  /**
  * @default neutralSolid
  */
  variant: "neutralSolid" | "brandSolid";
}

declare type ChipTabVariantMap = {
  [key in keyof ChipTabVariant]: Array<ChipTabVariant[key]>;
};

export declare type ChipTabVariantProps = Partial<ChipTabVariant>;

export declare type ChipTabSlotName = "root" | "label";

export declare const chipTabVariantMap: ChipTabVariantMap;

export declare const chipTab: ((
  props?: ChipTabVariantProps,
) => Record<ChipTabSlotName, string>) & {
  splitVariantProps: <T extends ChipTabVariantProps>(
    props: T,
  ) => [ChipTabVariantProps, Omit<T, keyof ChipTabVariantProps>];
}