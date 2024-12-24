"use client";

import { ActionButton } from "seed-design/ui/action-button";
import { AlertDialog, AlertDialogAction } from "seed-design/ui/alert-dialog";

const AlertDialogPreviewActivity = () => {
  return (
    <AlertDialog title="주의" description="이 작업은 되돌릴 수 없습니다.">
      <AlertDialogAction asChild>
        <ActionButton variant="neutralWeak">취소</ActionButton>
      </AlertDialogAction>
      <AlertDialogAction asChild>
        <ActionButton variant="dangerSolid">확인</ActionButton>
      </AlertDialogAction>
    </AlertDialog>
  );
};

export default AlertDialogPreviewActivity;
