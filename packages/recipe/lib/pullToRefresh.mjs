import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";
import { splitVariantProps } from "./splitVariantProps.mjs";

const pullToRefreshSlotNames = [
  [
    "root",
    "pullToRefresh__root"
  ],
  [
    "indicator",
    "pullToRefresh__indicator"
  ]
];

const defaultVariant = {};

const compoundVariants = [];

export const pullToRefreshVariantMap = {};

export const pullToRefreshVariantKeys = Object.keys(pullToRefreshVariantMap);

export function pullToRefresh(props) {
  return Object.fromEntries(
    pullToRefreshSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, mergeVariants(defaultVariant, props), compoundVariants),
      ];
    }),
  );
}

Object.assign(pullToRefresh, { splitVariantProps: (props) => splitVariantProps(props, pullToRefreshVariantMap) });