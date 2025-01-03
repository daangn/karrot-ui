import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";
import { splitVariantProps } from "./splitVariantProps.mjs";

const bottomSheetSlotNames = [
  [
    "backdrop",
    "bottomSheet__backdrop"
  ],
  [
    "container",
    "bottomSheet__container"
  ],
  [
    "content",
    "bottomSheet__content"
  ],
  [
    "header",
    "bottomSheet__header"
  ],
  [
    "footer",
    "bottomSheet__footer"
  ],
  [
    "title",
    "bottomSheet__title"
  ],
  [
    "description",
    "bottomSheet__description"
  ],
  [
    "closeButton",
    "bottomSheet__closeButton"
  ],
  [
    "closeIcon",
    "bottomSheet__closeIcon"
  ]
];

const defaultVariant = {};

const compoundVariants = [];

export const bottomSheetVariantMap = {};

export const bottomSheetVariantKeys = Object.keys(bottomSheetVariantMap);

export function bottomSheet(props) {
  return Object.fromEntries(
    bottomSheetSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, mergeVariants(defaultVariant, props), compoundVariants),
      ];
    }),
  );
}

Object.assign(bottomSheet, { splitVariantProps: (props) => splitVariantProps(props, bottomSheetVariantMap) });