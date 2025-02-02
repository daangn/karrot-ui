import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";
import { splitVariantProps } from "./splitVariantProps.mjs";

const appBarMainSlotNames = [
  [
    "root",
    "appBarMain__root"
  ],
  [
    "title",
    "appBarMain__title"
  ],
  [
    "subtitle",
    "appBarMain__subtitle"
  ]
];

const defaultVariant = {
  "layout": "titleOnly",
  "theme": "cupertino",
  "transitionStyle": "slideFromRightIOS",
  "tone": "layer"
};

const compoundVariants = [];

export const appBarMainVariantMap = {
  "layout": [
    "titleOnly",
    "withSubtitle"
  ],
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
  ]
};

export const appBarMainVariantKeys = Object.keys(appBarMainVariantMap);

export function appBarMain(props) {
  return Object.fromEntries(
    appBarMainSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, mergeVariants(defaultVariant, props), compoundVariants),
      ];
    }),
  );
}

Object.assign(appBarMain, { splitVariantProps: (props) => splitVariantProps(props, appBarMainVariantMap) });