"use client";

import { ActionableInlineBanner } from "seed-design/ui/actionable-inline-banner";

export default function ActionableInlineBannerTextOnly() {
  return (
    <ActionableInlineBanner variant="informativeWeak" onClick={() => window.alert("Hello World")}>
      다른 사람과 예약된 물품이 있어요.
    </ActionableInlineBanner>
  );
}
