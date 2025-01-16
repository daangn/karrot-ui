import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";
import { splitVariantProps } from "./splitVariantProps.mjs";

const dialogSlotNames = [
  [
    "positioner",
    "dialog__positioner"
  ],
  [
    "backdrop",
    "dialog__backdrop"
  ],
  [
    "content",
    "dialog__content"
  ],
  [
    "header",
    "dialog__header"
  ],
  [
    "footer",
    "dialog__footer"
  ],
  [
    "action",
    "dialog__action"
  ],
  [
    "title",
    "dialog__title"
  ],
  [
    "description",
    "dialog__description"
  ]
];

const defaultVariant = {};

const compoundVariants = [];

export const dialogVariantMap = {};

export const dialogVariantKeys = Object.keys(dialogVariantMap);

export function dialog(props) {
  return Object.fromEntries(
    dialogSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, mergeVariants(defaultVariant, props), compoundVariants),
      ];
    }),
  );
}

Object.assign(dialog, { splitVariantProps: (props) => splitVariantProps(props, dialogVariantMap) });