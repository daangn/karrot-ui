"use client";

import { ActionableCallout } from "seed-design/ui/actionable-callout";

export default function ActionableCalloutInformative() {
  return (
    <ActionableCallout onClick={() => window.alert("Hello World")} variant="informative">
      Dolore ex occaecat Lorem ad eu. Consectetur consectetur magna pariatur aliquip enim non.
    </ActionableCallout>
  );
}
