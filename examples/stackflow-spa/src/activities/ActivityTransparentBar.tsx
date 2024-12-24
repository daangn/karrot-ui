import type { ActivityComponentType } from "@stackflow/react";
import {
  AppBar,
  BackButton,
  IconButton,
  Left,
  Right,
  Title,
} from "../design-system/stackflow/AppBar";
import { AppScreen } from "../design-system/stackflow/AppScreen";

import { IconBellLine } from "@daangn/react-monochrome-icon";
import img from "../assets/peng.jpeg";
import { theme } from "../stackflow/theme";

const ActivityTransparentBar: ActivityComponentType = () => {
  return (
    <AppScreen
      appBar={
        <AppBar tone="transparent" border={false}>
          <Left>
            <BackButton />
          </Left>
          <Title>야옹</Title>
          <Right>
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
          </Right>
        </AppBar>
      }
      theme={theme}
    >
      <img src={img} alt="penguin" />
      <div style={{ height: 800 }} />
    </AppScreen>
  );
};

export default ActivityTransparentBar;
