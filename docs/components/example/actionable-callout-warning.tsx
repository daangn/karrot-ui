"use client";

import { ActionableCallout, ActionableCalloutLabel } from "seed-design/ui/actionable-callout";

export default function ActionableCalloutWarning() {
  return (
    <ActionableCallout onClick={() => window.alert("Hello World")} variant="warning">
      <ActionableCalloutLabel>
        Dolore ex occaecat Lorem ad eu. Consectetur consectetur magna pariatur aliquip enim non.
      </ActionableCalloutLabel>
    </ActionableCallout>
  );
}
