import { SegmentedControl, SegmentedControlItem } from "seed-design/ui/segmented-control";

export default function SegmentedControlFixedWidth() {
  return (
    <SegmentedControl defaultValue="new" style={{ width: "600px" }} aria-label="Sort by">
      <SegmentedControlItem value="new">New</SegmentedControlItem>
      <SegmentedControlItem value="hot">Hot</SegmentedControlItem>
    </SegmentedControl>
  );
}
