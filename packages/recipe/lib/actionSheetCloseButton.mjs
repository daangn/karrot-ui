import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";

const actionSheetCloseButtonSlotNames = [
  [
    "root",
    "actionSheetCloseButton__root"
  ],
  [
    "label",
    "actionSheetCloseButton__label"
  ]
];

const defaultVariant = {};

const compoundVariants = [];

export const actionSheetCloseButtonVariantMap = {};

export const actionSheetCloseButtonVariantKeys = Object.keys(actionSheetCloseButtonVariantMap);

export function actionSheetCloseButton(props) {
  return Object.fromEntries(
    actionSheetCloseButtonSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, mergeVariants(defaultVariant, props), compoundVariants),
      ];
    }),
  );
}