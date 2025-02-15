import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";
import { splitVariantProps } from "./splitVariantProps.mjs";

const calloutSlotNames = [
  [
    "root",
    "seed-callout__root"
  ],
  [
    "content",
    "seed-callout__content"
  ],
  [
    "title",
    "seed-callout__title"
  ],
  [
    "description",
    "seed-callout__description"
  ],
  [
    "link",
    "seed-callout__link"
  ],
  [
    "closeButton",
    "seed-callout__closeButton"
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