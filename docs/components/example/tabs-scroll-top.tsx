"use client";

import { RefObject, useRef, useState } from "react";
import { TabContent, TabContentList, Tabs, TabTrigger, TabTriggerList } from "seed-design/ui/tabs";

export default function TabsScrollTop() {
  const [currentTab, setCurrentTab] = useState("1");
  const contentRefs: Record<string, RefObject<HTMLDivElement | null>> = {
    "1": useRef(null),
    "2": useRef(null),
  };

  const handleTriggerClick = (value: string) => {
    if (value === currentTab) {
      contentRefs[value].current?.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div style={{ width: "360px" }}>
      <Tabs layout="fill" value={currentTab} onValueChange={setCurrentTab} isSwipeable={false}>
        <TabTriggerList>
          <TabTrigger onClick={() => handleTriggerClick("1")} value="1">
            라벨1
          </TabTrigger>
          <TabTrigger onClick={() => handleTriggerClick("2")} value="2">
            라벨2
          </TabTrigger>
        </TabTriggerList>
        <TabContentList>
          <TabContent ref={contentRefs["1"]} value="1" style={{ maxHeight: "200px" }}>
            <Content height="1000px">Content 1</Content>
          </TabContent>
          <TabContent ref={contentRefs["2"]} value="2" style={{ maxHeight: "200px" }}>
            <Content height="1000px">Content 2</Content>
          </TabContent>
        </TabContentList>
      </Tabs>
    </div>
  );
}

const Content = (props: React.PropsWithChildren<{ height: string }>) => {
  const { height, children } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height,
        backgroundColor: "var(--seed-color-bg-layer-default)",
      }}
    >
      {children}
    </div>
  );
};
