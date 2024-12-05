"use client";

import {
  InlineBanner,
  InlineBannerDescription,
  InlineBannerLink,
} from "seed-design/ui/inline-banner";

export default function InlineBannerWithLink() {
  return (
    <InlineBanner
      variant="informativeWeak"
      suffix={<InlineBannerLink onClick={() => {}}>자세히 보기</InlineBannerLink>}
    >
      <InlineBannerDescription>다른 사람과 예약된 물품이 있어요.</InlineBannerDescription>
    </InlineBanner>
  );
}
