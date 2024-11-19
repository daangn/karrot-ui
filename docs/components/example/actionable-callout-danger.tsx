"use client";

import { ActionableCallout } from "seed-design/ui/actionable-callout";

export default function ActionableCalloutDanger() {
  return (
    <ActionableCallout onClick={() => window.alert("Hello World")} variant="danger">
      Dolore ex occaecat Lorem ad eu. Consectetur consectetur magna pariatur aliquip enim non.
    </ActionableCallout>
  );
}
