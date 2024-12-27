import { createClassName } from "./className.mjs";

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
        createClassName(className, { ...defaultVariant, ...props }, compoundVariants),
      ];
    }),
  );
}