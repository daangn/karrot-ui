"use client";

import { InlineBanner, InlineBannerLabel, InlineBannerLink } from "seed-design/ui/inline-banner";

export default function InlineBannerWithLinkAsChild() {
  return (
    <InlineBanner
      variant="informativeWeak"
      endElement={
        <InlineBannerLink asChild>
          <a href="https://www.daangn.com" target="_blank" rel="noreferrer">
            자세히 보기
          </a>
        </InlineBannerLink>
      }
    >
      <InlineBannerLabel>다른 사람과 예약된 물품이 있어요.</InlineBannerLabel>
    </InlineBanner>
  );
}
