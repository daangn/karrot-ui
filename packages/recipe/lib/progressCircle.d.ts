interface ProgressCircleVariant {
  /**
  * @default neutral
  */
  variant: "neutral" | "brand" | "white";
/**
  * @default medium
  */
  size: "small" | "medium";
/**
  * @default false
  */
  indeterminate: boolean;
}

type ProgressCircleVariantMap = {
  [key in keyof ProgressCircleVariant]: Array<ProgressCircleVariant[key]>;
};

export type ProgressCircleVariantProps = Partial<ProgressCircleVariant>;

export type ProgressCircleSlotName = "root" | "track" | "indicator" | "indicator-path";

export const progressCircleVariantMap: ProgressCircleVariantMap;

export function progressCircle(
  props?: ProgressCircleVariantProps,
): Record<ProgressCircleSlotName, string>;