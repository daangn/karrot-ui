"use client";

import { Flex } from "seed-design/ui/layout";
import { ActionButton } from "seed-design/ui/action-button";
import { AlertDialog } from "seed-design/ui/alert-dialog";

const AlertDialogSingleActivity = () => {
  return (
    <AlertDialog title="제목" description="단일 선택지를 제공">
      <Flex flexGrow={1} direction="column">
        <ActionButton variant="neutralSolid">확인</ActionButton>
      </Flex>
    </AlertDialog>
  );
};

export default AlertDialogSingleActivity;
