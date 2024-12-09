"use client";

import { ActionableInlineBanner, InlineBannerDescription } from "seed-design/ui/inline-banner";
import { IconExclamationmarkCircleFill } from "@daangn/react-monochrome-icon";

export default function ActionableInlineBannerPositiveWeak() {
  return (
    <ActionableInlineBanner
      onClick={() => window.alert("Hello World")}
      variant="positiveWeak"
      icon={<IconExclamationmarkCircleFill />}
    >
      <InlineBannerDescription>사업자 정보를 등록해주세요.</InlineBannerDescription>
    </ActionableInlineBanner>
  );
}
