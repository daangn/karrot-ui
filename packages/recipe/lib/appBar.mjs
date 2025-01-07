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
    "container",
    "appBar__container"
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
    "titleEdge",
    "appBar__titleEdge"
  ],
  [
    "titleText",
    "appBar__titleText"
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
  "border": false
};

const compoundVariants = [];

export const appBarVariantMap = {
  "theme": [
    "cupertino",
    "android"
  ],
  "tone": [
    "layer",
    "transparent"
  ],
  "border": [
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