interface CheckboxVariant {
  /**
  * @default false
  */
  bold: boolean;
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

type CheckboxVariantMap = {
  [key in keyof CheckboxVariant]: Array<CheckboxVariant[key]>;
};

export type CheckboxVariantProps = Partial<CheckboxVariant>;

export type CheckboxSlotName = "root" | "control" | "icon" | "label";

export const checkboxVariantMap: CheckboxVariantMap;

export function checkbox(
  props?: CheckboxVariantProps,
): Record<CheckboxSlotName, string>;