import type { ActivityComponentType } from "@stackflow/react";

import { ActionButton } from "../design-system/ui/action-button";
import {
  BottomSheetBody,
  BottomSheetContent,
  BottomSheetFooter,
  BottomSheetRoot,
} from "../design-system/ui/bottom-sheet";
import { useFlow } from "../stackflow";

const ActivityBottomSheet: ActivityComponentType = () => {
  const { pop } = useFlow();

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      pop();
    }
  };

  return (
    <BottomSheetRoot defaultOpen onOpenChange={handleOpenChange}>
      <BottomSheetContent title="제목" description="다람쥐 헌 쳇바퀴에 타고파">
        <BottomSheetBody alignItems="center" justifyContent="center" height="300px">
          Content
        </BottomSheetBody>
        <BottomSheetFooter>
          <ActionButton onClick={() => pop()} variant="neutralSolid" size="large">
            확인
          </ActionButton>
        </BottomSheetFooter>
      </BottomSheetContent>
    </BottomSheetRoot>
  );
};

export default ActivityBottomSheet;
