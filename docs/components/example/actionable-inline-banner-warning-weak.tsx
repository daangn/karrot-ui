"use client";

import { ActionableInlineBanner } from "seed-design/ui/actionable-inline-banner";
import { IconExclamationmarkCircleFill } from "@daangn/react-monochrome-icon";

export default function ActionableInlineBannerWarningWeak() {
  return (
    <ActionableInlineBanner
      onClick={() => window.alert("Hello World")}
      variant="warningWeak"
      icon={<IconExclamationmarkCircleFill />}
    >
      사업자 정보를 등록해주세요.
    </ActionableInlineBanner>
  );
}
