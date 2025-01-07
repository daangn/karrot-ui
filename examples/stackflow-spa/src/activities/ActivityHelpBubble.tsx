import type { ActivityComponentType } from "@stackflow/react";

import { AppBar, BackButton, Left, Title } from "../design-system/stackflow/AppBar";
import { AppScreen } from "../design-system/stackflow/AppScreen";
import { ActionButton } from "../design-system/ui/action-button";
import { HelpBubbleTrigger } from "../design-system/ui/help-bubble";

const ActivityHelpBubble: ActivityComponentType = () => {
  return (
    <AppScreen
      appBar={
        <AppBar>
          <Left>
            <BackButton />
          </Left>
          <Title>Help Bubble</Title>
        </AppBar>
      }
    >
      <div style={{ overflowY: "auto", height: "200vh" }}>
        <div style={{ display: "flex", paddingTop: "20vh", justifyContent: "center" }}>
          <HelpBubbleTrigger title="Flip 테스트">
            <ActionButton>Flip 테스트</ActionButton>
          </HelpBubbleTrigger>
        </div>
        <div style={{ display: "flex", paddingTop: "20vh", justifyContent: "center" }}>
          <HelpBubbleTrigger flip={false} title="Flip off 테스트">
            <ActionButton>Flip off 테스트</ActionButton>
          </HelpBubbleTrigger>
        </div>
        <div style={{ display: "flex", paddingTop: "20vh", justifyContent: "flex-end" }}>
          <HelpBubbleTrigger
            title="Slide 테스트"
            description={"어흥어흥어흥어흥어흥 야옹야옹야옹야옹야옹야옹"}
            contentProps={{ maxWidth: "200px" }}
          >
            <ActionButton>Slide 테스트</ActionButton>
          </HelpBubbleTrigger>
        </div>
        <div style={{ display: "flex", paddingTop: "20vh", justifyContent: "center" }}>
          <HelpBubbleTrigger
            title="Close Button 테스트"
            description={"어흥어흥어흥어흥어흥 야옹야옹야옹야옹야옹야옹"}
            showCloseButton
            contentProps={{ maxWidth: "200px" }}
          >
            <ActionButton>Close Button 테스트</ActionButton>
          </HelpBubbleTrigger>
        </div>
        <div style={{ display: "flex", paddingTop: "20vh", justifyContent: "center" }}>
          <HelpBubbleTrigger title="Placement=bottom 테스트" placement="bottom">
            <ActionButton>Placement=bottom 테스트</ActionButton>
          </HelpBubbleTrigger>
        </div>
      </div>
    </AppScreen>
  );
};

export default ActivityHelpBubble;
