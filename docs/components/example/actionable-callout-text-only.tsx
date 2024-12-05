"use client";

import { ActionableCallout, ActionableCalloutDescription } from "seed-design/ui/actionable-callout";

export default function ActionableCalloutTextOnly() {
  return (
    <ActionableCallout onClick={() => window.alert("Hello World")} variant="magic">
      <ActionableCalloutDescription>
        Aliquip laboris excepteur enim sunt eiusmod laboris anim.
      </ActionableCalloutDescription>
    </ActionableCallout>
  );
}
