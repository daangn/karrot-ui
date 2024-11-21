"use client";

import { IconILowercaseSerifCircleFill } from "@daangn/react-monochrome-icon";
import { InlineBanner } from "seed-design/ui/inline-banner";

export default function InlineBannerWithAll() {
  return (
    <InlineBanner
      variant="informativeWeak"
      icon={<IconILowercaseSerifCircleFill />}
      titleText="예약"
      link={{ label: "자세히 보기", onClick: () => {} }}
    >
      다른 사람과 예약된 물품이 있어요.
    </InlineBanner>
  );
}
