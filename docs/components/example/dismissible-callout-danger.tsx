import { DismissibleCallout, DismissibleCalloutLabel } from "seed-design/ui/dismissible-callout";

export default function DismissibleCalloutDanger() {
  return (
    <DismissibleCallout dismissAriaLabel="닫기" variant="danger">
      <DismissibleCalloutLabel>
        Dolore ex occaecat Lorem ad eu. Consectetur consectetur magna pariatur aliquip enim non.
      </DismissibleCalloutLabel>
    </DismissibleCallout>
  );
}
