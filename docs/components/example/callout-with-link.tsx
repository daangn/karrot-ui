"use client";

import { Callout, CalloutLabel, CalloutLink } from "seed-design/ui/callout";

export default function CalloutWithLink() {
  return (
    <Callout variant="magic">
      <CalloutLabel>Aliquip laboris excepteur enim sunt eiusmod laboris anim.</CalloutLabel>
      <CalloutLink onClick={() => window.alert("Hello World")}>시도해 보기</CalloutLink>
    </Callout>
  );
}
