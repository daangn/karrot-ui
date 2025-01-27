import type { ActivityComponentType } from "@stackflow/react";
import {
  AppBar,
  AppBarLeft,
  AppBarRight,
  AppBarTitle,
  AppBarBackButton,
  AppBarIconButton,
} from "../design-system/stackflow/AppBar";
import { AppScreen, AppScreenContent } from "../design-system/stackflow/AppScreen";

import { IconBellLine } from "@daangn/react-monochrome-icon";

const ActivityLayerBar: ActivityComponentType = () => {
  return (
    <AppScreen>
      <AppBar tone="layer">
        <AppBarLeft>
          <AppBarBackButton />
        </AppBarLeft>
        <AppBarTitle>Random Long Title Hello World</AppBarTitle>
        <AppBarRight>
          <AppBarIconButton>
            <IconBellLine />
          </AppBarIconButton>
          <AppBarIconButton>
            <IconBellLine />
          </AppBarIconButton>
          <AppBarIconButton>
            <IconBellLine />
          </AppBarIconButton>
          <AppBarIconButton>
            <IconBellLine />
          </AppBarIconButton>
        </AppBarRight>
      </AppBar>
      <AppScreenContent />
    </AppScreen>
  );
};

export default ActivityLayerBar;
