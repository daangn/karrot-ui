import type { ActivityComponentType } from "@stackflow/react";
import {
  AppBar,
  AppBarLeft,
  AppBarRight,
  AppBarTitle,
  BackButton,
  IconButton,
} from "../design-system/stackflow/AppBar";
import { AppScreen, AppScreenContent } from "../design-system/stackflow/AppScreen";

import { IconBellLine } from "@daangn/react-monochrome-icon";
import { theme } from "../stackflow/theme";

const ActivityLayerBar: ActivityComponentType = () => {
  return (
    <AppScreen theme={theme}>
      <AppBar tone="layer">
        <AppBarLeft>
          <BackButton />
        </AppBarLeft>
        <AppBarTitle>야옹</AppBarTitle>
        <AppBarRight>
          <IconButton>
            <IconBellLine />
          </IconButton>
          <IconButton>
            <IconBellLine />
          </IconButton>
          <IconButton>
            <IconBellLine />
          </IconButton>
          <IconButton>
            <IconBellLine />
          </IconButton>
        </AppBarRight>
      </AppBar>
      <AppScreenContent />
    </AppScreen>
  );
};

export default ActivityLayerBar;
