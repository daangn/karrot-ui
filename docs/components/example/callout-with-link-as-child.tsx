"use client";

import { Callout, CalloutDescription, CalloutLink } from "seed-design/ui/callout";

export default function CalloutWithLink() {
  return (
    <Callout variant="magic">
      <CalloutDescription>
        Aliquip laboris excepteur enim sunt eiusmod laboris anim.
      </CalloutDescription>
      <CalloutLink asChild>
        <a href="https://www.daangn.com" target="_blank" rel="noreferrer">
          시도해 보기
        </a>
      </CalloutLink>
    </Callout>
  );
}
