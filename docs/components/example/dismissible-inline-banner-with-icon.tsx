import { DismissibleInlineBanner, InlineBannerDescription } from "seed-design/ui/inline-banner";
import { IconILowercaseSerifCircleFill } from "@daangn/react-monochrome-icon";

export default function DismissibleInlineBannerWithIcon() {
  return (
    <DismissibleInlineBanner
      dismissAriaLabel="닫기"
      variant="informativeWeak"
      icon={<IconILowercaseSerifCircleFill />}
    >
      <InlineBannerDescription>다른 사람과 예약된 물품이 있어요.</InlineBannerDescription>
    </DismissibleInlineBanner>
  );
}
