"use client";

import { IconILowercaseSerifCircleFill } from "@daangn/react-monochrome-icon";
import {
  ActionableInlineBanner,
  InlineBannerDescription,
  InlineBannerTitle,
} from "seed-design/ui/inline-banner";

export default function ActionableInlineBannerWithIconAndTitleText() {
  return (
    <ActionableInlineBanner
      onClick={() => window.alert("Hello World")}
      variant="informativeWeak"
      icon={<IconILowercaseSerifCircleFill />}
    >
      <InlineBannerTitle>예약</InlineBannerTitle>
      <InlineBannerDescription>다른 사람과 예약된 물품이 있어요.</InlineBannerDescription>
    </ActionableInlineBanner>
  );
}
