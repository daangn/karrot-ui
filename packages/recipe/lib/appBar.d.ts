declare interface AppBarVariant {
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

declare type AppBarVariantMap = {
  [key in keyof AppBarVariant]: Array<AppBarVariant[key]>;
};

export declare type AppBarVariantProps = Partial<AppBarVariant>;

export declare type AppBarSlotName = "root" | "safeArea" | "container" | "left" | "right" | "title" | "titleMain" | "titleEdge" | "titleText" | "iconButton" | "icon";

export declare const appBarVariantMap: AppBarVariantMap;

export declare const appBar: ((
  props?: AppBarVariantProps,
) => Record<AppBarSlotName, string>) & {
  splitVariantProps: <T extends AppBarVariantProps>(
    props: T,
  ) => [AppBarVariantProps, Omit<T, keyof AppBarVariantProps>];
}