"use client";

import { ActionableCallout, ActionableCalloutLabel } from "seed-design/ui/actionable-callout";

export default function ActionableCalloutTextOnly() {
  return (
    <ActionableCallout onClick={() => window.alert("Hello World")} variant="magic">
      <ActionableCalloutLabel>
        Aliquip laboris excepteur enim sunt eiusmod laboris anim.
      </ActionableCalloutLabel>
    </ActionableCallout>
  );
}
