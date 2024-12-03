import { SegmentedControl, Segment } from "seed-design/ui/segmented-control";

export default function SegmentedControlLongLabelFixedWidth() {
  return (
    <SegmentedControl defaultValue="price">
      <Segment value="price">가격 높은 순</Segment>
      <Segment value="discount">할인율 높은 순</Segment>
      <Segment value="popularity">인기 많은 순</Segment>
    </SegmentedControl>
  );
}
