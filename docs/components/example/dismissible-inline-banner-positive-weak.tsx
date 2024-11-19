import { DismissibleInlineBanner } from "seed-design/ui/dismissible-inline-banner";
import { IconExclamationmarkCircleFill } from "@daangn/react-monochrome-icon";

export default function DismissibleInlineBannerPositiveWeak() {
  return (
    <DismissibleInlineBanner
      dismissAriaLabel="닫기"
      variant="positiveWeak"
      icon={<IconExclamationmarkCircleFill />}
    >
      사업자 정보를 등록해주세요.
    </DismissibleInlineBanner>
  );
}
