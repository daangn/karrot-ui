import { createClassName } from "./className.mjs";

const reactionButtonSlotNames = [
  [
    "root",
    "reactionButton__root"
  ],
  [
    "label",
    "reactionButton__label"
  ],
  [
    "count",
    "reactionButton__count"
  ],
  [
    "prefixIcon",
    "reactionButton__prefixIcon"
  ],
  [
    "progressCircle",
    "reactionButton__progressCircle"
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
        createClassName(className, { ...defaultVariant, ...props }, compoundVariants),
      ];
    }),
  );
}