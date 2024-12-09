"use client";

import { DismissibleCallout, CalloutDescription, CalloutLink } from "seed-design/ui/callout";

export default function DismissibleCalloutWithLink() {
  return (
    <DismissibleCallout dismissAriaLabel="닫기" variant="magic">
      <CalloutDescription>
        Aliquip laboris excepteur enim sunt eiusmod laboris anim.
      </CalloutDescription>
      <CalloutLink onClick={() => window.alert("Hello World")}>시도해 보기</CalloutLink>
    </DismissibleCallout>
  );
}
