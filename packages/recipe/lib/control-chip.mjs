import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";
import { splitVariantProps } from "./splitVariantProps.mjs";

const controlChipSlotNames = [
  [
    "root",
    "seed-control-chip__root"
  ],
  [
    "label",
    "seed-control-chip__label"
  ],
  [
    "icon",
    "seed-control-chip__icon"
  ],
  [
    "prefixIcon",
    "seed-control-chip__prefixIcon"
  ],
  [
    "suffixIcon",
    "seed-control-chip__suffixIcon"
  ],
  [
    "count",
    "seed-control-chip__count"
  ]
];

const defaultVariant = {
  "size": "medium",
  "layout": "withText"
};

const compoundVariants = [
  {
    "size": "medium",
    "layout": "withText"
  },
  {
    "size": "medium",
    "layout": "iconOnly"
  },
  {
    "size": "small",
    "layout": "withText"
  },
  {
    "size": "small",
    "layout": "iconOnly"
  }
];

export const controlChipVariantMap = {
  "size": [
    "medium",
    "small"
  ],
  "layout": [
    "withText",
    "iconOnly"
  ]
};

export const controlChipVariantKeys = Object.keys(controlChipVariantMap);

export function controlChip(props) {
  return Object.fromEntries(
    controlChipSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, mergeVariants(defaultVariant, props), compoundVariants),
      ];
    }),
  );
}

Object.assign(controlChip, { splitVariantProps: (props) => splitVariantProps(props, controlChipVariantMap) });