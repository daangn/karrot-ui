import { SegmentedControl, SegmentedControlSegment } from "seed-design/ui/segmented-control";

export default function SegmentedControlPreview() {
  return (
    <SegmentedControl defaultValue="Hot" aria-label="Sort by">
      <SegmentedControlSegment value="Hot">Hot</SegmentedControlSegment>
      <SegmentedControlSegment value="New">New</SegmentedControlSegment>
    </SegmentedControl>
  );
}
