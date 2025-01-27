import type { ActivityComponentType } from "@stackflow/react";
import {
  AppBar,
  AppBarBackButton,
  AppBarLeft,
  AppBarTitle,
} from "../design-system/stackflow/AppBar";
import { AppScreen, AppScreenContent } from "../design-system/stackflow/AppScreen";

const ActivityNotFound: ActivityComponentType = () => {
  return (
    <AppScreen>
      <AppBar>
        <AppBarLeft>
          <AppBarBackButton />
        </AppBarLeft>
        <AppBarTitle>Error</AppBarTitle>
      </AppBar>
      <AppScreenContent>404 Not Found</AppScreenContent>
    </AppScreen>
  );
};

export default ActivityNotFound;
