import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";
import { splitVariantProps } from "./splitVariantProps.mjs";

const textSlotNames = [
  [
    "root",
    "text__root"
  ]
];

const defaultVariant = {
  "textStyle": "bodyMediumDefault",
  "maxLines": "none"
};

const compoundVariants = [];

export const textVariantMap = {
  "textStyle": [
    "screenTitle",
    "articleBody",
    "t1Regular",
    "t1Medium",
    "t1Bold",
    "t2Regular",
    "t2Medium",
    "t2Bold",
    "t3Regular",
    "t3Medium",
    "t3Bold",
    "t4Regular",
    "t4Medium",
    "t4Bold",
    "t5Regular",
    "t5Medium",
    "t5Bold",
    "t6Bold",
    "t7Bold",
    "t8Bold",
    "t9Bold",
    "t10Bold"
  ],
  "maxLines": [
    "none",
    "single",
    "multi"
  ]
};

export const textVariantKeys = Object.keys(textVariantMap);

export function text(props) {
  return Object.fromEntries(
    textSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, mergeVariants(defaultVariant, props), compoundVariants),
      ];
    }),
  );
}

Object.assign(text, { splitVariantProps: (props) => splitVariantProps(props, textVariantMap) });