"use client";

import {
  DismissibleCallout,
  CalloutDescription,
  CalloutLink,
  CalloutTitle,
} from "seed-design/ui/callout";

export default function DismissibleCalloutWithAll() {
  return (
    <DismissibleCallout dismissAriaLabel="닫기" variant="magic">
      <CalloutTitle>새로운 기능</CalloutTitle>
      <CalloutDescription>
        Aliquip laboris excepteur enim sunt eiusmod laboris anim.
      </CalloutDescription>
      <CalloutLink onClick={() => window.alert("Hello World")}>시도해 보기</CalloutLink>
    </DismissibleCallout>
  );
}
