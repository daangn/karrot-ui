import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";
import { splitVariantProps } from "./splitVariantProps.mjs";

const avatarStackSlotNames = [
  [
    "root",
    "seed-avatar-stack__root"
  ],
  [
    "item",
    "seed-avatar-stack__item"
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

Object.assign(avatarStack, { splitVariantProps: (props) => splitVariantProps(props, avatarStackVariantMap) });