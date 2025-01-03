declare interface TextButtonVariant {
  /**
  * @default brand
  */
  tone: "brand" | "neutral" | "neutralSubtle" | "danger";
/**
  * @default medium
  */
  size: "large" | "medium" | "small";
}

declare type TextButtonVariantMap = {
  [key in keyof TextButtonVariant]: Array<TextButtonVariant[key]>;
};

export declare type TextButtonVariantProps = Partial<TextButtonVariant>;

export declare type TextButtonSlotName = "root" | "prefixIcon" | "suffixIcon" | "label";

export declare const textButtonVariantMap: TextButtonVariantMap;

export declare const textButton: ((
  props?: TextButtonVariantProps,
) => Record<TextButtonSlotName, string>) & {
  splitVariantProps: <T extends TextButtonVariantProps>(
    props: T,
  ) => [TextButtonVariantProps, Omit<T, keyof TextButtonVariantProps>];
}