import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";
import { splitVariantProps } from "./splitVariantProps.mjs";

const dialogSlotNames = [
  [
    "backdrop",
    "dialog__backdrop"
  ],
  [
    "container",
    "dialog__container"
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

const defaultVariant = {
  "footerLayout": "horizontal"
};

const compoundVariants = [];

export const dialogVariantMap = {
  "footerLayout": [
    "horizontal",
    "vertical"
  ]
};

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