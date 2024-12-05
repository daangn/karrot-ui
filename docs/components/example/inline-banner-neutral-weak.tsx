import { InlineBanner, InlineBannerLabel } from "seed-design/ui/inline-banner";
import { IconExclamationmarkCircleFill } from "@daangn/react-monochrome-icon";

export default function InlineBannerNeutralWeak() {
  return (
    <InlineBanner variant="neutralWeak" icon={<IconExclamationmarkCircleFill />}>
      <InlineBannerLabel>사업자 정보를 등록해주세요.</InlineBannerLabel>
    </InlineBanner>
  );
}
