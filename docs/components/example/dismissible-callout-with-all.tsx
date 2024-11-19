"use client";

import { IconSparkle2Fill } from "@daangn/react-monochrome-icon";
import { DismissibleCallout } from "seed-design/ui/dismissible-callout";

export default function DismissibleCalloutWithAll() {
  return (
    <DismissibleCallout
      dismissAriaLabel="닫기"
      variant="magic"
      icon={<IconSparkle2Fill />}
      titleText="새로운 기능"
      linkLabel="시도해 보기"
      onLinkLabelClick={() => window.alert("Hello World")}
    >
      Aliquip laboris excepteur enim sunt eiusmod laboris anim.
    </DismissibleCallout>
  );
}
