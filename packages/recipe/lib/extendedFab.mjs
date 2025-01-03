import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";
import { splitVariantProps } from "./splitVariantProps.mjs";

const extendedFabSlotNames = [
  [
    "root",
    "extendedFab__root"
  ],
  [
    "label",
    "extendedFab__label"
  ],
  [
    "prefixIcon",
    "extendedFab__prefixIcon"
  ]
];

const defaultVariant = {
  "variant": "neutralSolid",
  "size": "medium"
};

const compoundVariants = [];

export const extendedFabVariantMap = {
  "variant": [
    "neutralSolid",
    "layerFloating"
  ],
  "size": [
    "small",
    "medium"
  ]
};

export const extendedFabVariantKeys = Object.keys(extendedFabVariantMap);

export function extendedFab(props) {
  return Object.fromEntries(
    extendedFabSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, mergeVariants(defaultVariant, props), compoundVariants),
      ];
    }),
  );
}

Object.assign(extendedFab, { splitVariantProps: (props) => splitVariantProps(props, extendedFabVariantMap) });