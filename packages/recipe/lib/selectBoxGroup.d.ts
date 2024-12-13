interface SelectBoxGroupVariant {
  
}

type SelectBoxGroupVariantMap = {
  [key in keyof SelectBoxGroupVariant]: Array<SelectBoxGroupVariant[key]>;
};

export type SelectBoxGroupVariantProps = Partial<SelectBoxGroupVariant>;

export type SelectBoxGroupSlotName = "root" | "box" | "content" | "label" | "description" | "checkboxControl" | "checkboxIcon" | "radioControl" | "radioIcon";

export const selectBoxGroupVariantMap: SelectBoxGroupVariantMap;

export function selectBoxGroup(
  props?: SelectBoxGroupVariantProps,
): Record<SelectBoxGroupSlotName, string>;