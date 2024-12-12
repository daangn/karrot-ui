import type { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "../design-system/stackflow/AppScreen";
import {
  AppBar,
  BackButton,
  IconButton,
  Left,
  Right,
  Title,
} from "../design-system/stackflow/AppBar";

import img from "../assets/peng.jpeg";
import { IconBellLine } from "@daangn/react-monochrome-icon";

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
      theme="cupertino"
    >
      <img src={img} alt="penguin" />
      <div style={{ height: 800 }} />
    </AppScreen>
  );
};

export default ActivityTransparentBar;
