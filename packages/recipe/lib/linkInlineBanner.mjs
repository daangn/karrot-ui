import { createClassName } from "./className.mjs";

const linkInlineBannerSlotNames = [
  [
    "root",
    "linkInlineBanner__root"
  ],
  [
    "linkLabel",
    "linkInlineBanner__linkLabel"
  ]
];

const defaultVariant = {
  "variant": "neutralWeak"
};

const compoundVariants = [];

export const linkInlineBannerVariantMap = {
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

export const linkInlineBannerVariantKeys = Object.keys(linkInlineBannerVariantMap);

export function linkInlineBanner(props) {
  return Object.fromEntries(
    linkInlineBannerSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, { ...defaultVariant, ...props }, compoundVariants),
      ];
    }),
  );
}