"use client";

import { LinkInlineBanner } from "seed-design/ui/link-inline-banner";
import { IconExclamationmarkCircleFill } from "@daangn/react-monochrome-icon";

export default function LinkInlineBannerWarningSolid() {
  return (
    <LinkInlineBanner
      linkLabel="자세히 보기"
      onLinkLabelClick={() => window.alert("Hello World")}
      variant="warningSolid"
      icon={<IconExclamationmarkCircleFill />}
    >
      사업자 정보를 등록해주세요.
    </LinkInlineBanner>
  );
}
