interface RadioControlVariant {
  /**
  * @default medium
  */
  size: "large" | "medium" | "small";
}

type RadioControlVariantMap = {
  [key in keyof RadioControlVariant]: Array<RadioControlVariant[key]>;
};

export type RadioControlVariantProps = Partial<RadioControlVariant>;

export type RadioControlSlotName = "root" | "icon";

export const radioControlVariantMap: RadioControlVariantMap;

export function radioControl(
  props?: RadioControlVariantProps,
): Record<RadioControlSlotName, string>;