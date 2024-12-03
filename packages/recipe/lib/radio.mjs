import { createClassName } from "./className.mjs";

const radioSlotNames = [
  [
    "root",
    "radio__root"
  ],
  [
    "control",
    "radio__control"
  ],
  [
    "icon",
    "radio__icon"
  ],
  [
    "label",
    "radio__label"
  ]
];

const defaultVariant = {};

const compoundVariants = [];

export const radioVariantMap = {
  "fontWeight": [
    "bold"
  ],
  "size": [
    "large",
    "medium",
    "small"
  ]
};

export const radioVariantKeys = Object.keys(radioVariantMap);

export function radio(props) {
  return Object.fromEntries(
    radioSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, { ...defaultVariant, ...props }, compoundVariants),
      ];
    }),
  );
}