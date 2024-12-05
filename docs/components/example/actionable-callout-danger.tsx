"use client";

import { ActionableCallout, ActionableCalloutDescription } from "seed-design/ui/actionable-callout";

export default function ActionableCalloutDanger() {
  return (
    <ActionableCallout onClick={() => window.alert("Hello World")} variant="danger">
      <ActionableCalloutDescription>
        Dolore ex occaecat Lorem ad eu. Consectetur consectetur magna pariatur aliquip enim non.
      </ActionableCalloutDescription>
    </ActionableCallout>
  );
}
