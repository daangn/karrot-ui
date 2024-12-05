"use client";

import {
  ActionableCallout,
  ActionableCalloutDescription,
  ActionableCalloutTitle,
} from "seed-design/ui/actionable-callout";

export default function ActionableCalloutWithTitleText() {
  return (
    <ActionableCallout onClick={() => window.alert("Hello World")} variant="magic">
      <ActionableCalloutTitle>새로운 기능</ActionableCalloutTitle>
      <ActionableCalloutDescription>
        Aliquip laboris excepteur enim sunt eiusmod laboris anim.
      </ActionableCalloutDescription>
    </ActionableCallout>
  );
}
