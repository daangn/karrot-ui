interface TextButtonVariant {
  /**
  * @default brand
  */
  variant: "brand" | "neutral" | "neutralSubtle" | "danger";
/**
  * @default medium
  */
  size: "large" | "medium" | "small";
}

type TextButtonVariantMap = {
  [key in keyof TextButtonVariant]: Array<TextButtonVariant[key]>;
};

export type TextButtonVariantProps = Partial<TextButtonVariant>;

export type TextButtonSlotName = "root" | "prefixIcon" | "suffixIcon" | "label";

export const textButtonVariantMap: TextButtonVariantMap;

export function textButton(
  props?: TextButtonVariantProps,
): Record<TextButtonSlotName, string>;