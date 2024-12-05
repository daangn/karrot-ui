"use client";

import { ActionableCallout, ActionableCalloutDescription } from "seed-design/ui/actionable-callout";

export default function ActionableCalloutWarning() {
  return (
    <ActionableCallout onClick={() => window.alert("Hello World")} variant="warning">
      <ActionableCalloutDescription>
        Dolore ex occaecat Lorem ad eu. Consectetur consectetur magna pariatur aliquip enim non.
      </ActionableCalloutDescription>
    </ActionableCallout>
  );
}
