import { createClassName } from "./className.mjs";

const segmentedControlSlotNames = [
  [
    "root",
    "segmentedControl__root"
  ],
  [
    "trigger",
    "segmentedControl__trigger"
  ],
  [
    "triggerLabel",
    "segmentedControl__triggerLabel"
  ],
  [
    "triggerLabelPlaceholder",
    "segmentedControl__triggerLabelPlaceholder"
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