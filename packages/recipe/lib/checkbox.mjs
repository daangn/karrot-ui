import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";

const checkboxSlotNames = [
  [
    "root",
    "checkbox__root"
  ],
  [
    "control",
    "checkbox__control"
  ],
  [
    "icon",
    "checkbox__icon"
  ],
  [
    "label",
    "checkbox__label"
  ]
];

const defaultVariant = {
  "size": "medium",
  "variant": "square",
  "weight": "default",
  "indeterminate": false
};

const compoundVariants = [
  {
    "size": "small",
    "variant": "ghost"
  },
  {
    "size": "medium",
    "variant": "ghost"
  },
  {
    "size": "large",
    "variant": "ghost"
  },
  {
    "size": "small",
    "variant": "square"
  },
  {
    "size": "medium",
    "variant": "square"
  },
  {
    "size": "large",
    "variant": "square"
  }
];

export const checkboxVariantMap = {
  "weight": [
    "default",
    "stronger"
  ],
  "indeterminate": [
    true,
    false
  ],
  "variant": [
    "square",
    "ghost"
  ],
  "size": [
    "large",
    "medium",
    "small"
  ]
};

export const checkboxVariantKeys = Object.keys(checkboxVariantMap);

export function checkbox(props) {
  return Object.fromEntries(
    checkboxSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, mergeVariants(defaultVariant, props), compoundVariants),
      ];
    }),
  );
}