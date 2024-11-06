import { InlineBanner } from "seed-design/ui/inline-banner";
import { IconExclamationmarkCircleFill } from "@daangn/react-monochrome-icon";

export default function InlineBannerInformative() {
  return (
    <InlineBanner tone="informative" prefixIcon={<IconExclamationmarkCircleFill />}>
      사업자 정보를 등록해주세요.
    </InlineBanner>
  );
}
