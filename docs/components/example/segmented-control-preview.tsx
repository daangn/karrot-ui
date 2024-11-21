import { SegmentedControl, SegmentedControlOption } from "seed-design/ui/segmented-control";

export default function SegmentedControlPreview() {
  return (
    <SegmentedControl>
      <SegmentedControlOption value="new">New</SegmentedControlOption>
      <SegmentedControlOption value="top">Top</SegmentedControlOption>
      <SegmentedControlOption value="hot">Hot</SegmentedControlOption>
    </SegmentedControl>
  );
}
