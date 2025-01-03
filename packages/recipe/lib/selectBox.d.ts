interface SelectBoxVariant {
  
}

type SelectBoxVariantMap = {
  [key in keyof SelectBoxVariant]: Array<SelectBoxVariant[key]>;
};

export type SelectBoxVariantProps = Partial<SelectBoxVariant>;

export type SelectBoxSlotName = "root" | "content" | "label" | "description" | "checkboxControl" | "checkboxIcon" | "radioControl" | "radioIcon";

export const selectBoxVariantMap: SelectBoxVariantMap;

export function selectBox(
  props?: SelectBoxVariantProps,
): Record<SelectBoxSlotName, string>;