import { IconCalendarFill } from "@daangn/react-monochrome-icon";
import { Callout } from "seed-design/ui/callout";

export default function CalloutWithIcon() {
  return (
    <Callout
      icon={<IconCalendarFill />}
      description="기능에 대한 안내 또는 유익한 내용을 전달해요. 콜아웃은 꼭 필요한 경우에만 절제하여 사용해요."
    />
  );
}
