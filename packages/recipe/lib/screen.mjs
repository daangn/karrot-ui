import { createClassName } from "./className.mjs";

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

const defaultVariant = {};

const compoundVariants = [];

export const screenVariantMap = {
  "theme": [
    "cupertino",
    "android"
  ],
  "hasAppBar": [
    "true"
  ]
};

export const screenVariantKeys = Object.keys(screenVariantMap);

export function screen(props) {
  return Object.fromEntries(
    screenSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, { ...defaultVariant, ...props }, compoundVariants),
      ];
    }),
  );
}