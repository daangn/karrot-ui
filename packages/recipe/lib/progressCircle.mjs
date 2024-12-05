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
    "indicator",
    "progressCircle__indicator"
  ],
  [
    "indicator-path",
    "progressCircle__indicator-path"
  ]
];

const defaultVariant = {
  "variant": "neutral",
  "size": "medium",
  "indeterminate": false
};

const compoundVariants = [];

export const progressCircleVariantMap = {
  "variant": [
    "neutral",
    "brand",
    "white"
  ],
  "size": [
    "small",
    "medium"
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