import { IconFaceSmileCircleFill } from "@daangn/react-monochrome-icon";
import { ReactionButton } from "seed-design/ui/reaction-button";

export default function ReactionButtonXsmall() {
  return (
    <ReactionButton prefixIcon={<IconFaceSmileCircleFill />} size="xsmall" count={1}>
      도움돼요
    </ReactionButton>
  );
}
