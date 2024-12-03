interface SelectBoxVariant {
  
}

type SelectBoxVariantMap = {
  [key in keyof SelectBoxVariant]: Array<SelectBoxVariant[key]>;
};

export type SelectBoxVariantProps = Partial<SelectBoxVariant>;

export type SelectBoxSlotName = "root" | "box" | "content" | "control" | "label" | "description";

export const selectBoxVariantMap: SelectBoxVariantMap;

export function selectBox(
  props?: SelectBoxVariantProps,
): Record<SelectBoxSlotName, string>;