"use client";

import {
  ActionableInlineBanner,
  ActionableInlineBannerLabel,
} from "seed-design/ui/actionable-inline-banner";
import { IconILowercaseSerifCircleFill } from "@daangn/react-monochrome-icon";

export default function ActionableInlineBannerWithIcon() {
  return (
    <ActionableInlineBanner
      onClick={() => window.alert("Hello World")}
      variant="informativeWeak"
      icon={<IconILowercaseSerifCircleFill />}
    >
      <ActionableInlineBannerLabel>다른 사람과 예약된 물품이 있어요.</ActionableInlineBannerLabel>
    </ActionableInlineBanner>
  );
}
