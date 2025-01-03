declare interface ProgressCircleVariant {
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

declare type ProgressCircleVariantMap = {
  [key in keyof ProgressCircleVariant]: Array<ProgressCircleVariant[key]>;
};

export declare type ProgressCircleVariantProps = Partial<ProgressCircleVariant>;

export declare type ProgressCircleSlotName = "root" | "track" | "range";

export declare const progressCircleVariantMap: ProgressCircleVariantMap;

export declare const progressCircle: ((
  props?: ProgressCircleVariantProps,
) => Record<ProgressCircleSlotName, string>) & {
  splitVariantProps: <T extends ProgressCircleVariantProps>(
    props: T,
  ) => [ProgressCircleVariantProps, Omit<T, keyof ProgressCircleVariantProps>];
}