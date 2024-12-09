import { DismissibleCallout, CalloutDescription } from "seed-design/ui/callout";

export default function DismissibleCalloutTextOnly() {
  return (
    <DismissibleCallout dismissAriaLabel="닫기" variant="magic">
      <CalloutDescription>
        Aliquip laboris excepteur enim sunt eiusmod laboris anim.
      </CalloutDescription>
    </DismissibleCallout>
  );
}
