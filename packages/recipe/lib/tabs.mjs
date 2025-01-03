import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";

const tabsSlotNames = [
  [
    "root",
    "tabs__root"
  ],
  [
    "triggerList",
    "tabs__triggerList"
  ],
  [
    "contentList",
    "tabs__contentList"
  ],
  [
    "contentCamera",
    "tabs__contentCamera"
  ],
  [
    "content",
    "tabs__content"
  ],
  [
    "indicator",
    "tabs__indicator"
  ]
];

const defaultVariant = {
  "layout": "hug",
  "size": "small",
  "fixTriggerList": false
};

const compoundVariants = [];

export const tabsVariantMap = {
  "layout": [
    "fill",
    "hug"
  ],
  "size": [
    "small",
    "medium"
  ],
  "fixTriggerList": [
    true,
    false
  ]
};

export const tabsVariantKeys = Object.keys(tabsVariantMap);

export function tabs(props) {
  return Object.fromEntries(
    tabsSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, mergeVariants(defaultVariant, props), compoundVariants),
      ];
    }),
  );
}