import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";

const actionChipSlotNames = [
  [
    "root",
    "actionChip__root"
  ],
  [
    "label",
    "actionChip__label"
  ],
  [
    "icon",
    "actionChip__icon"
  ],
  [
    "prefixIcon",
    "actionChip__prefixIcon"
  ],
  [
    "suffixIcon",
    "actionChip__suffixIcon"
  ],
  [
    "count",
    "actionChip__count"
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