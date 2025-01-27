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
import img from "../assets/peng.jpeg";

const ActivityTransparentBar: ActivityComponentType = () => {
  return (
    <AppScreen layerOffsetTop="none">
      <AppBar tone="transparent">
        <AppBarLeft>
          <AppBarBackButton />
        </AppBarLeft>
        <AppBarTitle>야옹</AppBarTitle>
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
      <AppScreenContent>
        <img src={img} alt="penguin" />
        <div style={{ height: 800 }} />
      </AppScreenContent>
    </AppScreen>
  );
};

export default ActivityTransparentBar;
