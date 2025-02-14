import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";
import { splitVariantProps } from "./splitVariantProps.mjs";

const linkWithIconSlotNames = [
  [
    "root",
    "seed-link-with-icon__root"
  ]
];

const defaultVariant = {
  "size": "t6"
};

const compoundVariants = [];

export const linkWithIconVariantMap = {
  "size": [
    "t6",
    "t5",
    "t4"
  ]
};

export const linkWithIconVariantKeys = Object.keys(linkWithIconVariantMap);

export function linkWithIcon(props) {
  return Object.fromEntries(
    linkWithIconSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, mergeVariants(defaultVariant, props), compoundVariants),
      ];
    }),
  );
}

Object.assign(linkWithIcon, { splitVariantProps: (props) => splitVariantProps(props, linkWithIconVariantMap) });