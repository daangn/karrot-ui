import { SegmentedControl, SegmentedControlOption } from "seed-design/ui/segmented-control";

export default function SegmentedControlLongLabel() {
  return (
    <SegmentedControl>
      <SegmentedControlOption value="price">가격 높은 순</SegmentedControlOption>
      <SegmentedControlOption value="discount">할인율 높은 순</SegmentedControlOption>
      <SegmentedControlOption value="popularity">인기 많은 순</SegmentedControlOption>
    </SegmentedControl>
  );
}
