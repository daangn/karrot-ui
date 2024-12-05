import { DismissibleCallout, DismissibleCalloutLabel } from "seed-design/ui/dismissible-callout";

export default function DismissibleCalloutTextOnly() {
  return (
    <DismissibleCallout dismissAriaLabel="닫기" variant="magic">
      <DismissibleCalloutLabel>
        Aliquip laboris excepteur enim sunt eiusmod laboris anim.
      </DismissibleCalloutLabel>
    </DismissibleCallout>
  );
}
