import { SegmentedControl, SegmentedControlOption } from "seed-design/ui/segmented-control";

export default function SegmentedControlFixedWidth() {
  return (
    <SegmentedControl style={{ width: "600px" }}>
      <SegmentedControlOption value="new">New</SegmentedControlOption>
      <SegmentedControlOption value="hot">Hot</SegmentedControlOption>
    </SegmentedControl>
  );
}
