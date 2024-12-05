"use client";

import { IconILowercaseSerifCircleFill } from "@daangn/react-monochrome-icon";
import {
  InlineBanner,
  InlineBannerLabel,
  InlineBannerLink,
  InlineBannerTitle,
} from "seed-design/ui/inline-banner";

export default function InlineBannerWithAll() {
  return (
    <InlineBanner
      variant="informativeWeak"
      icon={<IconILowercaseSerifCircleFill />}
      endElement={<InlineBannerLink onClick={() => {}}>자세히 보기</InlineBannerLink>}
    >
      <InlineBannerTitle>예약</InlineBannerTitle>
      <InlineBannerLabel>다른 사람과 예약된 물품이 있어요.</InlineBannerLabel>
    </InlineBanner>
  );
}
