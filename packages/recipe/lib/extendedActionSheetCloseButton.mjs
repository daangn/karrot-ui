import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";
import { splitVariantProps } from "./splitVariantProps.mjs";

const extendedActionSheetCloseButtonSlotNames = [
  [
    "root",
    "extendedActionSheetCloseButton__root"
  ],
  [
    "label",
    "extendedActionSheetCloseButton__label"
  ]
];

const defaultVariant = {};

const compoundVariants = [];

export const extendedActionSheetCloseButtonVariantMap = {};

export const extendedActionSheetCloseButtonVariantKeys = Object.keys(extendedActionSheetCloseButtonVariantMap);

export function extendedActionSheetCloseButton(props) {
  return Object.fromEntries(
    extendedActionSheetCloseButtonSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, mergeVariants(defaultVariant, props), compoundVariants),
      ];
    }),
  );
}

Object.assign(extendedActionSheetCloseButton, { splitVariantProps: (props) => splitVariantProps(props, extendedActionSheetCloseButtonVariantMap) });