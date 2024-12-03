import { SegmentedControl, Segment } from "seed-design/ui/segmented-control";

export default function SegmentedControlPreview() {
  return (
    <SegmentedControl defaultValue="Hot">
      <Segment value="Hot">Hot</Segment>
      <Segment value="New">New</Segment>
    </SegmentedControl>
  );
}
