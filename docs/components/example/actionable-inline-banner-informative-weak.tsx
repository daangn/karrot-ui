"use client";

import {
  ActionableInlineBanner,
  ActionableInlineBannerLabel,
} from "seed-design/ui/actionable-inline-banner";
import { IconExclamationmarkCircleFill } from "@daangn/react-monochrome-icon";

export default function ActionableInlineBannerInformativeWeak() {
  return (
    <ActionableInlineBanner
      onClick={() => window.alert("Hello World")}
      variant="informativeWeak"
      icon={<IconExclamationmarkCircleFill />}
    >
      <ActionableInlineBannerLabel>사업자 정보를 등록해주세요.</ActionableInlineBannerLabel>
    </ActionableInlineBanner>
  );
}
