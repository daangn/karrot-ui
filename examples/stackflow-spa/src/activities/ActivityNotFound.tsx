import type { ActivityComponentType } from "@stackflow/react";
import { AppBar, BackButton, Left, Title } from "../design-system/stackflow/AppBar";
import { AppScreen } from "../design-system/stackflow/AppScreen";

const ActivityNotFound: ActivityComponentType = () => {
  return (
    <AppScreen
      appBar={
        <AppBar>
          <Left>
            <BackButton />
          </Left>
          <Title>Error</Title>
        </AppBar>
      }
    >
      404 Not Found
    </AppScreen>
  );
};

export default ActivityNotFound;
