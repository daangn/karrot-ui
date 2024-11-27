import { createClassName } from "./className.mjs";

const calloutSlotNames = [
  [
    "root",
    "callout__root"
  ],
  [
    "content",
    "callout__content"
  ],
  [
    "icon",
    "callout__icon"
  ],
  [
    "title",
    "callout__title"
  ],
  [
    "spacer",
    "callout__spacer"
  ],
  [
    "label",
    "callout__label"
  ],
  [
    "linkLabel",
    "callout__linkLabel"
  ],
  [
    "actionableIcon",
    "callout__actionableIcon"
  ],
  [
    "dismissButton",
    "callout__dismissButton"
  ],
  [
    "dismissIcon",
    "callout__dismissIcon"
  ]
];

const defaultVariant = {
  "variant": "neutral"
};

const compoundVariants = [];

export const calloutVariantMap = {
  "variant": [
    "neutral",
    "informative",
    "warning",
    "danger",
    "magic"
  ]
};

export const calloutVariantKeys = Object.keys(calloutVariantMap);

export function callout(props) {
  return Object.fromEntries(
    calloutSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, { ...defaultVariant, ...props }, compoundVariants),
      ];
    }),
  );
}