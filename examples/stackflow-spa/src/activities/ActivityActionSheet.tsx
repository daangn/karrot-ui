import type { ActivityComponentType } from "@stackflow/react";

import IconEyeSlashLine from "@daangn/react-monochrome-icon/IconEyeSlashLine";
import {
  ActionSheet,
  ActionSheetGroup,
  ActionSheetItem,
} from "../design-system/stackflow/ActionSheet";
import { useFlow } from "../stackflow";

const ActivityBottomSheet: ActivityComponentType = () => {
  const { pop } = useFlow();

  const handleAction = (index: number) => () => {
    window.alert(`Action ${index + 1} clicked`);
    pop();
  };

  return (
    <ActionSheet onInteractOutside={pop}>
      <ActionSheetGroup>
        <ActionSheetItem
          onClick={handleAction(1)}
          prefixIcon={<IconEyeSlashLine />}
          label="Action 1"
        />
        <ActionSheetItem
          onClick={handleAction(2)}
          prefixIcon={<IconEyeSlashLine />}
          label="Action 2"
        />
        <ActionSheetItem
          onClick={handleAction(3)}
          prefixIcon={<IconEyeSlashLine />}
          label="Action 3"
        />
      </ActionSheetGroup>
      <ActionSheetGroup>
        <ActionSheetItem
          onClick={handleAction(4)}
          prefixIcon={<IconEyeSlashLine />}
          label="Action 4"
        />
        <ActionSheetItem
          onClick={handleAction(5)}
          tone="danger"
          prefixIcon={<IconEyeSlashLine />}
          label="Action 5"
        />
      </ActionSheetGroup>
    </ActionSheet>
  );
};

export default ActivityBottomSheet;
