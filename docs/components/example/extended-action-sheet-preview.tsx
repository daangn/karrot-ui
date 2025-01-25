"use client";

import { IconEyeSlashLine } from "@daangn/react-monochrome-icon";
import { ActionButton } from "seed-design/ui/action-button";
import {
  ExtendedActionSheetContent,
  ExtendedActionSheetGroup,
  ExtendedActionSheetItem,
  ExtendedActionSheetRoot,
  ExtendedActionSheetTrigger,
} from "seed-design/ui/extended-action-sheet";

const ExtendedActionSheetPreview = () => {
  return (
    <ExtendedActionSheetRoot>
      <ExtendedActionSheetTrigger asChild>
        <ActionButton>Open</ActionButton>
      </ExtendedActionSheetTrigger>
      <ExtendedActionSheetContent aria-label="Extended Action Sheet">
        <ExtendedActionSheetGroup>
          <ExtendedActionSheetItem prefixIcon={<IconEyeSlashLine />} label="Action 1" />
          <ExtendedActionSheetItem prefixIcon={<IconEyeSlashLine />} label="Action 2" />
          <ExtendedActionSheetItem prefixIcon={<IconEyeSlashLine />} label="Action 3" />
        </ExtendedActionSheetGroup>
        <ExtendedActionSheetGroup>
          <ExtendedActionSheetItem prefixIcon={<IconEyeSlashLine />} label="Action 4" />
          <ExtendedActionSheetItem
            tone="critical"
            prefixIcon={<IconEyeSlashLine />}
            label="Action 5"
          />
        </ExtendedActionSheetGroup>
      </ExtendedActionSheetContent>
    </ExtendedActionSheetRoot>
  );
};

export default ExtendedActionSheetPreview;
