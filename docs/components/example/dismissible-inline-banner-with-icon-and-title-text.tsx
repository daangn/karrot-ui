import { IconILowercaseSerifCircleFill } from "@daangn/react-monochrome-icon";
import { DismissibleInlineBanner } from "seed-design/ui/dismissible-inline-banner";

export default function DismissibleInlineBannerWithIconAndTitleText() {
  return (
    <DismissibleInlineBanner
      dismissAriaLabel="닫기"
      variant="informativeWeak"
      icon={<IconILowercaseSerifCircleFill />}
      titleText="예약"
    >
      다른 사람과 예약된 물품이 있어요.
    </DismissibleInlineBanner>
  );
}
