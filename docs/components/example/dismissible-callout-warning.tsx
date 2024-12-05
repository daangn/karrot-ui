import { DismissibleCallout, DismissibleCalloutLabel } from "seed-design/ui/dismissible-callout";

export default function DismissibleCalloutWarning() {
  return (
    <DismissibleCallout dismissAriaLabel="닫기" variant="warning">
      <DismissibleCalloutLabel>
        Dolore ex occaecat Lorem ad eu. Consectetur consectetur magna pariatur aliquip enim non.
      </DismissibleCalloutLabel>
    </DismissibleCallout>
  );
}
