import { createClassName } from "./className.mjs";

const dismissibleInlineBannerSlotNames = [
  [
    "root",
    "dismissibleInlineBanner__root"
  ],
  [
    "content",
    "dismissibleInlineBanner__content"
  ],
  [
    "icon",
    "dismissibleInlineBanner__icon"
  ],
  [
    "title",
    "dismissibleInlineBanner__title"
  ],
  [
    "spacer",
    "dismissibleInlineBanner__spacer"
  ],
  [
    "label",
    "dismissibleInlineBanner__label"
  ],
  [
    "dismissButton",
    "dismissibleInlineBanner__dismissButton"
  ],
  [
    "xIcon",
    "dismissibleInlineBanner__xIcon"
  ]
];

const defaultVariant = {
  "variant": "neutralWeak"
};

const compoundVariants = [];

export const dismissibleInlineBannerVariantMap = {
  "variant": [
    "neutralWeak",
    "positiveWeak",
    "informativeWeak",
    "warningWeak",
    "warningSolid"
  ]
};

export const dismissibleInlineBannerVariantKeys = Object.keys(dismissibleInlineBannerVariantMap);

export function dismissibleInlineBanner(props) {
  return Object.fromEntries(
    dismissibleInlineBannerSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, { ...defaultVariant, ...props }, compoundVariants),
      ];
    }),
  );
}