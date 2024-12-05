import {
  DismissibleCallout,
  DismissibleCalloutDescription,
} from "seed-design/ui/dismissible-callout";

export default function DismissibleCalloutInformative() {
  return (
    <DismissibleCallout dismissAriaLabel="닫기" variant="informative">
      <DismissibleCalloutDescription>
        Dolore ex occaecat Lorem ad eu. Consectetur consectetur magna pariatur aliquip enim non.
      </DismissibleCalloutDescription>
    </DismissibleCallout>
  );
}
