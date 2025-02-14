import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";
import { splitVariantProps } from "./splitVariantProps.mjs";

const calloutSlotNames = [
  [
    "root",
    "seed-callout__root"
  ],
  [
    "icon",
    "seed-callout__icon"
  ],
  [
    "textContent",
    "seed-callout__textContent"
  ],
  [
    "title",
    "seed-callout__title"
  ],
  [
    "spacer",
    "seed-callout__spacer"
  ],
  [
    "description",
    "seed-callout__description"
  ],
  [
    "linkLabel",
    "seed-callout__linkLabel"
  ],
  [
    "actionableIcon",
    "seed-callout__actionableIcon"
  ],
  [
    "dismissButton",
    "seed-callout__dismissButton"
  ],
  [
    "dismissIcon",
    "seed-callout__dismissIcon"
  ]
];

const defaultVariant = {
  "tone": "neutral"
};

const compoundVariants = [];

export const calloutVariantMap = {
  "tone": [
    "neutral",
    "informative",
    "warning",
    "critical",
    "magic"
  ]
};

export const calloutVariantKeys = Object.keys(calloutVariantMap);

export function callout(props) {
  return Object.fromEntries(
    calloutSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, mergeVariants(defaultVariant, props), compoundVariants),
      ];
    }),
  );
}

Object.assign(callout, { splitVariantProps: (props) => splitVariantProps(props, calloutVariantMap) });