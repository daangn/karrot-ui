import { createClassName } from "./className.mjs";

const radioSlotNames = [
  [
    "root",
    "radio__root"
  ],
  [
    "icon",
    "radio__icon"
  ]
];

const defaultVariant = {};

const compoundVariants = [];

export const radioVariantMap = {
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