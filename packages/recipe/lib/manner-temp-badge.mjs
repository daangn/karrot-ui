import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";
import { splitVariantProps } from "./splitVariantProps.mjs";

const mannerTempBadgeSlotNames = [
  [
    "root",
    "seed-manner-temp-badge__root"
  ],
  [
    "label",
    "seed-manner-temp-badge__label"
  ]
];

const defaultVariant = {
  "level": "l1"
};

const compoundVariants = [];

export const mannerTempBadgeVariantMap = {
  "level": [
    "l1",
    "l2",
    "l3",
    "l4",
    "l5",
    "l6"
  ]
};

export const mannerTempBadgeVariantKeys = Object.keys(mannerTempBadgeVariantMap);

export function mannerTempBadge(props) {
  return Object.fromEntries(
    mannerTempBadgeSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, mergeVariants(defaultVariant, props), compoundVariants),
      ];
    }),
  );
}

Object.assign(mannerTempBadge, { splitVariantProps: (props) => splitVariantProps(props, mannerTempBadgeVariantMap) });