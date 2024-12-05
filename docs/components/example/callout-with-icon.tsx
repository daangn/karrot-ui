import { IconSparkle2Fill } from "@daangn/react-monochrome-icon";
import { Callout, CalloutDescription } from "seed-design/ui/callout";

export default function CalloutWithIcon() {
  return (
    <Callout variant="magic" icon={<IconSparkle2Fill />}>
      <CalloutDescription>
        Aliquip laboris excepteur enim sunt eiusmod laboris anim.
      </CalloutDescription>
    </Callout>
  );
}
