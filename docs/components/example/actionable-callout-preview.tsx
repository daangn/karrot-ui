"use client";

import { ActionableCallout, ActionableCalloutLabel } from "seed-design/ui/actionable-callout";

export default function ActionableCalloutPreview() {
  const onClick = () => window.alert("Hello World");

  return (
    <div className="flex flex-col gap-3 w-full">
      <ActionableCallout onClick={onClick}>
        <ActionableCalloutLabel>veniam</ActionableCalloutLabel>
      </ActionableCallout>
      <ActionableCallout onClick={onClick}>
        <ActionableCalloutLabel>
          기능에 대한 안내 또는 유익한 내용을 전달해요. 콜아웃은 꼭 필요한 경우에만 절제하여
          사용해요.
        </ActionableCalloutLabel>
      </ActionableCallout>
    </div>
  );
}
