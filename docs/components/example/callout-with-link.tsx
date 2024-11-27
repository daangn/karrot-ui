"use client";

import { Callout } from "seed-design/ui/callout";

export default function CalloutWithLink() {
  return (
    <Callout
      variant="magic"
      linkLabel="시도해 보기"
      onLinkLabelClick={() => window.alert("Hello World")}
    >
      Aliquip laboris excepteur enim sunt eiusmod laboris anim.
    </Callout>
  );
}
