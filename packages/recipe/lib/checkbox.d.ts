declare interface CheckboxVariant {
  /**
  * @default default
  */
  weight: "default" | "stronger";
/**
  * @default false
  */
  indeterminate: boolean;
/**
  * @default square
  */
  variant: "square" | "ghost";
/**
  * @default medium
  */
  size: "large" | "medium" | "small";
}

declare type CheckboxVariantMap = {
  [key in keyof CheckboxVariant]: Array<CheckboxVariant[key]>;
};

export declare type CheckboxVariantProps = Partial<CheckboxVariant>;

export declare type CheckboxSlotName = "root" | "control" | "icon" | "label";

export declare const checkboxVariantMap: CheckboxVariantMap;

export declare const checkbox: ((
  props?: CheckboxVariantProps,
) => Record<CheckboxSlotName, string>) & {
  splitVariantProps: <T extends CheckboxVariantProps>(
    props: T,
  ) => [CheckboxVariantProps, Omit<T, keyof CheckboxVariantProps>];
}