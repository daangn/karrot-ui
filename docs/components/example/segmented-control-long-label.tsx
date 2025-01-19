import { SegmentedControl, SegmentedControlSegment } from "seed-design/ui/segmented-control";

export default function SegmentedControlLongLabel() {
  return (
    <SegmentedControl defaultValue="price" aria-label="정렬 기준">
      <SegmentedControlSegment value="price">가격 높은 순</SegmentedControlSegment>
      <SegmentedControlSegment value="discount">할인율 높은 순</SegmentedControlSegment>
      <SegmentedControlSegment value="popularity">인기 많은 순</SegmentedControlSegment>
    </SegmentedControl>
  );
}
