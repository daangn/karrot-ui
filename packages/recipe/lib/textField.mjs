import { createClassName } from "./className.mjs";

const textFieldSlotNames = [
  [
    "root",
    "textField__root"
  ],
  [
    "header",
    "textField__header"
  ],
  [
    "label",
    "textField__label"
  ],
  [
    "spacer",
    "textField__spacer"
  ],
  [
    "indicator",
    "textField__indicator"
  ],
  [
    "content",
    "textField__content"
  ],
  [
    "input",
    "textField__input"
  ],
  [
    "description",
    "textField__description"
  ],
  [
    "errorIcon",
    "textField__errorIcon"
  ]
];

const defaultVariant = {
  "size": "medium"
};

const compoundVariants = [];

export const textFieldVariantMap = {
  "size": [
    "xlarge",
    "large",
    "medium"
  ]
};

export const textFieldVariantKeys = Object.keys(textFieldVariantMap);

export function textField(props) {
  return Object.fromEntries(
    textFieldSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, { ...defaultVariant, ...props }, compoundVariants),
      ];
    }),
  );
}