import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";
import { splitVariantProps } from "./splitVariantProps.mjs";

const visuallyHiddenSlotNames = [
  [
    "root",
    "visuallyHidden__root"
  ]
];

const defaultVariant = {};

const compoundVariants = [];

export const visuallyHiddenVariantMap = {};

export const visuallyHiddenVariantKeys = Object.keys(visuallyHiddenVariantMap);

export function visuallyHidden(props) {
  return Object.fromEntries(
    visuallyHiddenSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, mergeVariants(defaultVariant, props), compoundVariants),
      ];
    }),
  );
}

Object.assign(visuallyHidden, { splitVariantProps: (props) => splitVariantProps(props, visuallyHiddenVariantMap) });