import { SegmentedControl, SegmentedControlTrigger } from "seed-design/ui/segmented-control";

export default function SegmentedControlPreview() {
  return (
    <SegmentedControl>
      <SegmentedControlTrigger value="Hot">Hot</SegmentedControlTrigger>
      <SegmentedControlTrigger value="New">New</SegmentedControlTrigger>
    </SegmentedControl>
  );
}
