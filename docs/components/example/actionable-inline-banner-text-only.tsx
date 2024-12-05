"use client";

import {
  ActionableInlineBanner,
  ActionableInlineBannerDescription,
} from "seed-design/ui/actionable-inline-banner";

export default function ActionableInlineBannerTextOnly() {
  return (
    <ActionableInlineBanner variant="informativeWeak" onClick={() => window.alert("Hello World")}>
      <ActionableInlineBannerDescription>
        다른 사람과 예약된 물품이 있
      </ActionableInlineBannerDescription>
      어요.
    </ActionableInlineBanner>
  );
}
