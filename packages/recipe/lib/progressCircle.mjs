import { createClassName } from "./className.mjs";

const progressCircleSlotNames = [
  [
    "root",
    "progressCircle__root"
  ],
  [
    "track",
    "progressCircle__track"
  ],
  [
    "range",
    "progressCircle__range"
  ]
];

const defaultVariant = {
  "tone": "neutral",
  "size": 40,
  "indeterminate": false
};

const compoundVariants = [];

export const progressCircleVariantMap = {
  "tone": [
    "neutral",
    "brand",
    "staticWhite"
  ],
  "size": [
    "24",
    "40"
  ],
  "indeterminate": [
    "true",
    "false"
  ]
};

export const progressCircleVariantKeys = Object.keys(progressCircleVariantMap);

export function progressCircle(props) {
  return Object.fromEntries(
    progressCircleSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, { ...defaultVariant, ...props }, compoundVariants),
      ];
    }),
  );
}