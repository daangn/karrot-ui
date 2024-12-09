"use client";

import { ActionableCallout, CalloutDescription } from "seed-design/ui/callout";

export default function ActionableCalloutPreview() {
  const onClick = () => window.alert("Hello World");

  return (
    <div className="flex flex-col gap-3 w-full">
      <ActionableCallout onClick={onClick}>
        <CalloutDescription>veniam</CalloutDescription>
      </ActionableCallout>
      <ActionableCallout onClick={onClick}>
        <CalloutDescription>
          기능에 대한 안내 또는 유익한 내용을 전달해요. 콜아웃은 꼭 필요한 경우에만 절제하여
          사용해요.
        </CalloutDescription>
      </ActionableCallout>
    </div>
  );
}
