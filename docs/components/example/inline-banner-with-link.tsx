"use client";

import { InlineBanner, InlineBannerLabel, InlineBannerLink } from "seed-design/ui/inline-banner";

export default function InlineBannerWithLink() {
  return (
    <InlineBanner
      variant="informativeWeak"
      suffixElement={<InlineBannerLink onClick={() => {}}>자세히 보기</InlineBannerLink>}
    >
      <InlineBannerLabel>다른 사람과 예약된 물품이 있어요.</InlineBannerLabel>
    </InlineBanner>
  );
}
