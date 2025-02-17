declare interface BadgeVariant {
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
  variant: "weak" | "solid" | "outline";
/**
  * @default neutral
  */
  tone: "neutral" | "brand" | "informative" | "positive" | "critical";
}

declare type BadgeVariantMap = {
  [key in keyof BadgeVariant]: Array<BadgeVariant[key]>;
};

export declare type BadgeVariantProps = Partial<BadgeVariant>;

export declare type BadgeSlotName = "root";

export declare const badgeVariantMap: BadgeVariantMap;

export declare const badge: ((
  props?: BadgeVariantProps,
) => Record<BadgeSlotName, string>) & {
  splitVariantProps: <T extends BadgeVariantProps>(
    props: T,
  ) => [BadgeVariantProps, Omit<T, keyof BadgeVariantProps>];
}