import type { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "../design-system/stackflow/AppScreen";
import { AppBar, BackButton, Left, Right, Title } from "../design-system/stackflow/AppBar";

import img from "../assets/peng.jpeg";

const ActivityTransparentBar: ActivityComponentType = () => {
  return (
    <AppScreen
      appBar={
        <AppBar tone="transparent" border={false}>
          <Left>
            <BackButton />
          </Left>
          <Right>Hello</Right>
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
