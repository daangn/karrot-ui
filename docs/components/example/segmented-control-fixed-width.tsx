import { SegmentedControl, Segment } from "seed-design/ui/segmented-control";

export default function SegmentedControlFixedWidth() {
  return (
    <SegmentedControl defaultValue="new">
      <Segment value="new">New</Segment>
      <Segment value="hot">Hot</Segment>
    </SegmentedControl>
  );
}
