import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";
import { splitVariantProps } from "./splitVariantProps.mjs";

const radioSlotNames = [
  [
    "root",
    "radio__root"
  ],
  [
    "icon",
    "radio__icon"
  ]
];

const defaultVariant = {
  "size": "medium"
};

const compoundVariants = [];

export const radioVariantMap = {
  "size": [
    "large",
    "medium"
  ]
};

export const radioVariantKeys = Object.keys(radioVariantMap);

export function radio(props) {
  return Object.fromEntries(
    radioSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, mergeVariants(defaultVariant, props), compoundVariants),
      ];
    }),
  );
}

Object.assign(radio, { splitVariantProps: (props) => splitVariantProps(props, radioVariantMap) });