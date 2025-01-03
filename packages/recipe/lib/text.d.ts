interface TextVariant {
  variant: "labelSmallDefault" | "labelSmallStrong" | "labelSmallStronger" | "labelMediumDefault" | "labelMediumStrong" | "labelMediumStronger" | "labelLargeDefault" | "labelLargeStrong" | "labelLargeStronger" | "bodySmallDefault" | "bodySmallReadingDefault" | "bodySmallStrong" | "bodySmallStronger" | "bodyMediumDefault" | "bodyMediumReadingDefault" | "bodyMediumStrong" | "bodyMediumStronger" | "titleSmallDefault" | "titleMediumDefault" | "titleLargeDefault" | "headingSmallDefault" | "headingMediumDefault" | "headingLargeDefault";
maxLines: "none" | "single" | "multi";
}

type TextVariantMap = {
  [key in keyof TextVariant]: Array<TextVariant[key]>;
};

export type TextVariantProps = Partial<TextVariant>;

export type TextSlotName = "root";

export const textVariantMap: TextVariantMap;

export function text(
  props?: TextVariantProps,
): Record<TextSlotName, string>;