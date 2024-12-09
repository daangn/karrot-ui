import { DismissibleCallout, CalloutDescription, CalloutTitle } from "seed-design/ui/callout";

export default function DismissibleCalloutWithTitleText() {
  return (
    <DismissibleCallout dismissAriaLabel="닫기" variant="magic">
      <CalloutTitle>새로운 기능</CalloutTitle>
      <CalloutDescription>
        Aliquip laboris excepteur enim sunt eiusmod laboris anim.
      </CalloutDescription>
    </DismissibleCallout>
  );
}
