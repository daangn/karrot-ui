interface ProgressCircleVariant {
  /**
  * @default neutral
  */
  tone: "neutral" | "brand" | "staticWhite";
/**
  * @default 40
  */
  size: "24" | "40";
/**
  * @default false
  */
  indeterminate: boolean;
}

type ProgressCircleVariantMap = {
  [key in keyof ProgressCircleVariant]: Array<ProgressCircleVariant[key]>;
};

export type ProgressCircleVariantProps = Partial<ProgressCircleVariant>;

export type ProgressCircleSlotName = "root" | "track" | "range";

export const progressCircleVariantMap: ProgressCircleVariantMap;

export function progressCircle(
  props?: ProgressCircleVariantProps,
): Record<ProgressCircleSlotName, string>;