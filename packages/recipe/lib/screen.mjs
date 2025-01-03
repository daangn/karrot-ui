import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";
import { splitVariantProps } from "./splitVariantProps.mjs";

const screenSlotNames = [
  [
    "root",
    "screen__root"
  ],
  [
    "layer",
    "screen__layer"
  ],
  [
    "dim",
    "screen__dim"
  ],
  [
    "edge",
    "screen__edge"
  ]
];

const defaultVariant = {
  "theme": "cupertino",
  "hasAppBar": false
};

const compoundVariants = [];

export const screenVariantMap = {
  "theme": [
    "cupertino",
    "android"
  ],
  "hasAppBar": [
    true
  ]
};

export const screenVariantKeys = Object.keys(screenVariantMap);

export function screen(props) {
  return Object.fromEntries(
    screenSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, mergeVariants(defaultVariant, props), compoundVariants),
      ];
    }),
  );
}

Object.assign(screen, { splitVariantProps: (props) => splitVariantProps(props, screenVariantMap) });