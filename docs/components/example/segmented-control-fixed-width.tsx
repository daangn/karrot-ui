import { SegmentedControl, SegmentedControlTrigger } from "seed-design/ui/segmented-control";

export default function SegmentedControlFixedWidth() {
  return (
    <SegmentedControl style={{ width: "600px" }} defaultValue="new">
      <SegmentedControlTrigger value="new">New</SegmentedControlTrigger>
      <SegmentedControlTrigger value="hot">Hot</SegmentedControlTrigger>
    </SegmentedControl>
  );
}
