import { createClassName } from "./className.mjs";

const identityPlaceholderSlotNames = [
  [
    "root",
    "identityPlaceholder__root"
  ],
  [
    "image",
    "identityPlaceholder__image"
  ]
];

const defaultVariant = {};

const compoundVariants = [];

export const identityPlaceholderVariantMap = {
  "identity": [
    "person"
  ]
};

export const identityPlaceholderVariantKeys = Object.keys(identityPlaceholderVariantMap);

export function identityPlaceholder(props) {
  return Object.fromEntries(
    identityPlaceholderSlotNames.map(([slot, className]) => {
      return [
        slot,
        createClassName(className, { ...defaultVariant, ...props }, compoundVariants),
      ];
    }),
  );
}