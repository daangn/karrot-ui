"use client";

import { DismissibleCallout, CalloutDescription } from "seed-design/ui/callout";

export default function DismissibleCalloutPreview() {
  const onDismiss = () => window.alert("닫기 버튼 클릭");

  return (
    <div className="flex flex-col gap-3 w-full">
      <DismissibleCallout dismissAriaLabel="닫기" onDismiss={onDismiss}>
        <CalloutDescription>veniam</CalloutDescription>
      </DismissibleCallout>
      <DismissibleCallout dismissAriaLabel="닫기" onDismiss={onDismiss}>
        <CalloutDescription>
          기능에 대한 안내 또는 유익한 내용을 전달해요. 콜아웃은 꼭 필요한 경우에만 절제하여
          사용해요.
        </CalloutDescription>
      </DismissibleCallout>
    </div>
  );
}
