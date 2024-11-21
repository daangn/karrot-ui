"use client";

import { InlineBanner } from "seed-design/ui/inline-banner";

export default function InlineBannerWithLink() {
  return (
    <InlineBanner variant="informativeWeak" link={{ label: "자세히 보기", onClick: () => {} }}>
      다른 사람과 예약된 물품이 있어요.
    </InlineBanner>
  );
}
