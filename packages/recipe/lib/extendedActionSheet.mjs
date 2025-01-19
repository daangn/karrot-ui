import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";
import { splitVariantProps } from "./splitVariantProps.mjs";

const extendedActionSheetSlotNames = [
  [
    "backdrop",
    "extendedActionSheet__backdrop"
  ],
  [
    "positioner",
    "extendedActionSheet__positioner"
  ],
  [
    "content",
    "extendedActionSheet__content"
  ],
  [
    "header",
    "extendedActionSheet__header"
  ],
  [
    "title",
    "extendedActionSheet__title"
  ],
  [
    "list",
    "extendedActionSheet__list"
  ],
  [
    "group",
    "extendedActionSheet__group"
  ],
  [
    "footer",
    "extendedActionSheet__footer"
  ]
];

const defaultVariant = {};

const compoundVariants = [];

export const extendedActionSheetVariantMap = {};

export const extendedActionSheetVariantKeys = Object.keys(extendedActionSheetVariantMap);

export function extendedActionSheet(props) {
  return Object.fromEntries(
    extendedActionSheetSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, mergeVariants(defaultVariant, props), compoundVariants),
      ];
    }),
  );
}

Object.assign(extendedActionSheet, { splitVariantProps: (props) => splitVariantProps(props, extendedActionSheetVariantMap) });