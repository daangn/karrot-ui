import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";

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

const defaultVariant = {
  "identity": "person"
};

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
        createClassName(className, mergeVariants(defaultVariant, props), compoundVariants),
      ];
    }),
  );
}