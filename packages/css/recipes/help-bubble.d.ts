declare interface HelpBubbleVariant {
  
}

declare type HelpBubbleVariantMap = {
  [key in keyof HelpBubbleVariant]: Array<HelpBubbleVariant[key]>;
};

export declare type HelpBubbleVariantProps = Partial<HelpBubbleVariant>;

export declare type HelpBubbleSlotName = "positioner" | "backdrop" | "content" | "arrow" | "title" | "description" | "closeButton" | "closeIcon";

export declare const helpBubbleVariantMap: HelpBubbleVariantMap;

export declare const helpBubble: ((
  props?: HelpBubbleVariantProps,
) => Record<HelpBubbleSlotName, string>) & {
  splitVariantProps: <T extends HelpBubbleVariantProps>(
    props: T,
  ) => [HelpBubbleVariantProps, Omit<T, keyof HelpBubbleVariantProps>];
}