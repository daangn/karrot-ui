import { SegmentedControl, SegmentedControlSegment } from "seed-design/ui/segmented-control";

export default function SegmentedControlFixedWidth() {
  return (
    <SegmentedControl defaultValue="new" style={{ width: "600px" }} aria-label="Sort by">
      <SegmentedControlSegment value="new">New</SegmentedControlSegment>
      <SegmentedControlSegment value="hot">Hot</SegmentedControlSegment>
    </SegmentedControl>
  );
}
