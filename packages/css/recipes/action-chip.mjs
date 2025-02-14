import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";
import { splitVariantProps } from "./splitVariantProps.mjs";

const actionChipSlotNames = [
  [
    "root",
    "seed-action-chip__root"
  ],
  [
    "label",
    "seed-action-chip__label"
  ],
  [
    "icon",
    "seed-action-chip__icon"
  ],
  [
    "prefixIcon",
    "seed-action-chip__prefixIcon"
  ],
  [
    "suffixIcon",
    "seed-action-chip__suffixIcon"
  ],
  [
    "count",
    "seed-action-chip__count"
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

export const actionChipVariantMap = {
  "size": [
    "medium",
    "small"
  ],
  "layout": [
    "withText",
    "iconOnly"
  ]
};

export const actionChipVariantKeys = Object.keys(actionChipVariantMap);

export function actionChip(props) {
  return Object.fromEntries(
    actionChipSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, mergeVariants(defaultVariant, props), compoundVariants),
      ];
    }),
  );
}

Object.assign(actionChip, { splitVariantProps: (props) => splitVariantProps(props, actionChipVariantMap) });