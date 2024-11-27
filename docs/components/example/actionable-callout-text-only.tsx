"use client";

import { ActionableCallout } from "seed-design/ui/actionable-callout";

export default function ActionableCalloutTextOnly() {
  return (
    <ActionableCallout onClick={() => window.alert("Hello World")} variant="magic">
      Aliquip laboris excepteur enim sunt eiusmod laboris anim.
    </ActionableCallout>
  );
}
