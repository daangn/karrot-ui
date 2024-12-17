import { ActionButton } from "@/registry/ui/action-button";
import { HelpBubbleTrigger } from "seed-design/ui/help-bubble";

export default function HelpBubblePreview() {
  return (
    <HelpBubbleTrigger
      open
      placement="bottom"
      title="Placement"
      description="Placement로 기본 위치를 설정할 수 있어요."
    >
      <ActionButton>열기</ActionButton>
    </HelpBubbleTrigger>
  );
}
