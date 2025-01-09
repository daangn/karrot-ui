import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";
import { splitVariantProps } from "./splitVariantProps.mjs";

const snackbarSlotNames = [
  [
    "region",
    "snackbar__region"
  ],
  [
    "root",
    "snackbar__root"
  ],
  [
    "message",
    "snackbar__message"
  ],
  [
    "prefixIcon",
    "snackbar__prefixIcon"
  ],
  [
    "actionButton",
    "snackbar__actionButton"
  ]
];

const defaultVariant = {
  "variant": "default"
};

const compoundVariants = [];

export const snackbarVariantMap = {
  "variant": [
    "default",
    "positive",
    "danger"
  ]
};

export const snackbarVariantKeys = Object.keys(snackbarVariantMap);

export function snackbar(props) {
  return Object.fromEntries(
    snackbarSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, mergeVariants(defaultVariant, props), compoundVariants),
      ];
    }),
  );
}

Object.assign(snackbar, { splitVariantProps: (props) => splitVariantProps(props, snackbarVariantMap) });