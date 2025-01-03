import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";

const chipTabsSlotNames = [
  [
    "root",
    "chipTabs__root"
  ],
  [
    "triggerList",
    "chipTabs__triggerList"
  ],
  [
    "contentList",
    "chipTabs__contentList"
  ],
  [
    "contentCamera",
    "chipTabs__contentCamera"
  ],
  [
    "content",
    "chipTabs__content"
  ]
];

const defaultVariant = {
  "variant": "neutralSolid"
};

const compoundVariants = [];

export const chipTabsVariantMap = {
  "variant": [
    "neutralSolid",
    "brandSolid"
  ]
};

export const chipTabsVariantKeys = Object.keys(chipTabsVariantMap);

export function chipTabs(props) {
  return Object.fromEntries(
    chipTabsSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, mergeVariants(defaultVariant, props), compoundVariants),
      ];
    }),
  );
}