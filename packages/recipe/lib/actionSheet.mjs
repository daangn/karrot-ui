import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";
import { splitVariantProps } from "./splitVariantProps.mjs";

const actionSheetSlotNames = [
  [
    "backdrop",
    "actionSheet__backdrop"
  ],
  [
    "positioner",
    "actionSheet__positioner"
  ],
  [
    "content",
    "actionSheet__content"
  ],
  [
    "header",
    "actionSheet__header"
  ],
  [
    "title",
    "actionSheet__title"
  ],
  [
    "description",
    "actionSheet__description"
  ],
  [
    "list",
    "actionSheet__list"
  ]
];

const defaultVariant = {};

const compoundVariants = [];

export const actionSheetVariantMap = {};

export const actionSheetVariantKeys = Object.keys(actionSheetVariantMap);

export function actionSheet(props) {
  return Object.fromEntries(
    actionSheetSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, mergeVariants(defaultVariant, props), compoundVariants),
      ];
    }),
  );
}

Object.assign(actionSheet, { splitVariantProps: (props) => splitVariantProps(props, actionSheetVariantMap) });