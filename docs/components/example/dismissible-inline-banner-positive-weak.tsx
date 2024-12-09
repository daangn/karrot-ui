import { DismissibleInlineBanner, InlineBannerDescription } from "seed-design/ui/inline-banner";
import { IconExclamationmarkCircleFill } from "@daangn/react-monochrome-icon";

export default function DismissibleInlineBannerPositiveWeak() {
  return (
    <DismissibleInlineBanner
      dismissAriaLabel="닫기"
      variant="positiveWeak"
      icon={<IconExclamationmarkCircleFill />}
    >
      <InlineBannerDescription>사업자 정보를 등록해주세요.</InlineBannerDescription>
    </DismissibleInlineBanner>
  );
}
