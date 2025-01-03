import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";

const selectBoxGroupSlotNames = [
  [
    "root",
    "selectBoxGroup__root"
  ]
];

const defaultVariant = {};

const compoundVariants = [];

export const selectBoxGroupVariantMap = {};

export const selectBoxGroupVariantKeys = Object.keys(selectBoxGroupVariantMap);

export function selectBoxGroup(props) {
  return Object.fromEntries(
    selectBoxGroupSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, mergeVariants(defaultVariant, props), compoundVariants),
      ];
    }),
  );
}