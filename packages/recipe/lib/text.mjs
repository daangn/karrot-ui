import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";
import { splitVariantProps } from "./splitVariantProps.mjs";

const textSlotNames = [
  [
    "root",
    "text__root"
  ]
];

const defaultVariant = {
  "textStyle": "bodyMediumDefault",
  "maxLines": "none"
};

const compoundVariants = [];

export const textVariantMap = {
  "textStyle": [
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

Object.assign(text, { splitVariantProps: (props) => splitVariantProps(props, textVariantMap) });