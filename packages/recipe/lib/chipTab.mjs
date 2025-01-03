import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";

const chipTabSlotNames = [
  [
    "root",
    "chipTab__root"
  ],
  [
    "label",
    "chipTab__label"
  ]
];

const defaultVariant = {
  "variant": "neutralSolid"
};

const compoundVariants = [];

export const chipTabVariantMap = {
  "variant": [
    "neutralSolid",
    "brandSolid"
  ]
};

export const chipTabVariantKeys = Object.keys(chipTabVariantMap);

export function chipTab(props) {
  return Object.fromEntries(
    chipTabSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, mergeVariants(defaultVariant, props), compoundVariants),
      ];
    }),
  );
}