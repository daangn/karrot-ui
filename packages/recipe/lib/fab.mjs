import { createClassName } from "./className.mjs";

const fabSlotNames = [
  [
    "root",
    "fab__root"
  ],
  [
    "icon",
    "fab__icon"
  ]
];

const defaultVariant = {
  "size": "medium"
};

const compoundVariants = [];

export const fabVariantMap = {
  "size": [
    "small",
    "medium"
  ]
};

export const fabVariantKeys = Object.keys(fabVariantMap);

export function fab(props) {
  return Object.fromEntries(
    fabSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, { ...defaultVariant, ...props }, compoundVariants),
      ];
    }),
  );
}