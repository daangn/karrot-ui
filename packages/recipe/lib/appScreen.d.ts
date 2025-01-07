declare interface AppScreenVariant {
  /**
  * @default cupertino
  */
  theme: "cupertino" | "android";
/**
  * @default slideFromRightIOS
  */
  transitionStyle: "slideFromRightIOS" | "fadeFromBottomAndroid";
/**
  * @default false
  */
  hasAppBar: boolean;
}

declare type AppScreenVariantMap = {
  [key in keyof AppScreenVariant]: Array<AppScreenVariant[key]>;
};

export declare type AppScreenVariantProps = Partial<AppScreenVariant>;

export declare type AppScreenSlotName = "root" | "layer" | "dim" | "edge";

export declare const appScreenVariantMap: AppScreenVariantMap;

export declare const appScreen: ((
  props?: AppScreenVariantProps,
) => Record<AppScreenSlotName, string>) & {
  splitVariantProps: <T extends AppScreenVariantProps>(
    props: T,
  ) => [AppScreenVariantProps, Omit<T, keyof AppScreenVariantProps>];
}