"use client";

import { ActionableCallout } from "seed-design/ui/actionable-callout";

export default function ActionableCalloutNeutral() {
  return (
    <ActionableCallout onClick={() => window.alert("Hello World")} variant="neutral">
      Dolore ex occaecat Lorem ad eu. Consectetur consectetur magna pariatur aliquip enim non.
    </ActionableCallout>
  );
}
