import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";
import { splitVariantProps } from "./splitVariantProps.mjs";

const segmentedControlSlotNames = [
  [
    "root",
    "segmentedControl__root"
  ],
  [
    "indicator",
    "segmentedControl__indicator"
  ],
  [
    "item",
    "segmentedControl__item"
  ],
  [
    "itemLabel",
    "segmentedControl__itemLabel"
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