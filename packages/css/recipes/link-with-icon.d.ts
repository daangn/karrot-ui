declare interface LinkWithIconVariant {
  /**
  * @default t6
  */
  size: "t6" | "t5" | "t4";
}

declare type LinkWithIconVariantMap = {
  [key in keyof LinkWithIconVariant]: Array<LinkWithIconVariant[key]>;
};

export declare type LinkWithIconVariantProps = Partial<LinkWithIconVariant>;

export declare type LinkWithIconSlotName = "root";

export declare const linkWithIconVariantMap: LinkWithIconVariantMap;

export declare const linkWithIcon: ((
  props?: LinkWithIconVariantProps,
) => Record<LinkWithIconSlotName, string>) & {
  splitVariantProps: <T extends LinkWithIconVariantProps>(
    props: T,
  ) => [LinkWithIconVariantProps, Omit<T, keyof LinkWithIconVariantProps>];
}