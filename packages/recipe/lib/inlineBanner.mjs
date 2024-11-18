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
    "contentIcon",
    "inlineBanner__contentIcon"
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
    "link",
    "inlineBanner__link"
  ],
  [
    "button",
    "inlineBanner__button"
  ],
  [
    "buttonIcon",
    "inlineBanner__buttonIcon"
  ]
];

const defaultVariant = {
  "tone": "neutral",
  "variant": "weak"
};

const compoundVariants = [
  {
    "tone": "warning",
    "variant": "weak"
  },
  {
    "tone": "warning",
    "variant": "solid"
  },
  {
    "tone": "danger",
    "variant": "weak"
  },
  {
    "tone": "danger",
    "variant": "solid"
  }
];

export const inlineBannerVariantMap = {
  "layout": [
    "withAction",
    "withoutAction"
  ],
  "tone": [
    "neutral",
    "positive",
    "informative",
    "warning",
    "danger"
  ],
  "variant": [
    "weak",
    "solid"
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