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
    "prefixIconContainer",
    "inlineBanner__prefixIconContainer"
  ],
  [
    "prefixIcon",
    "inlineBanner__prefixIcon"
  ],
  [
    "label",
    "inlineBanner__label"
  ],
  [
    "actionLabel",
    "inlineBanner__actionLabel"
  ],
  [
    "closeButton",
    "inlineBanner__closeButton"
  ],
  [
    "xIcon",
    "inlineBanner__xIcon"
  ]
];

const defaultVariant = {
  "tone": "neutral",
  "variant": "weak"
};

const compoundVariants = [
  {
    "variant": "solid",
    "tone": "neutral"
  },
  {
    "variant": "solid",
    "tone": "positive"
  },
  {
    "variant": "solid",
    "tone": "informative"
  },
  {
    "variant": "solid",
    "tone": "warning"
  },
  {
    "variant": "solid",
    "tone": "danger"
  },
  {
    "variant": "weak",
    "tone": "neutral"
  },
  {
    "variant": "weak",
    "tone": "positive"
  },
  {
    "variant": "weak",
    "tone": "informative"
  },
  {
    "variant": "weak",
    "tone": "warning"
  },
  {
    "variant": "weak",
    "tone": "danger"
  }
];

export const inlineBannerVariantMap = {
  "variant": [
    "solid",
    "weak"
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