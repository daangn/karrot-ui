import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";
import { splitVariantProps } from "./splitVariantProps.mjs";

const toggleButtonSlotNames = [
  [
    "root",
    "toggleButton__root"
  ],
  [
    "label",
    "toggleButton__label"
  ],
  [
    "prefixIcon",
    "toggleButton__prefixIcon"
  ],
  [
    "suffixIcon",
    "toggleButton__suffixIcon"
  ],
  [
    "progressCircle",
    "toggleButton__progressCircle"
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