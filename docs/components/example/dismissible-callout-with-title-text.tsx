import {
  DismissibleCallout,
  DismissibleCalloutDescription,
  DismissibleCalloutTitle,
} from "seed-design/ui/dismissible-callout";

export default function DismissibleCalloutWithTitleText() {
  return (
    <DismissibleCallout dismissAriaLabel="닫기" variant="magic">
      <DismissibleCalloutTitle>새로운 기능</DismissibleCalloutTitle>
      <DismissibleCalloutDescription>
        Aliquip laboris excepteur enim sunt eiusmod laboris anim.
      </DismissibleCalloutDescription>
    </DismissibleCallout>
  );
}
