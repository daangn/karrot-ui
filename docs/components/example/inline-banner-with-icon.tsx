import { InlineBanner } from "seed-design/ui/inline-banner";
import { IconILowercaseSerifCircleFill } from "@daangn/react-monochrome-icon";

export default function InlineBannerWithIcon() {
  return (
    <InlineBanner tone="informative" variant="weak" prefixIcon={<IconILowercaseSerifCircleFill />}>
      다른 사람과 예약된 물품이 있어요.
    </InlineBanner>
  );
}
