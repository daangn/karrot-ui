"use client";

import { IconSparkle2Fill } from "@daangn/react-monochrome-icon";
import { Callout, CalloutLabel, CalloutLink, CalloutTitle } from "seed-design/ui/callout";

export default function CalloutWithAll() {
  return (
    <Callout variant="magic" icon={<IconSparkle2Fill />}>
      <CalloutTitle>새로운 기능</CalloutTitle>
      <CalloutLabel>Aliquip laboris excepteur enim sunt eiusmod laboris anim.</CalloutLabel>
      <CalloutLink onClick={() => window.alert("Hello World")}>시도해 보기</CalloutLink>
    </Callout>
  );
}
