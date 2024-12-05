"use client";

import { IconILowercaseSerifCircleFill } from "@daangn/react-monochrome-icon";
import {
  ActionableInlineBanner,
  ActionableInlineBannerDescription,
  ActionableInlineBannerTitle,
} from "seed-design/ui/actionable-inline-banner";

export default function ActionableInlineBannerWithIconAndTitleText() {
  return (
    <ActionableInlineBanner
      onClick={() => window.alert("Hello World")}
      variant="informativeWeak"
      icon={<IconILowercaseSerifCircleFill />}
    >
      <ActionableInlineBannerTitle>예약</ActionableInlineBannerTitle>
      <ActionableInlineBannerDescription>
        다른 사람과 예약된 물품이 있어요.
      </ActionableInlineBannerDescription>
    </ActionableInlineBanner>
  );
}
