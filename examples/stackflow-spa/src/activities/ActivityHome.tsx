import type { ActivityComponentType } from "@stackflow/react";

import { AppScreen } from "@stackflow/plugin-basic-ui";

import { List, ListItem } from "../components/List";
import { useFlow } from "../stackflow";

const ActivityHome: ActivityComponentType = () => {
  const { push } = useFlow();

  return (
    <AppScreen appBar={{ title: "Home" }}>
      <div
        style={{
          overflow: "auto",
          height: "calc(100vh - var(--stackflow-plugin-basic-ui-app-bar-height))",
        }}
      >
        <List>
          <ListItem onClick={() => push("ActivityActionButton", {})} title="ActionButton" />
          <ListItem onClick={() => push("ActivityActionChip", {})} title="ActionChip" />
        </List>
      </div>
    </AppScreen>
  );
};

export default ActivityHome;
