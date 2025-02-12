import { createClassName } from "./className.mjs";
import { mergeVariants } from "./mergeVariants.mjs";
import { splitVariantProps } from "./splitVariantProps.mjs";

const identityPlaceholderSlotNames = [
  [
    "root",
    "seed-identity-placeholder__root"
  ],
  [
    "image",
    "seed-identity-placeholder__image"
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

Object.assign(identityPlaceholder, { splitVariantProps: (props) => splitVariantProps(props, identityPlaceholderVariantMap) });