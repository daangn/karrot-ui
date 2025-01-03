import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";
import { splitVariantProps } from "./splitVariantProps.mjs";

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
        createClassName(className, mergeVariants(defaultVariant, props), compoundVariants),
      ];
    }),
  );
}

Object.assign(segmentedControl, { splitVariantProps: (props) => splitVariantProps(props, segmentedControlVariantMap) });