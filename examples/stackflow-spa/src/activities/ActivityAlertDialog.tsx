import type { ActivityComponentType } from "@stackflow/react";

import { AlertDialog, AlertDialogAction } from "../design-system/stackflow/AlertDialog";
import { ActionButton } from "../design-system/ui/action-button";
import { useFlow } from "../stackflow";

const ActivityAlertDialog: ActivityComponentType = () => {
  const { pop } = useFlow();

  return (
    <AlertDialog title="제목" description="다람쥐 헌 쳇바퀴에 타고파">
      <AlertDialogAction asChild>
        <ActionButton
          onClick={() => {
            pop();
          }}
          variant="neutralWeak"
        >
          취소
        </ActionButton>
      </AlertDialogAction>
      <AlertDialogAction asChild>
        <ActionButton
          onClick={() => {
            pop();
          }}
          variant="neutralSolid"
        >
          확인
        </ActionButton>
      </AlertDialogAction>
    </AlertDialog>
  );
};

export default ActivityAlertDialog;
