import { createClassName } from "./className.mjs";

const actionableInlineBannerSlotNames = [
  [
    "root",
    "actionableInlineBanner__root"
  ],
  [
    "content",
    "actionableInlineBanner__content"
  ],
  [
    "icon",
    "actionableInlineBanner__icon"
  ],
  [
    "title",
    "actionableInlineBanner__title"
  ],
  [
    "spacer",
    "actionableInlineBanner__spacer"
  ],
  [
    "label",
    "actionableInlineBanner__label"
  ],
  [
    "chevronRightIcon",
    "actionableInlineBanner__chevronRightIcon"
  ]
];

const defaultVariant = {
  "variant": "neutralWeak"
};

const compoundVariants = [];

export const actionableInlineBannerVariantMap = {
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

export const actionableInlineBannerVariantKeys = Object.keys(actionableInlineBannerVariantMap);

export function actionableInlineBanner(props) {
  return Object.fromEntries(
    actionableInlineBannerSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, { ...defaultVariant, ...props }, compoundVariants),
      ];
    }),
  );
}