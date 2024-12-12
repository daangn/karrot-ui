import { createClassName } from "./className.mjs";

const topNavigationSlotNames = [
  [
    "root",
    "topNavigation__root"
  ],
  [
    "safeArea",
    "topNavigation__safeArea"
  ],
  [
    "container",
    "topNavigation__container"
  ],
  [
    "left",
    "topNavigation__left"
  ],
  [
    "right",
    "topNavigation__right"
  ],
  [
    "title",
    "topNavigation__title"
  ],
  [
    "titleMain",
    "topNavigation__titleMain"
  ],
  [
    "titleEdge",
    "topNavigation__titleEdge"
  ],
  [
    "titleText",
    "topNavigation__titleText"
  ],
  [
    "icon",
    "topNavigation__icon"
  ]
];

const defaultVariant = {};

const compoundVariants = [];

export const topNavigationVariantMap = {
  "theme": [
    "cupertino",
    "android"
  ],
  "tone": [
    "layer",
    "transparent"
  ],
  "border": [
    "true"
  ]
};

export const topNavigationVariantKeys = Object.keys(topNavigationVariantMap);

export function topNavigation(props) {
  return Object.fromEntries(
    topNavigationSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, { ...defaultVariant, ...props }, compoundVariants),
      ];
    }),
  );
}