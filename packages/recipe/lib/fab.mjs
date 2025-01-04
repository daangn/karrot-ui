import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";
import { splitVariantProps } from "./splitVariantProps.mjs";

const fabSlotNames = [
  [
    "root",
    "fab__root"
  ],
  [
    "icon",
    "fab__icon"
  ]
];

const defaultVariant = {};

const compoundVariants = [];

export const fabVariantMap = {};

export const fabVariantKeys = Object.keys(fabVariantMap);

export function fab(props) {
  return Object.fromEntries(
    fabSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, mergeVariants(defaultVariant, props), compoundVariants),
      ];
    }),
  );
}

Object.assign(fab, { splitVariantProps: (props) => splitVariantProps(props, fabVariantMap) });