"use client";

import { ActionButton } from "seed-design/ui/action-button";
import { BottomSheet, BottomSheetFooter } from "seed-design/ui/bottom-sheet";
import { Flex } from "seed-design/ui/layout";

const BottomSheetPreviewActivity = () => {
  return (
    <BottomSheet title="제목" description="설명을 작성할 수 있어요">
      {/* Horizontal padding is 0 in default for full-width usage. */}
      {/* If you need padding, you can set paddingX "spacingX.globalGutter" to ensure consistent padding. */}
      <Flex paddingX="spacingX.globalGutter" style={{ height: "300px" }}>
        Content
      </Flex>
      <BottomSheetFooter>
        <ActionButton variant="neutralSolid">확인</ActionButton>
      </BottomSheetFooter>
    </BottomSheet>
  );
};

export default BottomSheetPreviewActivity;
