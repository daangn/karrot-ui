"use client";

import { ActionableCallout, CalloutDescription } from "seed-design/ui/callout";

export default function ActionableCalloutNeutral() {
  return (
    <ActionableCallout onClick={() => window.alert("Hello World")} variant="magic">
      <CalloutDescription>
        Dolore ex occaecat Lorem ad eu. Consectetur consectetur magna pariatur aliquip enim non.
      </CalloutDescription>
    </ActionableCallout>
  );
}
