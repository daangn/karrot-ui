import { IconFaceSmileCircleFill } from "@daangn/react-monochrome-icon";
import { ReactionButton } from "seed-design/ui/reaction-button";

export default function ReactionButtonPreview() {
  return (
    <ReactionButton prefixIcon={<IconFaceSmileCircleFill />} count={1}>
      도움돼요
    </ReactionButton>
  );
}
