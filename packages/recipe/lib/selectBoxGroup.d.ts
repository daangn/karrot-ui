interface SelectBoxGroupVariant {
  
}

type SelectBoxGroupVariantMap = {
  [key in keyof SelectBoxGroupVariant]: Array<SelectBoxGroupVariant[key]>;
};

export type SelectBoxGroupVariantProps = Partial<SelectBoxGroupVariant>;

export type SelectBoxGroupSlotName = "root";

export const selectBoxGroupVariantMap: SelectBoxGroupVariantMap;

export function selectBoxGroup(
  props?: SelectBoxGroupVariantProps,
): Record<SelectBoxGroupSlotName, string>;