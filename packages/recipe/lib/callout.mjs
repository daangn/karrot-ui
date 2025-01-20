import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";
import { splitVariantProps } from "./splitVariantProps.mjs";

const calloutSlotNames = [
  [
    "root",
    "callout__root"
  ],
  [
    "icon",
    "callout__icon"
  ],
  [
    "textContent",
    "callout__textContent"
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
    "description",
    "callout__description"
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
  "tone": "neutral"
};

const compoundVariants = [];

export const calloutVariantMap = {
  "tone": [
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
        createClassName(className, mergeVariants(defaultVariant, props), compoundVariants),
      ];
    }),
  );
}

Object.assign(callout, { splitVariantProps: (props) => splitVariantProps(props, calloutVariantMap) });