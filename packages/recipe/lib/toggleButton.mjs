import { createClassName } from "./className.mjs";

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
        createClassName(className, { ...defaultVariant, ...props }, compoundVariants),
      ];
    }),
  );
}