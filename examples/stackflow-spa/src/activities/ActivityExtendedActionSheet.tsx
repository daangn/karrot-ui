import { useActivity, type ActivityComponentType } from "@stackflow/react";

import {
  ExtendedActionSheetContent,
  ExtendedActionSheetGroup,
  ExtendedActionSheetItem,
  ExtendedActionSheetRoot,
} from "../design-system/ui/extended-action-sheet";
import { createCallbackActivity } from "../stackflow/createCallbackActivity";

type Action = "add" | "edit" | "delete" | "test1" | "test2";

export const extendedActionSheetCallback = createCallbackActivity(
  "ActivityExtendedActionSheet",
  {} as {
    action: Action;
  },
);

const ActivityExtendedActionSheet: ActivityComponentType = () => {
  const { pop } = extendedActionSheetCallback.useCallbackPop();
  const activity = useActivity();

  const handleAction = (action: Action) => () => {
    pop({ action });
  };

  const handleClose = (open: boolean) => {
    if (!open) {
      pop();
    }
  };

  return (
    <ExtendedActionSheetRoot open={activity.isActive} onOpenChange={handleClose}>
      <ExtendedActionSheetContent title="Actions" layerIndex={activity.zIndex * 5}>
        <ExtendedActionSheetGroup>
          <ExtendedActionSheetItem onClick={handleAction("add")} label="Add" />
          <ExtendedActionSheetItem onClick={handleAction("edit")} label="Edit" />
        </ExtendedActionSheetGroup>
        <ExtendedActionSheetGroup>
          <ExtendedActionSheetItem onClick={handleAction("test1")} label="test1" />
          <ExtendedActionSheetItem onClick={handleAction("test2")} label="tests" />
          <ExtendedActionSheetItem onClick={handleAction("delete")} tone="danger" label="Delete" />
        </ExtendedActionSheetGroup>
      </ExtendedActionSheetContent>
    </ExtendedActionSheetRoot>
  );
};

export default ActivityExtendedActionSheet;
