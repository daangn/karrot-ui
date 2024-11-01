"use client";

import { useRef } from "react";
import { InlineBanner } from "seed-design/ui/inline-banner";
import { IconExclamationmarkCircleFill } from "@daangn/react-monochrome-icon";

export default function InlineBannerLink() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <InlineBanner
      ref={ref}
      tone="warning"
      variant="weak"
      onXIconClick={() => ref.current?.remove()}
      prefixIcon={<IconExclamationmarkCircleFill />}
    >
      사업자 정보를 등록해주세요.
    </InlineBanner>
  );
}
