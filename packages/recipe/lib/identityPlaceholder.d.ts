interface IdentityPlaceholderVariant {
  /**
  * @default person
  */
  identity: "person";
}

type IdentityPlaceholderVariantMap = {
  [key in keyof IdentityPlaceholderVariant]: Array<IdentityPlaceholderVariant[key]>;
};

export type IdentityPlaceholderVariantProps = Partial<IdentityPlaceholderVariant>;

export type IdentityPlaceholderSlotName = "root" | "image";

export const identityPlaceholderVariantMap: IdentityPlaceholderVariantMap;

export function identityPlaceholder(
  props?: IdentityPlaceholderVariantProps,
): Record<IdentityPlaceholderSlotName, string>;