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
    "dismissButton",
    "callout__dismissButton"
  ],
  [
    "xIcon",
    "callout__xIcon"
  ],
  [
    "chevronRightIcon",
    "callout__chevronRightIcon"
  ]
];

const defaultVariant = {
  "variant": "neutral"
};

const compoundVariants = [
  {
    "type": "actionable",
    "variant": "neutral"
  },
  {
    "type": "actionable",
    "variant": "informative"
  },
  {
    "type": "actionable",
    "variant": "warning"
  },
  {
    "type": "actionable",
    "variant": "danger"
  },
  {
    "type": "actionable",
    "variant": "magic"
  }
];

export const calloutVariantMap = {
  "type": [
    "default",
    "dismissible",
    "actionable"
  ],
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