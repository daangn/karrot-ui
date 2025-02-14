import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";
import { splitVariantProps } from "./splitVariantProps.mjs";

const inlineBannerSlotNames = [
  [
    "root",
    "seed-inline-banner__root"
  ],
  [
    "content",
    "seed-inline-banner__content"
  ],
  [
    "icon",
    "seed-inline-banner__icon"
  ],
  [
    "title",
    "seed-inline-banner__title"
  ],
  [
    "spacer",
    "seed-inline-banner__spacer"
  ],
  [
    "description",
    "seed-inline-banner__description"
  ],
  [
    "linkLabel",
    "seed-inline-banner__linkLabel"
  ],
  [
    "actionableIcon",
    "seed-inline-banner__actionableIcon"
  ],
  [
    "dismissButton",
    "seed-inline-banner__dismissButton"
  ],
  [
    "dismissIcon",
    "seed-inline-banner__dismissIcon"
  ]
];

const defaultVariant = {
  "variant": "neutralWeak"
};

const compoundVariants = [];

export const inlineBannerVariantMap = {
  "variant": [
    "neutralWeak",
    "positiveWeak",
    "informativeWeak",
    "warningWeak",
    "warningSolid",
    "criticalWeak",
    "criticalSolid"
  ]
};

export const inlineBannerVariantKeys = Object.keys(inlineBannerVariantMap);

export function inlineBanner(props) {
  return Object.fromEntries(
    inlineBannerSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, mergeVariants(defaultVariant, props), compoundVariants),
      ];
    }),
  );
}

Object.assign(inlineBanner, { splitVariantProps: (props) => splitVariantProps(props, inlineBannerVariantMap) });