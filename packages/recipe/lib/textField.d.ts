interface TextFieldVariant {
  /**
  * @default medium
  */
  size: "xlarge" | "large" | "medium";
}

type TextFieldVariantMap = {
  [key in keyof TextFieldVariant]: Array<TextFieldVariant[key]>;
};

export type TextFieldVariantProps = Partial<TextFieldVariant>;

export type TextFieldSlotName = "root" | "header" | "label" | "spacer" | "indicator" | "content" | "input" | "description" | "errorIcon";

export const textFieldVariantMap: TextFieldVariantMap;

export function textField(
  props?: TextFieldVariantProps,
): Record<TextFieldSlotName, string>;