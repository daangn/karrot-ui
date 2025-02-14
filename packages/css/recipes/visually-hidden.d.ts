declare interface VisuallyHiddenVariant {
  
}

declare type VisuallyHiddenVariantMap = {
  [key in keyof VisuallyHiddenVariant]: Array<VisuallyHiddenVariant[key]>;
};

export declare type VisuallyHiddenVariantProps = Partial<VisuallyHiddenVariant>;

export declare type VisuallyHiddenSlotName = "root";

export declare const visuallyHiddenVariantMap: VisuallyHiddenVariantMap;

export declare const visuallyHidden: ((
  props?: VisuallyHiddenVariantProps,
) => Record<VisuallyHiddenSlotName, string>) & {
  splitVariantProps: <T extends VisuallyHiddenVariantProps>(
    props: T,
  ) => [VisuallyHiddenVariantProps, Omit<T, keyof VisuallyHiddenVariantProps>];
}