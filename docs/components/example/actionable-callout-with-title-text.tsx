"use client";

import {
  ActionableCallout,
  ActionableCalloutLabel,
  ActionableCalloutTitle,
} from "seed-design/ui/actionable-callout";

export default function ActionableCalloutWithTitleText() {
  return (
    <ActionableCallout onClick={() => window.alert("Hello World")} variant="magic">
      <ActionableCalloutTitle>새로운 기능</ActionableCalloutTitle>
      <ActionableCalloutLabel>
        Aliquip laboris excepteur enim sunt eiusmod laboris anim.
      </ActionableCalloutLabel>
    </ActionableCallout>
  );
}
