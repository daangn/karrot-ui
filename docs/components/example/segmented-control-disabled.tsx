import { SegmentedControl, Segment } from "seed-design/ui/segmented-control";

export default function SegmentedControlPreview() {
  return (
    <SegmentedControl defaultValue="Hot" disabled>
      <Segment value="Hot">Hot</Segment>
      <Segment value="New">New</Segment>
    </SegmentedControl>
  );
}
