import { createClassName } from "./className.mjs";

const segmentedControlSlotNames = [
  [
    "root",
    "segmentedControl__root"
  ],
  [
    "segment",
    "segmentedControl__segment"
  ],
  [
    "segmentLabel",
    "segmentedControl__segmentLabel"
  ],
  [
    "segmentLabelPlaceholder",
    "segmentedControl__segmentLabelPlaceholder"
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