import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";
import { splitVariantProps } from "./splitVariantProps.mjs";

const chipTabsSlotNames = [
  [
    "root",
    "chipTabs__root"
  ],
  [
    "list",
    "chipTabs__list"
  ],
  [
    "carousel",
    "chipTabs__carousel"
  ],
  [
    "carouselCamera",
    "chipTabs__carouselCamera"
  ],
  [
    "content",
    "chipTabs__content"
  ],
  [
    "trigger",
    "chipTabs__trigger"
  ],
  [
    "triggerLabel",
    "chipTabs__triggerLabel"
  ]
];

const defaultVariant = {
  "variant": "neutralSolid",
  "contentLayout": "hug",
  "stickyList": false
};

const compoundVariants = [];

export const chipTabsVariantMap = {
  "variant": [
    "neutralSolid",
    "brandSolid"
  ],
  "contentLayout": [
    "fill",
    "hug"
  ],
  "stickyList": [
    true,
    false
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

Object.assign(chipTabs, { splitVariantProps: (props) => splitVariantProps(props, chipTabsVariantMap) });