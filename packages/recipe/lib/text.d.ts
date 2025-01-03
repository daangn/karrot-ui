declare interface TextVariant {
  /**
  * @default bodyMediumDefault
  */
  variant: "labelSmallDefault" | "labelSmallStrong" | "labelSmallStronger" | "labelMediumDefault" | "labelMediumStrong" | "labelMediumStronger" | "labelLargeDefault" | "labelLargeStrong" | "labelLargeStronger" | "bodySmallDefault" | "bodySmallReadingDefault" | "bodySmallStrong" | "bodySmallStronger" | "bodyMediumDefault" | "bodyMediumReadingDefault" | "bodyMediumStrong" | "bodyMediumStronger" | "titleSmallDefault" | "titleMediumDefault" | "titleLargeDefault" | "headingSmallDefault" | "headingMediumDefault" | "headingLargeDefault";
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