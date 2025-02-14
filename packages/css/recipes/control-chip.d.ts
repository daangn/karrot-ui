declare interface ControlChipVariant {
  /**
  * @default medium
  */
  size: "medium" | "small";
/**
  * @default withText
  */
  layout: "withText" | "iconOnly";
}

declare type ControlChipVariantMap = {
  [key in keyof ControlChipVariant]: Array<ControlChipVariant[key]>;
};

export declare type ControlChipVariantProps = Partial<ControlChipVariant>;

export declare type ControlChipSlotName = "root";

export declare const controlChipVariantMap: ControlChipVariantMap;

export declare const controlChip: ((
  props?: ControlChipVariantProps,
) => Record<ControlChipSlotName, string>) & {
  splitVariantProps: <T extends ControlChipVariantProps>(
    props: T,
  ) => [ControlChipVariantProps, Omit<T, keyof ControlChipVariantProps>];
}