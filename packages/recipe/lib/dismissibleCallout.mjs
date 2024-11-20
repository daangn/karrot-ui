import { createClassName } from "./className.mjs";

const dismissibleCalloutSlotNames = [
  [
    "root",
    "dismissibleCallout__root"
  ],
  [
    "content",
    "dismissibleCallout__content"
  ],
  [
    "title",
    "dismissibleCallout__title"
  ],
  [
    "spacer",
    "dismissibleCallout__spacer"
  ],
  [
    "label",
    "dismissibleCallout__label"
  ],
  [
    "linkLabel",
    "dismissibleCallout__linkLabel"
  ],
  [
    "dismissButton",
    "dismissibleCallout__dismissButton"
  ],
  [
    "xIcon",
    "dismissibleCallout__xIcon"
  ]
];

const defaultVariant = {
  "variant": "neutral"
};

const compoundVariants = [];

export const dismissibleCalloutVariantMap = {
  "variant": [
    "neutral",
    "informative",
    "warning",
    "danger",
    "magic"
  ]
};

export const dismissibleCalloutVariantKeys = Object.keys(dismissibleCalloutVariantMap);

export function dismissibleCallout(props) {
  return Object.fromEntries(
    dismissibleCalloutSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, { ...defaultVariant, ...props }, compoundVariants),
      ];
    }),
  );
}