"use client";

import { Callout, CalloutDescription, CalloutLink } from "seed-design/ui/callout";

export default function CalloutWithLink() {
  return (
    <Callout variant="magic">
      <CalloutDescription>
        Aliquip laboris excepteur enim sunt eiusmod laboris anim.
      </CalloutDescription>
      <CalloutLink onClick={() => window.alert("Hello World")}>시도해 보기</CalloutLink>
    </Callout>
  );
}
