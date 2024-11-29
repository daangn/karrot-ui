import { SegmentedControl, SegmentedControlTrigger } from "seed-design/ui/segmented-control";

export default function SegmentedControlLongLabel() {
  return (
    <SegmentedControl defaultValue="price">
      <SegmentedControlTrigger value="price">가격 높은 순</SegmentedControlTrigger>
      <SegmentedControlTrigger value="discount">할인율 높은 순</SegmentedControlTrigger>
      <SegmentedControlTrigger value="popularity">인기 많은 순</SegmentedControlTrigger>
    </SegmentedControl>
  );
}
