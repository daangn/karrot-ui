import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";
import { splitVariantProps } from "./splitVariantProps.mjs";

const appScreenSlotNames = [
  [
    "root",
    "appScreen__root"
  ],
  [
    "layer",
    "appScreen__layer"
  ],
  [
    "dim",
    "appScreen__dim"
  ],
  [
    "edge",
    "appScreen__edge"
  ]
];

const defaultVariant = {
  "theme": "cupertino",
  "transitionStyle": "slideFromRightIOS",
  "layerOffsetTop": "appBar",
  "layerOffsetBottom": "none"
};

const compoundVariants = [];

export const appScreenVariantMap = {
  "theme": [
    "cupertino",
    "android"
  ],
  "transitionStyle": [
    "slideFromRightIOS",
    "fadeFromBottomAndroid"
  ],
  "layerOffsetTop": [
    "none",
    "safeArea",
    "appBar"
  ],
  "layerOffsetBottom": [
    "none",
    "safeArea"
  ]
};

export const appScreenVariantKeys = Object.keys(appScreenVariantMap);

export function appScreen(props) {
  return Object.fromEntries(
    appScreenSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, mergeVariants(defaultVariant, props), compoundVariants),
      ];
    }),
  );
}

Object.assign(appScreen, { splitVariantProps: (props) => splitVariantProps(props, appScreenVariantMap) });