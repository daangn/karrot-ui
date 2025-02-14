declare interface SkeletonVariant {
  /**
  * @default 8
  */
  radius: "0" | "8" | "16" | "full";
}

declare type SkeletonVariantMap = {
  [key in keyof SkeletonVariant]: Array<SkeletonVariant[key]>;
};

export declare type SkeletonVariantProps = Partial<SkeletonVariant>;

export declare type SkeletonSlotName = "root";

export declare const skeletonVariantMap: SkeletonVariantMap;

export declare const skeleton: ((
  props?: SkeletonVariantProps,
) => Record<SkeletonSlotName, string>) & {
  splitVariantProps: <T extends SkeletonVariantProps>(
    props: T,
  ) => [SkeletonVariantProps, Omit<T, keyof SkeletonVariantProps>];
}