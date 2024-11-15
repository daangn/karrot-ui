import { createClassName } from "./className.mjs";

const radioGroupSlotNames = [
  [
    "root",
    "radioGroup__root"
  ],
  [
    "label",
    "radioGroup__label"
  ],
  [
    "options",
    "radioGroup__options"
  ]
];

const defaultVariant = {
  "orientation": "vertical"
};

const compoundVariants = [];

export const radioGroupVariantMap = {
  "orientation": [
    "horizontal",
    "vertical"
  ]
};

export const radioGroupVariantKeys = Object.keys(radioGroupVariantMap);

export function radioGroup(props) {
  return Object.fromEntries(
    radioGroupSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, { ...defaultVariant, ...props }, compoundVariants),
      ];
    }),
  );
}