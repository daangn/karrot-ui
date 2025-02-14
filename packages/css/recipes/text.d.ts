declare interface TextVariant {
  /**
  * @default t5Regular
  */
  textStyle: "screenTitle" | "articleBody" | "t1Regular" | "t1Medium" | "t1Bold" | "t2Regular" | "t2Medium" | "t2Bold" | "t3Regular" | "t3Medium" | "t3Bold" | "t4Regular" | "t4Medium" | "t4Bold" | "t5Regular" | "t5Medium" | "t5Bold" | "t6Bold" | "t7Bold" | "t8Bold" | "t9Bold" | "t10Bold";
/**
  * @default none
  */
  maxLines: "none" | "single" | "multi";
}

declare type TextVariantMap = {
  [key in keyof TextVariant]: Array<TextVariant[key]>;
};

export declare type TextVariantProps = Partial<TextVariant>;

export declare type TextSlotName = "root";

export declare const textVariantMap: TextVariantMap;

export declare const text: ((
  props?: TextVariantProps,
) => Record<TextSlotName, string>) & {
  splitVariantProps: <T extends TextVariantProps>(
    props: T,
  ) => [TextVariantProps, Omit<T, keyof TextVariantProps>];
}