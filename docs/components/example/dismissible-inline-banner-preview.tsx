"use client";

import {
  DismissibleInlineBanner,
  DismissibleInlineBannerDescription,
} from "seed-design/ui/dismissible-inline-banner";

export default function DismissibleInlineBannerPreview() {
  const onDismiss = () => window.alert("닫기 버튼 클릭");

  return (
    <div className="flex flex-col gap-3 w-full">
      <DismissibleInlineBanner dismissAriaLabel="닫기" onDismiss={onDismiss}>
        <DismissibleInlineBannerDescription>ullamco</DismissibleInlineBannerDescription>
      </DismissibleInlineBanner>
      <DismissibleInlineBanner dismissAriaLabel="닫기" onDismiss={onDismiss}>
        <DismissibleInlineBannerDescription>
          Ut veniam in ea ea anim laborum magna dolore ea laborum duis ut aute mollit amet.
        </DismissibleInlineBannerDescription>
      </DismissibleInlineBanner>
    </div>
  );
}
