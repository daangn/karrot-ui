import {
  DismissibleCallout,
  DismissibleCalloutDescription,
} from "seed-design/ui/dismissible-callout";

export default function DismissibleCalloutTextOnly() {
  return (
    <DismissibleCallout dismissAriaLabel="닫기" variant="magic">
      <DismissibleCalloutDescription>
        Aliquip laboris excepteur enim sunt eiusmod laboris anim.
      </DismissibleCalloutDescription>
    </DismissibleCallout>
  );
}
