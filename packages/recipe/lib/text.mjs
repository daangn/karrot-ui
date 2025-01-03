import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";

const textSlotNames = [
  [
    "root",
    "text__root"
  ]
];

const defaultVariant = {
  "variant": "bodyMediumDefault",
  "maxLines": "none"
};

const compoundVariants = [];

export const textVariantMap = {
  "variant": [
    "labelSmallDefault",
    "labelSmallStrong",
    "labelSmallStronger",
    "labelMediumDefault",
    "labelMediumStrong",
    "labelMediumStronger",
    "labelLargeDefault",
    "labelLargeStrong",
    "labelLargeStronger",
    "bodySmallDefault",
    "bodySmallReadingDefault",
    "bodySmallStrong",
    "bodySmallStronger",
    "bodyMediumDefault",
    "bodyMediumReadingDefault",
    "bodyMediumStrong",
    "bodyMediumStronger",
    "titleSmallDefault",
    "titleMediumDefault",
    "titleLargeDefault",
    "headingSmallDefault",
    "headingMediumDefault",
    "headingLargeDefault"
  ],
  "maxLines": [
    "none",
    "single",
    "multi"
  ]
};

export const textVariantKeys = Object.keys(textVariantMap);

export function text(props) {
  return Object.fromEntries(
    textSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, mergeVariants(defaultVariant, props), compoundVariants),
      ];
    }),
  );
}