interface BadgeVariant {
  /**
  * @default medium
  */
  size: "medium" | "large";
/**
  * @default rectangle
  */
  shape: "rectangle" | "pill";
/**
  * @default solid
  */
  variant: "weak" | "solid" | "outlined";
/**
  * @default neutral
  */
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