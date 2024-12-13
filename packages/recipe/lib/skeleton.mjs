import { createClassName } from "./className.mjs";

const skeletonSlotNames = [
  [
    "root",
    "skeleton__root"
  ]
];

const defaultVariant = {};

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
        createClassName(className, { ...defaultVariant, ...props }, compoundVariants),
      ];
    }),
  );
}