import { IconFaceSmileCircleFill } from "@daangn/react-monochrome-icon";
import { ReactionButton } from "seed-design/ui/reaction-button";

export default function ReactionButtonDisabled() {
  return (
    <ReactionButton prefixIcon={<IconFaceSmileCircleFill />} disabled>
      비활성
    </ReactionButton>
  );
}
