import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";
import { splitVariantProps } from "./splitVariantProps.mjs";

const actionSheetSlotNames = [
  [
    "backdrop",
    "actionSheet__backdrop"
  ],
  [
    "container",
    "actionSheet__container"
  ],
  [
    "content",
    "actionSheet__content"
  ],
  [
    "list",
    "actionSheet__list"
  ],
  [
    "group",
    "actionSheet__group"
  ],
  [
    "footer",
    "actionSheet__footer"
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