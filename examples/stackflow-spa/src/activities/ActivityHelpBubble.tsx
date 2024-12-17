import "@seed-design/stylesheet/helpBubble.css";

import type { ActivityComponentType } from "@stackflow/react";

import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActionButton } from "../design-system/ui/action-button";
import { HelpBubbleTrigger } from "../design-system/ui/help-bubble";

const ActivityHelpBubble: ActivityComponentType = () => {
  return (
    <AppScreen appBar={{ title: "HelpBubble" }}>
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
            maxWidth={200}
          >
            <ActionButton>Slide 테스트</ActionButton>
          </HelpBubbleTrigger>
        </div>
        <div style={{ display: "flex", paddingTop: "20vh", justifyContent: "center" }}>
          <HelpBubbleTrigger
            title="Close Button 테스트"
            description={"어흥어흥어흥어흥어흥 야옹야옹야옹야옹야옹야옹"}
            showCloseButton
            maxWidth={200}
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
