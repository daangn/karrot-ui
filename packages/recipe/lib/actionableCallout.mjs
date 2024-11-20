import { createClassName } from "./className.mjs";

const actionableCalloutSlotNames = [
  [
    "root",
    "actionableCallout__root"
  ],
  [
    "content",
    "actionableCallout__content"
  ],
  [
    "title",
    "actionableCallout__title"
  ],
  [
    "spacer",
    "actionableCallout__spacer"
  ],
  [
    "label",
    "actionableCallout__label"
  ],
  [
    "chevronRightIcon",
    "actionableCallout__chevronRightIcon"
  ]
];

const defaultVariant = {
  "variant": "neutral"
};

const compoundVariants = [];

export const actionableCalloutVariantMap = {
  "variant": [
    "neutral",
    "informative",
    "warning",
    "danger",
    "magic"
  ]
};

export const actionableCalloutVariantKeys = Object.keys(actionableCalloutVariantMap);

export function actionableCallout(props) {
  return Object.fromEntries(
    actionableCalloutSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, { ...defaultVariant, ...props }, compoundVariants),
      ];
    }),
  );
}