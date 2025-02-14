declare interface ReactionButtonVariant {
  /**
  * @default small
  */
  size: "xsmall" | "small";
}

declare type ReactionButtonVariantMap = {
  [key in keyof ReactionButtonVariant]: Array<ReactionButtonVariant[key]>;
};

export declare type ReactionButtonVariantProps = Partial<ReactionButtonVariant>;

export declare type ReactionButtonSlotName = "root";

export declare const reactionButtonVariantMap: ReactionButtonVariantMap;

export declare const reactionButton: ((
  props?: ReactionButtonVariantProps,
) => Record<ReactionButtonSlotName, string>) & {
  splitVariantProps: <T extends ReactionButtonVariantProps>(
    props: T,
  ) => [ReactionButtonVariantProps, Omit<T, keyof ReactionButtonVariantProps>];
}