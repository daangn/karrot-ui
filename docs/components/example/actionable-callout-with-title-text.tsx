"use client";

import { ActionableCallout } from "seed-design/ui/actionable-callout";

export default function ActionableCalloutWithTitleText() {
  return (
    <ActionableCallout
      onClick={() => window.alert("Hello World")}
      variant="magic"
      titleText="새로운 기능"
    >
      Aliquip laboris excepteur enim sunt eiusmod laboris anim.
    </ActionableCallout>
  );
}
