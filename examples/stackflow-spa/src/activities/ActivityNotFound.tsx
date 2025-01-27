import type { ActivityComponentType } from "@stackflow/react";
import { AppBar, BackButton, AppBarLeft, AppBarTitle } from "../design-system/stackflow/AppBar";
import { AppScreen, AppScreenContent } from "../design-system/stackflow/AppScreen";

const ActivityNotFound: ActivityComponentType = () => {
  return (
    <AppScreen>
      <AppBar>
        <AppBarLeft>
          <BackButton />
        </AppBarLeft>
        <AppBarTitle>Error</AppBarTitle>
      </AppBar>
      <AppScreenContent>404 Not Found</AppScreenContent>
    </AppScreen>
  );
};

export default ActivityNotFound;
