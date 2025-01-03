import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";
import { splitVariantProps } from "./splitVariantProps.mjs";

const skeletonSlotNames = [
  [
    "root",
    "skeleton__root"
  ]
];

const defaultVariant = {
  "shape": "rounded"
};

const compoundVariants = [];

export const skeletonVariantMap = {
  "shape": [
    "rounded",
    "circular",
    "rectangular"
  ]
};

export const skeletonVariantKeys = Object.keys(skeletonVariantMap);

export function skeleton(props) {
  return Object.fromEntries(
    skeletonSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, mergeVariants(defaultVariant, props), compoundVariants),
      ];
    }),
  );
}

Object.assign(skeleton, { splitVariantProps: (props) => splitVariantProps(props, skeletonVariantMap) });