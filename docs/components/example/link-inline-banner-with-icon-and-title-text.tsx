"use client";

import { IconILowercaseSerifCircleFill } from "@daangn/react-monochrome-icon";
import { LinkInlineBanner } from "seed-design/ui/link-inline-banner";

export default function LinkInlineBannerWithIconAndTitleText() {
  return (
    <LinkInlineBanner
      linkLabel="자세히 보기"
      onLinkLabelClick={() => window.alert("Hello World")}
      variant="informativeWeak"
      icon={<IconILowercaseSerifCircleFill />}
      titleText="예약"
    >
      다른 사람과 예약된 물품이 있어요.
    </LinkInlineBanner>
  );
}
