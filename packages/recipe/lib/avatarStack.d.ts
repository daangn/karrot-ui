interface AvatarStackVariant {
  size: "20" | "24" | "36" | "48" | "64";
}

type AvatarStackVariantMap = {
  [key in keyof AvatarStackVariant]: Array<AvatarStackVariant[key]>;
};

export type AvatarStackVariantProps = Partial<AvatarStackVariant>;

export type AvatarStackSlotName = "root" | "item";

export const avatarStackVariantMap: AvatarStackVariantMap;

export function avatarStack(
  props?: AvatarStackVariantProps,
): Record<AvatarStackSlotName, string>;