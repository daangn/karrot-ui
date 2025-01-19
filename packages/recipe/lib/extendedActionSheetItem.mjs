import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";
import { splitVariantProps } from "./splitVariantProps.mjs";

const extendedActionSheetItemSlotNames = [
  [
    "root",
    "extendedActionSheetItem__root"
  ],
  [
    "prefixIcon",
    "extendedActionSheetItem__prefixIcon"
  ],
  [
    "label",
    "extendedActionSheetItem__label"
  ]
];

const defaultVariant = {
  "tone": "neutral"
};

const compoundVariants = [];

export const extendedActionSheetItemVariantMap = {
  "tone": [
    "neutral",
    "danger"
  ]
};

export const extendedActionSheetItemVariantKeys = Object.keys(extendedActionSheetItemVariantMap);

export function extendedActionSheetItem(props) {
  return Object.fromEntries(
    extendedActionSheetItemSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, mergeVariants(defaultVariant, props), compoundVariants),
      ];
    }),
  );
}

Object.assign(extendedActionSheetItem, { splitVariantProps: (props) => splitVariantProps(props, extendedActionSheetItemVariantMap) });