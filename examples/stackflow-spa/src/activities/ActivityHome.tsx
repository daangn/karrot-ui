import type { ActivityComponentType } from "@stackflow/react";
import { List, ListItem } from "../components/List";
import { AppBar, Title } from "../design-system/stackflow/AppBar";
import { AppScreen } from "../design-system/stackflow/AppScreen";
import { useFlow } from "../stackflow";

const ActivityHome: ActivityComponentType = () => {
  const { push } = useFlow();

  return (
    <AppScreen
      appBar={
        <AppBar>
          <Title>Home</Title>
        </AppBar>
      }
    >
      <div
        style={{
          overflow: "auto",
          height: "calc(100vh - var(--stackflow-plugin-basic-ui-app-bar-height))",
        }}
      >
        <List>
          <ListItem onClick={() => push("ActivityActionButton", {})} title="ActionButton" />
          <ListItem onClick={() => push("ActivityActionChip", {})} title="ActionChip" />
          <ListItem onClick={() => push("ActivityControlChip", {})} title="ControlChip" />
          <ListItem onClick={() => push("ActivityHelpBubble", {})} title="HelpBubble" />
          <ListItem onClick={() => push("ActivityLayerBar", {})} title="LayerBar" />
          <ListItem onClick={() => push("ActivityTransparentBar", {})} title="TransparentBar" />
          <ListItem onClick={() => push("ActivityAlertDialog", {})} title="AlertDialog" />
          <ListItem onClick={() => push("ActivityBottomSheet", {})} title="BottomSheet" />
          <ListItem onClick={() => push("ActivityActionSheet", {})} title="ActionSheet" />
        </List>
      </div>
    </AppScreen>
  );
};

export default ActivityHome;
