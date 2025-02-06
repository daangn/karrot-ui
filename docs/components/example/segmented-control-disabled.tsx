import { SegmentedControl, SegmentedControlItem } from "seed-design/ui/segmented-control";

export default function SegmentedControlPreview() {
  return (
    <SegmentedControl defaultValue="Hot" disabled aria-label="Sort by">
      <SegmentedControlItem value="Hot">Hot</SegmentedControlItem>
      <SegmentedControlItem value="New">New</SegmentedControlItem>
    </SegmentedControl>
  );
}
