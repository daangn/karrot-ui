import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";
import { splitVariantProps } from "./splitVariantProps.mjs";

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
    "field",
    "textField__field"
  ],
  [
    "value",
    "textField__value"
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
    "characterCountArea",
    "textField__characterCountArea"
  ],
  [
    "characterCount",
    "textField__characterCount"
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
        createClassName(className, mergeVariants(defaultVariant, props), compoundVariants),
      ];
    }),
  );
}

Object.assign(textField, { splitVariantProps: (props) => splitVariantProps(props, textFieldVariantMap) });