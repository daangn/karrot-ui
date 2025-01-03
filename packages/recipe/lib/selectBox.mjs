import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";

const selectBoxSlotNames = [
  [
    "root",
    "selectBox__root"
  ],
  [
    "content",
    "selectBox__content"
  ],
  [
    "label",
    "selectBox__label"
  ],
  [
    "description",
    "selectBox__description"
  ],
  [
    "checkboxControl",
    "selectBox__checkboxControl"
  ],
  [
    "checkboxIcon",
    "selectBox__checkboxIcon"
  ],
  [
    "radioControl",
    "selectBox__radioControl"
  ],
  [
    "radioIcon",
    "selectBox__radioIcon"
  ]
];

const defaultVariant = {};

const compoundVariants = [];

export const selectBoxVariantMap = {};

export const selectBoxVariantKeys = Object.keys(selectBoxVariantMap);

export function selectBox(props) {
  return Object.fromEntries(
    selectBoxSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, mergeVariants(defaultVariant, props), compoundVariants),
      ];
    }),
  );
}