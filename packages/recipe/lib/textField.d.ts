declare interface TextFieldVariant {
  /**
  * @default medium
  */
  size: "xlarge" | "large" | "medium";
}

declare type TextFieldVariantMap = {
  [key in keyof TextFieldVariant]: Array<TextFieldVariant[key]>;
};

export declare type TextFieldVariantProps = Partial<TextFieldVariant>;

export declare type TextFieldSlotName = "root" | "header" | "label" | "indicator" | "input" | "inputText" | "prefixText" | "prefixIcon" | "suffixText" | "suffixIcon" | "footer" | "description" | "errorMessage" | "errorIcon" | "characterCount" | "currentCharacterCount" | "maxCharacterCount";

export declare const textFieldVariantMap: TextFieldVariantMap;

export declare const textField: ((
  props?: TextFieldVariantProps,
) => Record<TextFieldSlotName, string>) & {
  splitVariantProps: <T extends TextFieldVariantProps>(
    props: T,
  ) => [TextFieldVariantProps, Omit<T, keyof TextFieldVariantProps>];
}