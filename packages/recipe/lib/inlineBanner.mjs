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
    "prefixIcon",
    "inlineBanner__prefixIcon"
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
    "actionButton",
    "inlineBanner__actionButton"
  ],
  [
    "dismissButton",
    "inlineBanner__dismissButton"
  ],
  [
    "xIcon",
    "inlineBanner__xIcon"
  ]
];

const defaultVariant = {
  "tone": "neutral"
};

const compoundVariants = [];

export const inlineBannerVariantMap = {
  "layout": [
    "contentOnly"
  ],
  "tone": [
    "neutral",
    "positive",
    "informative",
    "warning",
    "danger"
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