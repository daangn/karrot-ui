declare interface TopNavigationVariant {
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

declare type TopNavigationVariantMap = {
  [key in keyof TopNavigationVariant]: Array<TopNavigationVariant[key]>;
};

export declare type TopNavigationVariantProps = Partial<TopNavigationVariant>;

export declare type TopNavigationSlotName = "root" | "safeArea" | "container" | "left" | "right" | "title" | "titleMain" | "titleEdge" | "titleText" | "iconButton" | "icon";

export declare const topNavigationVariantMap: TopNavigationVariantMap;

export declare const topNavigation: ((
  props?: TopNavigationVariantProps,
) => Record<TopNavigationSlotName, string>) & {
  splitVariantProps: <T extends TopNavigationVariantProps>(
    props: T,
  ) => [TopNavigationVariantProps, Omit<T, keyof TopNavigationVariantProps>];
}