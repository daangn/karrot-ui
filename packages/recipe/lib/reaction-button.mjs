import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";
import { splitVariantProps } from "./splitVariantProps.mjs";

const reactionButtonSlotNames = [
  [
    "root",
    "seed-reaction-button__root"
  ],
  [
    "label",
    "seed-reaction-button__label"
  ],
  [
    "count",
    "seed-reaction-button__count"
  ],
  [
    "prefixIcon",
    "seed-reaction-button__prefixIcon"
  ],
  [
    "progressIndicator",
    "seed-reaction-button__progressIndicator"
  ]
];

const defaultVariant = {
  "size": "small"
};

const compoundVariants = [];

export const reactionButtonVariantMap = {
  "size": [
    "xsmall",
    "small"
  ]
};

export const reactionButtonVariantKeys = Object.keys(reactionButtonVariantMap);

export function reactionButton(props) {
  return Object.fromEntries(
    reactionButtonSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, mergeVariants(defaultVariant, props), compoundVariants),
      ];
    }),
  );
}

Object.assign(reactionButton, { splitVariantProps: (props) => splitVariantProps(props, reactionButtonVariantMap) });