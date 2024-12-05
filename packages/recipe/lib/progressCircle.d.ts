interface ProgressCircleVariant {
  variant: "neutral" | "brand" | "white";
size: "small" | "medium";
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