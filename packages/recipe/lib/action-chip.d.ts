declare interface ActionChipVariant {
  /**
  * @default medium
  */
  size: "medium" | "small";
/**
  * @default withText
  */
  layout: "withText" | "iconOnly";
}

declare type ActionChipVariantMap = {
  [key in keyof ActionChipVariant]: Array<ActionChipVariant[key]>;
};

export declare type ActionChipVariantProps = Partial<ActionChipVariant>;

export declare type ActionChipSlotName = "root" | "label" | "icon" | "prefixIcon" | "suffixIcon" | "count";

export declare const actionChipVariantMap: ActionChipVariantMap;

export declare const actionChip: ((
  props?: ActionChipVariantProps,
) => Record<ActionChipSlotName, string>) & {
  splitVariantProps: <T extends ActionChipVariantProps>(
    props: T,
  ) => [ActionChipVariantProps, Omit<T, keyof ActionChipVariantProps>];
}