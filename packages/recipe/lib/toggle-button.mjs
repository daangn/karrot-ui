import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";
import { splitVariantProps } from "./splitVariantProps.mjs";

const toggleButtonSlotNames = [
  [
    "root",
    "seed-toggle-button__root"
  ],
  [
    "label",
    "seed-toggle-button__label"
  ],
  [
    "prefixIcon",
    "seed-toggle-button__prefixIcon"
  ],
  [
    "suffixIcon",
    "seed-toggle-button__suffixIcon"
  ],
  [
    "progressIndicator",
    "seed-toggle-button__progressIndicator"
  ]
];

const defaultVariant = {
  "variant": "brandSolid",
  "size": "small"
};

const compoundVariants = [];

export const toggleButtonVariantMap = {
  "variant": [
    "brandSolid",
    "neutralWeak"
  ],
  "size": [
    "xsmall",
    "small"
  ]
};

export const toggleButtonVariantKeys = Object.keys(toggleButtonVariantMap);

export function toggleButton(props) {
  return Object.fromEntries(
    toggleButtonSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, mergeVariants(defaultVariant, props), compoundVariants),
      ];
    }),
  );
}

Object.assign(toggleButton, { splitVariantProps: (props) => splitVariantProps(props, toggleButtonVariantMap) });