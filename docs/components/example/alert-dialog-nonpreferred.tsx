"use client";

import { ActionButton } from "seed-design/ui/action-button";
import { AlertDialog } from "seed-design/ui/alert-dialog";
import { Flex } from "seed-design/ui/layout";

const AlertDialogNonpreferredActivity = () => {
  return (
    <AlertDialog title="제목" description="메인 액션을 권장">
      <Flex flexGrow={1} direction="column" gap="s2_5">
        <ActionButton variant="neutralSolid">확인</ActionButton>
        <button
          type="button"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "24px",
            fontSize: "14px",
            lineHeight: "19px",
            fontWeight: "bold",
            color: "var(--seed-v3-color-fg-neutral-muted)",
          }}
        >
          취소
        </button>
      </Flex>
    </AlertDialog>
  );
};

export default AlertDialogNonpreferredActivity;
