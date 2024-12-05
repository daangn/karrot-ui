import {
  DismissibleInlineBanner,
  DismissibleInlineBannerDescription,
} from "seed-design/ui/dismissible-inline-banner";
import { IconExclamationmarkCircleFill } from "@daangn/react-monochrome-icon";

export default function DismissibleInlineBannerWarningWeak() {
  return (
    <DismissibleInlineBanner
      dismissAriaLabel="닫기"
      variant="warningWeak"
      icon={<IconExclamationmarkCircleFill />}
    >
      <DismissibleInlineBannerDescription>
        사업자 정보를 등록해주세요.
      </DismissibleInlineBannerDescription>
    </DismissibleInlineBanner>
  );
}
