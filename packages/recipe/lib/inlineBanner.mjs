import { createClassName } from "./className.mjs";

const inlineBannerSlotNames = [
  [
    "root",
    "inlineBanner__root"
  ],
  [
    "content",
    "inlineBanner__content"
  ],
  [
    "icon",
    "inlineBanner__icon"
  ],
  [
    "title",
    "inlineBanner__title"
  ],
  [
    "spacer",
    "inlineBanner__spacer"
  ],
  [
    "label",
    "inlineBanner__label"
  ],
  [
    "linkLabel",
    "inlineBanner__linkLabel"
  ],
  [
    "dismissButton",
    "inlineBanner__dismissButton"
  ],
  [
    "xIcon",
    "inlineBanner__xIcon"
  ],
  [
    "chevronRightIcon",
    "inlineBanner__chevronRightIcon"
  ]
];

const defaultVariant = {
  "variant": "neutralWeak"
};

const compoundVariants = [];

export const inlineBannerVariantMap = {
  "type": [
    "default",
    "link",
    "dismissible",
    "actionable"
  ],
  "variant": [
    "neutralWeak",
    "positiveWeak",
    "informativeWeak",
    "warningWeak",
    "warningSolid",
    "dangerWeak",
    "dangerSolid"
  ]
};

export const inlineBannerVariantKeys = Object.keys(inlineBannerVariantMap);

export function inlineBanner(props) {
  return Object.fromEntries(
    inlineBannerSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, { ...defaultVariant, ...props }, compoundVariants),
      ];
    }),
  );
}