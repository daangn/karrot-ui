interface TabsVariant {
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
  fixTriggerList: true | false;
}

type TabsVariantMap = {
  [key in keyof TabsVariant]: Array<TabsVariant[key]>;
};

export type TabsVariantProps = Partial<TabsVariant>;

export type TabsSlotName = "root" | "triggerList" | "contentList" | "contentCamera" | "content" | "indicator";

export const tabsVariantMap: TabsVariantMap;

export function tabs(
  props?: TabsVariantProps,
): Record<TabsSlotName, string>;