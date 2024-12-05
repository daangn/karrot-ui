import { InlineBanner, InlineBannerDescription } from "seed-design/ui/inline-banner";
import { IconExclamationmarkCircleFill } from "@daangn/react-monochrome-icon";

export default function InlineBannerWarningWeak() {
  return (
    <InlineBanner variant="warningWeak" icon={<IconExclamationmarkCircleFill />}>
      <InlineBannerDescription>사업자 정보를 등록해주세요.</InlineBannerDescription>
    </InlineBanner>
  );
}
