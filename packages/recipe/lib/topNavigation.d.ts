interface TopNavigationVariant {
  /**
  * @default cupertino
  */
  theme: "cupertino" | "android";
/**
  * @default layer
  */
  tone: "layer" | "transparent";
/**
  * @default false
  */
  border: boolean;
}

type TopNavigationVariantMap = {
  [key in keyof TopNavigationVariant]: Array<TopNavigationVariant[key]>;
};

export type TopNavigationVariantProps = Partial<TopNavigationVariant>;

export type TopNavigationSlotName = "root" | "safeArea" | "container" | "left" | "right" | "title" | "titleMain" | "titleEdge" | "titleText" | "iconButton" | "icon";

export const topNavigationVariantMap: TopNavigationVariantMap;

export function topNavigation(
  props?: TopNavigationVariantProps,
): Record<TopNavigationSlotName, string>;