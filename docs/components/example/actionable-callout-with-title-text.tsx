"use client";

import { ActionableCallout, CalloutDescription, CalloutTitle } from "seed-design/ui/callout";

export default function ActionableCalloutWithTitleText() {
  return (
    <ActionableCallout onClick={() => window.alert("Hello World")} variant="magic">
      <CalloutTitle>새로운 기능</CalloutTitle>
      <CalloutDescription>
        Aliquip laboris excepteur enim sunt eiusmod laboris anim.
      </CalloutDescription>
    </ActionableCallout>
  );
}
