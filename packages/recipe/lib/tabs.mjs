import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";
import { splitVariantProps } from "./splitVariantProps.mjs";

const tabsSlotNames = [
  [
    "root",
    "tabs__root"
  ],
  [
    "list",
    "tabs__list"
  ],
  [
    "carousel",
    "tabs__carousel"
  ],
  [
    "carouselCamera",
    "tabs__carouselCamera"
  ],
  [
    "content",
    "tabs__content"
  ],
  [
    "indicator",
    "tabs__indicator"
  ],
  [
    "trigger",
    "tabs__trigger"
  ],
  [
    "triggerLabel",
    "tabs__triggerLabel"
  ],
  [
    "triggerNotification",
    "tabs__triggerNotification"
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