interface RadioVariant {
  size: "large" | "medium" | "small"
}

type RadioVariantMap = {
  [key in keyof RadioVariant]: Array<RadioVariant[key]>;
};

export type RadioVariantProps = Partial<RadioVariant>;

export type RadioSlotName = "root" | "icon";

export const radioVariantMap: RadioVariantMap;

export function radio(
  props?: RadioVariantProps,
): Record<RadioSlotName, string>;