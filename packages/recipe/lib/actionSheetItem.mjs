import { createClassName } from "./className.mjs";

const actionSheetItemSlotNames = [
  [
    "root",
    "actionSheetItem__root"
  ],
  [
    "prefixIcon",
    "actionSheetItem__prefixIcon"
  ],
  [
    "label",
    "actionSheetItem__label"
  ]
];

const defaultVariant = {};

const compoundVariants = [];

export const actionSheetItemVariantMap = {
  "tone": [
    "neutral",
    "danger"
  ]
};

export const actionSheetItemVariantKeys = Object.keys(actionSheetItemVariantMap);

export function actionSheetItem(props) {
  return Object.fromEntries(
    actionSheetItemSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, { ...defaultVariant, ...props }, compoundVariants),
      ];
    }),
  );
}