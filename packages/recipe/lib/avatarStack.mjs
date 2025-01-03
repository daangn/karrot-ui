import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";

const avatarStackSlotNames = [
  [
    "root",
    "avatarStack__root"
  ],
  [
    "item",
    "avatarStack__item"
  ]
];

const defaultVariant = {
  "size": 48
};

const compoundVariants = [];

export const avatarStackVariantMap = {
  "size": [
    "20",
    "24",
    "36",
    "48",
    "64"
  ]
};

export const avatarStackVariantKeys = Object.keys(avatarStackVariantMap);

export function avatarStack(props) {
  return Object.fromEntries(
    avatarStackSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, mergeVariants(defaultVariant, props), compoundVariants),
      ];
    }),
  );
}