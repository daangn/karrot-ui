interface SkeletonVariant {
  /**
  * @default rounded
  */
  shape: "rounded" | "circular" | "rectangular";
}

type SkeletonVariantMap = {
  [key in keyof SkeletonVariant]: Array<SkeletonVariant[key]>;
};

export type SkeletonVariantProps = Partial<SkeletonVariant>;

export type SkeletonSlotName = "root";

export const skeletonVariantMap: SkeletonVariantMap;

export function skeleton(
  props?: SkeletonVariantProps,
): Record<SkeletonSlotName, string>;