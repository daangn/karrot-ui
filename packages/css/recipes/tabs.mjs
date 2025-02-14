import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";
import { splitVariantProps } from "./splitVariantProps.mjs";

const tabsSlotNames = [
  [
    "root",
    "seed-tabs__root"
  ],
  [
    "list",
    "seed-tabs__list"
  ],
  [
    "carousel",
    "seed-tabs__carousel"
  ],
  [
    "carouselCamera",
    "seed-tabs__carouselCamera"
  ],
  [
    "content",
    "seed-tabs__content"
  ],
  [
    "indicator",
    "seed-tabs__indicator"
  ],
  [
    "trigger",
    "seed-tabs__trigger"
  ],
  [
    "triggerLabel",
    "seed-tabs__triggerLabel"
  ],
  [
    "triggerNotification",
    "seed-tabs__triggerNotification"
  ]
];

const defaultVariant = {
  "triggerLayout": "fill",
  "contentLayout": "hug",
  "size": "small",
  "stickyList": false
};

const compoundVariants = [];

export const tabsVariantMap = {
  "triggerLayout": [
    "fill",
    "hug"
  ],
  "contentLayout": [
    "fill",
    "hug"
  ],
  "size": [
    "small",
    "medium"
  ],
  "stickyList": [
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

Object.assign(tabs, { splitVariantProps: (props) => splitVariantProps(props, tabsVariantMap) });