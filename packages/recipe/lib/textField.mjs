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
    "indicator",
    "textField__indicator"
  ],
  [
    "input",
    "textField__input"
  ],
  [
    "inputText",
    "textField__inputText"
  ],
  [
    "prefixText",
    "textField__prefixText"
  ],
  [
    "prefixIcon",
    "textField__prefixIcon"
  ],
  [
    "suffixText",
    "textField__suffixText"
  ],
  [
    "suffixIcon",
    "textField__suffixIcon"
  ],
  [
    "footer",
    "textField__footer"
  ],
  [
    "description",
    "textField__description"
  ],
  [
    "errorMessage",
    "textField__errorMessage"
  ],
  [
    "errorIcon",
    "textField__errorIcon"
  ],
  [
    "characterCount",
    "textField__characterCount"
  ],
  [
    "currentCharacterCount",
    "textField__currentCharacterCount"
  ],
  [
    "maxCharacterCount",
    "textField__maxCharacterCount"
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