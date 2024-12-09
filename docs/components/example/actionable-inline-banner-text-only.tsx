"use client";

import { ActionableInlineBanner, InlineBannerDescription } from "seed-design/ui/inline-banner";

export default function ActionableInlineBannerTextOnly() {
  return (
    <ActionableInlineBanner variant="informativeWeak" onClick={() => window.alert("Hello World")}>
      <InlineBannerDescription>다른 사람과 예약된 물품이 있</InlineBannerDescription>
      어요.
    </ActionableInlineBanner>
  );
}
