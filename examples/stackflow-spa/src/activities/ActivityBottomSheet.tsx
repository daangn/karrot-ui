import type { ActivityComponentType } from "@stackflow/react";

import { BottomSheet, BottomSheetFooter } from "../design-system/stackflow/BottomSheet";
import { ActionButton } from "../design-system/ui/action-button";
import { useFlow } from "../stackflow";

const ActivityBottomSheet: ActivityComponentType = () => {
  const { pop } = useFlow();

  return (
    <BottomSheet title="제목" description="다람쥐 헌 쳇바퀴에 타고파" onInteractOutside={pop}>
      <div
        style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "300px" }}
      >
        Content
      </div>
      <BottomSheetFooter>
        <ActionButton onClick={() => pop()} variant="neutralSolid" size="large">
          확인
        </ActionButton>
      </BottomSheetFooter>
    </BottomSheet>
  );
};

export default ActivityBottomSheet;
