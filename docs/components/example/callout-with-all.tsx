import { IconCalendarFill } from "@daangn/react-monochrome-icon";
import { Callout } from "seed-design/ui/callout";

export default function CalloutWithAll() {
  return (
    <Callout
      title="타이틀"
      prefixIcon={<IconCalendarFill />}
      description="기능에 대한 안내 또는 유익한 내용을 전달해요. 콜아웃은 꼭 필요한 경우에만 절제하여 사용해요."
      linkProps={{ children: "시도해 보기" }}
    />
  );
}
