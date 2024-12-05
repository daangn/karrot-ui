import { IconSparkle2Fill } from "@daangn/react-monochrome-icon";
import { Callout, CalloutLabel } from "seed-design/ui/callout";

export default function CalloutWithIcon() {
  return (
    <Callout variant="magic" icon={<IconSparkle2Fill />}>
      <CalloutLabel>Aliquip laboris excepteur enim sunt eiusmod laboris anim.</CalloutLabel>
    </Callout>
  );
}
