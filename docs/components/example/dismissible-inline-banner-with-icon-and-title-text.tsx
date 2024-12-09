import { IconILowercaseSerifCircleFill } from "@daangn/react-monochrome-icon";
import {
  DismissibleInlineBanner,
  InlineBannerDescription,
  InlineBannerTitle,
} from "seed-design/ui/inline-banner";

export default function DismissibleInlineBannerWithIconAndTitleText() {
  return (
    <DismissibleInlineBanner
      dismissAriaLabel="닫기"
      variant="informativeWeak"
      icon={<IconILowercaseSerifCircleFill />}
    >
      <InlineBannerTitle>예약</InlineBannerTitle>
      <InlineBannerDescription>다른 사람과 예약된 물품이 있어요.</InlineBannerDescription>
    </DismissibleInlineBanner>
  );
}
