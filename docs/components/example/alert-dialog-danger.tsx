"use client";

import { ActionButton } from "seed-design/ui/action-button";
import { AlertDialog, AlertDialogAction } from "seed-design/ui/alert-dialog";

const AlertDialogDangerActivity = () => {
  return (
    <AlertDialog title="제목" description="파괴적, 비가역적 작업을 경고">
      <AlertDialogAction asChild>
        <ActionButton variant="neutralWeak">취소</ActionButton>
      </AlertDialogAction>
      <AlertDialogAction asChild>
        <ActionButton variant="dangerSolid">확인</ActionButton>
      </AlertDialogAction>
    </AlertDialog>
  );
};

export default AlertDialogDangerActivity;
