"use client";

import {
  ActionableInlineBanner,
  DismissibleInlineBanner,
  InlineBanner,
  LinkInlineBanner,
} from "seed-design/ui/inline-banner";
import { IconBellFill } from "@daangn/react-monochrome-icon";

export default function InlineBannerNeutralWeak() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <InlineBanner
        variant="neutralWeak"
        icon={<IconBellFill />}
        description="사업자 정보를 등록해주세요."
      />
      <LinkInlineBanner
        variant="neutralWeak"
        icon={<IconBellFill />}
        description="사업자 정보를 등록해주세요."
        linkLabel="자세히보기"
      />
      <ActionableInlineBanner
        variant="neutralWeak"
        icon={<IconBellFill />}
        description="사업자 정보를 등록해주세요."
      />
      <DismissibleInlineBanner
        variant="neutralWeak"
        icon={<IconBellFill />}
        description="사업자 정보를 등록해주세요."
      />
    </div>
  );
}
