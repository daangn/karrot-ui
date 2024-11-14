import { createClassName } from "./className.mjs";

const radioControlSlotNames = [
  [
    "root",
    "radioControl__root"
  ],
  [
    "icon",
    "radioControl__icon"
  ]
];

const defaultVariant = {
  "size": "medium"
};

const compoundVariants = [];

export const radioControlVariantMap = {
  "size": [
    "large",
    "medium",
    "small"
  ]
};

export const radioControlVariantKeys = Object.keys(radioControlVariantMap);

export function radioControl(props) {
  return Object.fromEntries(
    radioControlSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, { ...defaultVariant, ...props }, compoundVariants),
      ];
    }),
  );
}