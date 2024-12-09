"use client";

import { DismissibleCallout, CalloutDescription, CalloutLink } from "seed-design/ui/callout";

export default function DismissibleCalloutWithLink() {
  return (
    <DismissibleCallout dismissAriaLabel="닫기" variant="magic">
      <CalloutDescription>
        Aliquip laboris excepteur enim sunt eiusmod laboris anim.
      </CalloutDescription>
      <CalloutLink asChild>
        <a href="https://www.daangn.com" target="_blank" rel="noreferrer">
          시도해 보기
        </a>
      </CalloutLink>
    </DismissibleCallout>
  );
}
