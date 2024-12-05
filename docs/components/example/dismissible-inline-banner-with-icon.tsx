import {
  DismissibleInlineBanner,
  DismissibleInlineBannerLabel,
} from "seed-design/ui/dismissible-inline-banner";
import { IconILowercaseSerifCircleFill } from "@daangn/react-monochrome-icon";

export default function DismissibleInlineBannerWithIcon() {
  return (
    <DismissibleInlineBanner
      dismissAriaLabel="닫기"
      variant="informativeWeak"
      icon={<IconILowercaseSerifCircleFill />}
    >
      <DismissibleInlineBannerLabel>다른 사람과 예약된 물품이 있어요.</DismissibleInlineBannerLabel>
    </DismissibleInlineBanner>
  );
}
