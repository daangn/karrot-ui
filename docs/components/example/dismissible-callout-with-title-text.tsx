import {
  DismissibleCallout,
  DismissibleCalloutLabel,
  DismissibleCalloutTitle,
} from "seed-design/ui/dismissible-callout";

export default function DismissibleCalloutWithTitleText() {
  return (
    <DismissibleCallout dismissAriaLabel="닫기" variant="magic">
      <DismissibleCalloutTitle>새로운 기능</DismissibleCalloutTitle>
      <DismissibleCalloutLabel>
        Aliquip laboris excepteur enim sunt eiusmod laboris anim.
      </DismissibleCalloutLabel>
    </DismissibleCallout>
  );
}
