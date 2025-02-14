import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";
import { splitVariantProps } from "./splitVariantProps.mjs";

const helpBubbleSlotNames = [
  [
    "positioner",
    "seed-help-bubble__positioner"
  ],
  [
    "backdrop",
    "seed-help-bubble__backdrop"
  ],
  [
    "content",
    "seed-help-bubble__content"
  ],
  [
    "arrow",
    "seed-help-bubble__arrow"
  ],
  [
    "title",
    "seed-help-bubble__title"
  ],
  [
    "description",
    "seed-help-bubble__description"
  ],
  [
    "closeButton",
    "seed-help-bubble__closeButton"
  ],
  [
    "closeIcon",
    "seed-help-bubble__closeIcon"
  ]
];

const defaultVariant = {};

const compoundVariants = [];

export const helpBubbleVariantMap = {};

export const helpBubbleVariantKeys = Object.keys(helpBubbleVariantMap);

export function helpBubble(props) {
  return Object.fromEntries(
    helpBubbleSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, mergeVariants(defaultVariant, props), compoundVariants),
      ];
    }),
  );
}

Object.assign(helpBubble, { splitVariantProps: (props) => splitVariantProps(props, helpBubbleVariantMap) });