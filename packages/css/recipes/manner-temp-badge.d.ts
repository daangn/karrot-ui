declare interface MannerTempBadgeVariant {
  /**
  * @default l1
  */
  level: "l1" | "l2" | "l3" | "l4" | "l5" | "l6";
}

declare type MannerTempBadgeVariantMap = {
  [key in keyof MannerTempBadgeVariant]: Array<MannerTempBadgeVariant[key]>;
};

export declare type MannerTempBadgeVariantProps = Partial<MannerTempBadgeVariant>;

export declare type MannerTempBadgeSlotName = "root" | "label";

export declare const mannerTempBadgeVariantMap: MannerTempBadgeVariantMap;

export declare const mannerTempBadge: ((
  props?: MannerTempBadgeVariantProps,
) => Record<MannerTempBadgeSlotName, string>) & {
  splitVariantProps: <T extends MannerTempBadgeVariantProps>(
    props: T,
  ) => [MannerTempBadgeVariantProps, Omit<T, keyof MannerTempBadgeVariantProps>];
}