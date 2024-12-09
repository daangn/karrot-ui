import { DismissibleCallout, CalloutDescription } from "seed-design/ui/callout";

export default function DismissibleCalloutInformative() {
  return (
    <DismissibleCallout dismissAriaLabel="닫기" variant="informative">
      <CalloutDescription>
        Dolore ex occaecat Lorem ad eu. Consectetur consectetur magna pariatur aliquip enim non.
      </CalloutDescription>
    </DismissibleCallout>
  );
}
