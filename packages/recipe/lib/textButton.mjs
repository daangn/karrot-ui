import { createClassName } from "./className.mjs";

const textButtonSlotNames = [
  [
    "root",
    "textButton__root"
  ],
  [
    "prefixIcon",
    "textButton__prefixIcon"
  ],
  [
    "suffixIcon",
    "textButton__suffixIcon"
  ],
  [
    "label",
    "textButton__label"
  ]
];

const defaultVariant = {
  "variant": "brand",
  "size": "medium"
};

const compoundVariants = [];

export const textButtonVariantMap = {
  "variant": [
    "brand",
    "neutral",
    "neutralSubtle",
    "danger"
  ],
  "size": [
    "large",
    "medium",
    "small"
  ]
};

export const textButtonVariantKeys = Object.keys(textButtonVariantMap);

export function textButton(props) {
  return Object.fromEntries(
    textButtonSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, { ...defaultVariant, ...props }, compoundVariants),
      ];
    }),
  );
}