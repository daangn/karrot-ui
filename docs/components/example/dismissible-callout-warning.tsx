import { DismissibleCallout, CalloutDescription } from "seed-design/ui/callout";

export default function DismissibleCalloutWarning() {
  return (
    <DismissibleCallout dismissAriaLabel="닫기" variant="warning">
      <CalloutDescription>
        Dolore ex occaecat Lorem ad eu. Consectetur consectetur magna pariatur aliquip enim non.
      </CalloutDescription>
    </DismissibleCallout>
  );
}
