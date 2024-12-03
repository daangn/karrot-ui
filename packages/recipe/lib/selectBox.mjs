import { createClassName } from "./className.mjs";

const selectBoxSlotNames = [
  [
    "root",
    "selectBox__root"
  ],
  [
    "box",
    "selectBox__box"
  ],
  [
    "content",
    "selectBox__content"
  ],
  [
    "control",
    "selectBox__control"
  ],
  [
    "label",
    "selectBox__label"
  ],
  [
    "description",
    "selectBox__description"
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
        createClassName(className, { ...defaultVariant, ...props }, compoundVariants),
      ];
    }),
  );
}