declare interface SwitchVariant {
  /**
  * @default medium
  */
  size: "medium" | "small";
}

declare type SwitchVariantMap = {
  [key in keyof SwitchVariant]: Array<SwitchVariant[key]>;
};

export declare type SwitchVariantProps = Partial<SwitchVariant>;

export declare type SwitchSlotName = "root" | "control" | "thumb";

export declare const switchVariantMap: SwitchVariantMap;

export declare const switchStyle: ((
  props?: SwitchVariantProps,
) => Record<SwitchSlotName, string>) & {
  splitVariantProps: <T extends SwitchVariantProps>(
    props: T,
  ) => [SwitchVariantProps, Omit<T, keyof SwitchVariantProps>];
}