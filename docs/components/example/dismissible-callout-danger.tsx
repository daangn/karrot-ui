import { DismissibleCallout, CalloutDescription } from "seed-design/ui/callout";

export default function DismissibleCalloutDanger() {
  return (
    <DismissibleCallout dismissAriaLabel="닫기" variant="danger">
      <CalloutDescription>
        Dolore ex occaecat Lorem ad eu. Consectetur consectetur magna pariatur aliquip enim non.
      </CalloutDescription>
    </DismissibleCallout>
  );
}
