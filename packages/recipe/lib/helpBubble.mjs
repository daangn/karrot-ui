import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";

const helpBubbleSlotNames = [
  [
    "positioner",
    "helpBubble__positioner"
  ],
  [
    "backdrop",
    "helpBubble__backdrop"
  ],
  [
    "content",
    "helpBubble__content"
  ],
  [
    "arrow",
    "helpBubble__arrow"
  ],
  [
    "title",
    "helpBubble__title"
  ],
  [
    "description",
    "helpBubble__description"
  ],
  [
    "closeButton",
    "helpBubble__closeButton"
  ],
  [
    "closeIcon",
    "helpBubble__closeIcon"
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