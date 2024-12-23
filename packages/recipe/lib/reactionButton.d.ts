interface ReactionButtonVariant {
  /**
  * @default small
  */
  size: "xsmall" | "small";
}

type ReactionButtonVariantMap = {
  [key in keyof ReactionButtonVariant]: Array<ReactionButtonVariant[key]>;
};

export type ReactionButtonVariantProps = Partial<ReactionButtonVariant>;

export type ReactionButtonSlotName = "root" | "label" | "count" | "prefixIcon" | "progressCircle";

export const reactionButtonVariantMap: ReactionButtonVariantMap;

export function reactionButton(
  props?: ReactionButtonVariantProps,
): Record<ReactionButtonSlotName, string>;