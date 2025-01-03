declare interface TabsVariant {
  /**
  * @default hug
  */
  layout: "fill" | "hug";
/**
  * @default small
  */
  size: "small" | "medium";
/**
  * @default false
  */
  fixTriggerList: boolean;
}

declare type TabsVariantMap = {
  [key in keyof TabsVariant]: Array<TabsVariant[key]>;
};

export declare type TabsVariantProps = Partial<TabsVariant>;

export declare type TabsSlotName = "root" | "triggerList" | "contentList" | "contentCamera" | "content" | "indicator";

export declare const tabsVariantMap: TabsVariantMap;

export declare const tabs: ((
  props?: TabsVariantProps,
) => Record<TabsSlotName, string>) & {
  splitVariantProps: <T extends TabsVariantProps>(
    props: T,
  ) => [TabsVariantProps, Omit<T, keyof TabsVariantProps>];
}