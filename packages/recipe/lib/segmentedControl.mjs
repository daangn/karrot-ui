import { createClassName } from "./className.mjs";

const segmentedControlSlotNames = [
  [
    "root",
    "segmentedControl__root"
  ],
  [
    "option",
    "segmentedControl__option"
  ],
  [
    "optionLabel",
    "segmentedControl__optionLabel"
  ],
  [
    "optionLabelPlaceholder",
    "segmentedControl__optionLabelPlaceholder"
  ],
  [
    "indicator",
    "segmentedControl__indicator"
  ]
];

const defaultVariant = {};

const compoundVariants = [];

export const segmentedControlVariantMap = {};

export const segmentedControlVariantKeys = Object.keys(segmentedControlVariantMap);

export function segmentedControl(props) {
  return Object.fromEntries(
    segmentedControlSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, { ...defaultVariant, ...props }, compoundVariants),
      ];
    }),
  );
}