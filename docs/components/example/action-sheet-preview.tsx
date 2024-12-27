"use client";

import { IconEyeSlashLine } from "@daangn/react-monochrome-icon";
import { ActionSheet, ActionSheetGroup, ActionSheetItem } from "seed-design/ui/action-sheet";

const ActionSheetPreviewActivity = () => {
  return (
    <ActionSheet>
      <ActionSheetGroup>
        <ActionSheetItem prefixIcon={<IconEyeSlashLine />} label="Action 1" />
        <ActionSheetItem prefixIcon={<IconEyeSlashLine />} label="Action 2" />
        <ActionSheetItem prefixIcon={<IconEyeSlashLine />} label="Action 3" />
      </ActionSheetGroup>
      <ActionSheetGroup>
        <ActionSheetItem prefixIcon={<IconEyeSlashLine />} label="Action 4" />
        <ActionSheetItem tone="danger" prefixIcon={<IconEyeSlashLine />} label="Action 5" />
      </ActionSheetGroup>
    </ActionSheet>
  );
};

export default ActionSheetPreviewActivity;
