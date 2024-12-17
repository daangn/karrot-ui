interface BadgeVariant {
  size: "medium" | "large";
shape: "rectangle" | "pill";
variant: "weak" | "solid" | "outlined";
tone: "neutral" | "brand" | "informative" | "positive" | "danger";
}

type BadgeVariantMap = {
  [key in keyof BadgeVariant]: Array<BadgeVariant[key]>;
};

export type BadgeVariantProps = Partial<BadgeVariant>;

export type BadgeSlotName = "root" | "label";

export const badgeVariantMap: BadgeVariantMap;

export function badge(
  props?: BadgeVariantProps,
): Record<BadgeSlotName, string>;