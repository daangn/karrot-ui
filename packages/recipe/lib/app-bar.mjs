import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";
import { splitVariantProps } from "./splitVariantProps.mjs";

const appBarSlotNames = [
  [
    "root",
    "seed-app-bar__root"
  ],
  [
    "left",
    "seed-app-bar__left"
  ],
  [
    "right",
    "seed-app-bar__right"
  ],
  [
    "iconButton",
    "seed-app-bar__iconButton"
  ],
  [
    "icon",
    "seed-app-bar__icon"
  ]
];

const defaultVariant = {
  "theme": "cupertino",
  "transitionStyle": "slideFromRightIOS",
  "tone": "layer",
  "divider": false
};

const compoundVariants = [];

export const appBarVariantMap = {
  "theme": [
    "cupertino",
    "android"
  ],
  "transitionStyle": [
    "slideFromRightIOS",
    "fadeFromBottomAndroid"
  ],
  "tone": [
    "layer",
    "transparent"
  ],
  "divider": [
    true
  ]
};

export const appBarVariantKeys = Object.keys(appBarVariantMap);

export function appBar(props) {
  return Object.fromEntries(
    appBarSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, mergeVariants(defaultVariant, props), compoundVariants),
      ];
    }),
  );
}

Object.assign(appBar, { splitVariantProps: (props) => splitVariantProps(props, appBarVariantMap) });