"use client";

import { ActionableCallout, CalloutDescription } from "seed-design/ui/callout";

export default function ActionableCalloutTextOnly() {
  return (
    <ActionableCallout onClick={() => window.alert("Hello World")} variant="magic">
      <CalloutDescription>
        Aliquip laboris excepteur enim sunt eiusmod laboris anim.
      </CalloutDescription>
    </ActionableCallout>
  );
}
