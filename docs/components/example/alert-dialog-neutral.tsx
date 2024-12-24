"use client";

import { ActionButton } from "seed-design/ui/action-button";
import { AlertDialog, AlertDialogAction } from "seed-design/ui/alert-dialog";

const AlertDialogNeutralActivity = () => {
  return (
    <AlertDialog title="제목" description="중립적인 선택지를 제공">
      <AlertDialogAction asChild>
        <ActionButton variant="neutralWeak">취소</ActionButton>
      </AlertDialogAction>
      <AlertDialogAction asChild>
        <ActionButton variant="neutralSolid">확인</ActionButton>
      </AlertDialogAction>
    </AlertDialog>
  );
};

export default AlertDialogNeutralActivity;
