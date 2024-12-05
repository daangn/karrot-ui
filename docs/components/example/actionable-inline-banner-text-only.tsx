"use client";

import {
  ActionableInlineBanner,
  ActionableInlineBannerLabel,
} from "seed-design/ui/actionable-inline-banner";

export default function ActionableInlineBannerTextOnly() {
  return (
    <ActionableInlineBanner variant="informativeWeak" onClick={() => window.alert("Hello World")}>
      <ActionableInlineBannerLabel>다른 사람과 예약된 물품이 있</ActionableInlineBannerLabel>어요.
    </ActionableInlineBanner>
  );
}
