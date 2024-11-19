import { createClassName } from "./className.mjs";

const dismissibleInlineBannerSlotNames = [
  [
    "root",
    "dismissibleInlineBanner__root"
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