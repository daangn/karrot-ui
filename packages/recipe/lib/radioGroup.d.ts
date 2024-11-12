interface RadioGroupVariant {
  /**
  * @default vertical
  */
  orientation: "horizontal" | "vertical";
}

type RadioGroupVariantMap = {
  [key in keyof RadioGroupVariant]: Array<RadioGroupVariant[key]>;
};

export type RadioGroupVariantProps = Partial<RadioGroupVariant>;

export type RadioGroupSlotName = "root" | "label" | "radios";

export const radioGroupVariantMap: RadioGroupVariantMap;

export function radioGroup(
  props?: RadioGroupVariantProps,
): Record<RadioGroupSlotName, string>;