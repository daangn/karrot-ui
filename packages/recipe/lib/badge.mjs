import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";

const badgeSlotNames = [
  [
    "root",
    "badge__root"
  ],
  [
    "label",
    "badge__label"
  ]
];

const defaultVariant = {
  "size": "medium",
  "shape": "rectangle",
  "variant": "solid",
  "tone": "neutral"
};

const compoundVariants = [
  {
    "shape": "rectangle",
    "size": "medium"
  },
  {
    "shape": "rectangle",
    "size": "large"
  },
  {
    "tone": "neutral",
    "variant": "weak"
  },
  {
    "tone": "neutral",
    "variant": "solid"
  },
  {
    "tone": "neutral",
    "variant": "outlined"
  },
  {
    "tone": "brand",
    "variant": "weak"
  },
  {
    "tone": "brand",
    "variant": "solid"
  },
  {
    "tone": "brand",
    "variant": "outlined"
  },
  {
    "tone": "informative",
    "variant": "weak"
  },
  {
    "tone": "informative",
    "variant": "solid"
  },
  {
    "tone": "informative",
    "variant": "outlined"
  },
  {
    "tone": "positive",
    "variant": "weak"
  },
  {
    "tone": "positive",
    "variant": "solid"
  },
  {
    "tone": "positive",
    "variant": "outlined"
  },
  {
    "tone": "danger",
    "variant": "weak"
  },
  {
    "tone": "danger",
    "variant": "solid"
  },
  {
    "tone": "danger",
    "variant": "outlined"
  }
];

export const badgeVariantMap = {
  "size": [
    "medium",
    "large"
  ],
  "shape": [
    "rectangle",
    "pill"
  ],
  "variant": [
    "weak",
    "solid",
    "outlined"
  ],
  "tone": [
    "neutral",
    "brand",
    "informative",
    "positive",
    "danger"
  ]
};

export const badgeVariantKeys = Object.keys(badgeVariantMap);

export function badge(props) {
  return Object.fromEntries(
    badgeSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, mergeVariants(defaultVariant, props), compoundVariants),
      ];
    }),
  );
}