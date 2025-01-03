declare interface ScreenVariant {
  /**
  * @default cupertino
  */
  theme: "cupertino" | "android";
/**
  * @default false
  */
  hasAppBar: boolean;
}

declare type ScreenVariantMap = {
  [key in keyof ScreenVariant]: Array<ScreenVariant[key]>;
};

export declare type ScreenVariantProps = Partial<ScreenVariant>;

export declare type ScreenSlotName = "root" | "layer" | "dim" | "edge";

export declare const screenVariantMap: ScreenVariantMap;

export declare const screen: ((
  props?: ScreenVariantProps,
) => Record<ScreenSlotName, string>) & {
  splitVariantProps: <T extends ScreenVariantProps>(
    props: T,
  ) => [ScreenVariantProps, Omit<T, keyof ScreenVariantProps>];
}