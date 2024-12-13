import { createClassName } from "./className.mjs";

const selectBoxGroupSlotNames = [
  [
    "root",
    "selectBoxGroup__root"
  ],
  [
    "box",
    "selectBoxGroup__box"
  ],
  [
    "content",
    "selectBoxGroup__content"
  ],
  [
    "label",
    "selectBoxGroup__label"
  ],
  [
    "description",
    "selectBoxGroup__description"
  ],
  [
    "checkboxControl",
    "selectBoxGroup__checkboxControl"
  ],
  [
    "checkboxIcon",
    "selectBoxGroup__checkboxIcon"
  ],
  [
    "radioControl",
    "selectBoxGroup__radioControl"
  ],
  [
    "radioIcon",
    "selectBoxGroup__radioIcon"
  ]
];

const defaultVariant = {};

const compoundVariants = [];

export const selectBoxGroupVariantMap = {};

export const selectBoxGroupVariantKeys = Object.keys(selectBoxGroupVariantMap);

export function selectBoxGroup(props) {
  return Object.fromEntries(
    selectBoxGroupSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, { ...defaultVariant, ...props }, compoundVariants),
      ];
    }),
  );
}