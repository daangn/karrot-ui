import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";
import { splitVariantProps } from "./splitVariantProps.mjs";

const appBarSlotNames = [
  [
    "root",
    "appBar__root"
  ],
  [
    "safeArea",
    "appBar__safeArea"
  ],
  [
    "left",
    "appBar__left"
  ],
  [
    "right",
    "appBar__right"
  ],
  [
    "title",
    "appBar__title"
  ],
  [
    "titleMain",
    "appBar__titleMain"
  ],
  [
    "titleText",
    "appBar__titleText"
  ],
  [
    "subtitleText",
    "appBar__subtitleText"
  ],
  [
    "iconButton",
    "appBar__iconButton"
  ],
  [
    "icon",
    "appBar__icon"
  ]
];

const defaultVariant = {
  "theme": "cupertino",
  "tone": "layer",
  "titleLayout": "titleOnly",
  "divider": false
};

const compoundVariants = [];

export const appBarVariantMap = {
  "titleLayout": [
    "titleOnly",
    "withSubtitle"
  ],
  "theme": [
    "cupertino",
    "android"
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