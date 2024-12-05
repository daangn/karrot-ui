"use client";

import {
  ActionableInlineBanner,
  ActionableInlineBannerDescription,
} from "seed-design/ui/actionable-inline-banner";
import { IconExclamationmarkCircleFill } from "@daangn/react-monochrome-icon";

export default function ActionableInlineBannerNeutralWeak() {
  return (
    <ActionableInlineBanner
      onClick={() => window.alert("Hello World")}
      variant="neutralWeak"
      icon={<IconExclamationmarkCircleFill />}
    >
      <ActionableInlineBannerDescription>
        사업자 정보를 등록해주세요.
      </ActionableInlineBannerDescription>
    </ActionableInlineBanner>
  );
}
