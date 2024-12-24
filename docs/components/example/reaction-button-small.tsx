import { IconFaceSmileCircleFill } from "@daangn/react-monochrome-icon";
import { ReactionButton } from "seed-design/ui/reaction-button";

export default function ReactionButtonSmall() {
  return (
    <ReactionButton prefixIcon={<IconFaceSmileCircleFill />} size="small" count={1}>
      도움돼요
    </ReactionButton>
  );
}
