"use client";

import { LinkInlineBanner } from "seed-design/ui/link-inline-banner";
import { IconILowercaseSerifCircleFill } from "@daangn/react-monochrome-icon";

export default function LinkInlineBannerWithIcon() {
  return (
    <LinkInlineBanner
      linkLabel="자세히 보기"
      onLinkLabelClick={() => window.alert("Hello World")}
      variant="informativeWeak"
      icon={<IconILowercaseSerifCircleFill />}
    >
      다른 사람과 예약된 물품이 있어요.
    </LinkInlineBanner>
  );
}
