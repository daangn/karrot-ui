import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";
import { splitVariantProps } from "./splitVariantProps.mjs";

const textButtonSlotNames = [
  [
    "root",
    "seed-text-button__root"
  ],
  [
    "prefixIcon",
    "seed-text-button__prefixIcon"
  ],
  [
    "suffixIcon",
    "seed-text-button__suffixIcon"
  ],
  [
    "label",
    "seed-text-button__label"
  ]
];

const defaultVariant = {
  "tone": "brand",
  "size": "medium"
};

const compoundVariants = [];

export const textButtonVariantMap = {
  "tone": [
    "brand",
    "neutral",
    "neutralSubtle",
    "critical"
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
        createClassName(className, mergeVariants(defaultVariant, props), compoundVariants),
      ];
    }),
  );
}

Object.assign(textButton, { splitVariantProps: (props) => splitVariantProps(props, textButtonVariantMap) });