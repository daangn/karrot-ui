declare interface TabVariant {
  /**
  * @default hug
  */
  layout: "fill" | "hug";
/**
  * @default medium
  */
  size: "medium" | "small";
}

declare type TabVariantMap = {
  [key in keyof TabVariant]: Array<TabVariant[key]>;
};

export declare type TabVariantProps = Partial<TabVariant>;

export declare type TabSlotName = "root" | "label" | "notification";

export declare const tabVariantMap: TabVariantMap;

export declare const tab: ((
  props?: TabVariantProps,
) => Record<TabSlotName, string>) & {
  splitVariantProps: <T extends TabVariantProps>(
    props: T,
  ) => [TabVariantProps, Omit<T, keyof TabVariantProps>];
}