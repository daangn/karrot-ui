interface SegmentedControlVariant {
  
}

type SegmentedControlVariantMap = {
  [key in keyof SegmentedControlVariant]: Array<SegmentedControlVariant[key]>;
};

export type SegmentedControlVariantProps = Partial<SegmentedControlVariant>;

export type SegmentedControlSlotName = "root" | "option" | "indicator";

export const segmentedControlVariantMap: SegmentedControlVariantMap;

export function segmentedControl(
  props?: SegmentedControlVariantProps,
): Record<SegmentedControlSlotName, string>;