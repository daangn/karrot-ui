interface SegmentedControlVariant {
  
}

type SegmentedControlVariantMap = {
  [key in keyof SegmentedControlVariant]: Array<SegmentedControlVariant[key]>;
};

export type SegmentedControlVariantProps = Partial<SegmentedControlVariant>;

export type SegmentedControlSlotName = "root" | "segment" | "segmentLabel" | "segmentLabelPlaceholder" | "selectedIndicator";

export const segmentedControlVariantMap: SegmentedControlVariantMap;

export function segmentedControl(
  props?: SegmentedControlVariantProps,
): Record<SegmentedControlSlotName, string>;