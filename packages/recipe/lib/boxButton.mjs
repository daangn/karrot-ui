import { createClassName } from "./className.mjs";

const boxButtonSlotNames = [
  [
    "root",
    "boxButton__root"
  ],
  [
    "label",
    "boxButton__label"
  ],
  [
    "prefix",
    "boxButton__prefix"
  ]
];

const defaultVariant = {};

export const boxButtonVariantMap = {
  "variant": [
    "brand",
    "neutral"
  ],
  "size": [
    "medium",
    "xsmall"
  ]
};

export const boxButtonVariantKeys = Object.keys(boxButtonVariantMap);

export function boxButton(props) {
  return Object.fromEntries(
    boxButtonSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, { ...defaultVariant, ...props }),
      ];
    }),
  );
}