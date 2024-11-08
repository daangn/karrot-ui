"use client";

import { useState } from "react";
import { Tabs, TabTrigger, TabTriggerList } from "seed-design/ui/tabs";

export default function TabsStandalone() {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <div style={{ width: "360px" }}>
      <Tabs defaultValue="1" onValueChange={setActiveTab}>
        <TabTriggerList>
          <TabTrigger value="1">라벨1</TabTrigger>
          <TabTrigger value="2">라벨2</TabTrigger>
          <TabTrigger value="3">라벨3</TabTrigger>
        </TabTriggerList>
        {activeTab === "1" && (
          <div>
            <Content>Content 1</Content>
          </div>
        )}
        {activeTab === "2" && (
          <div>
            <Content>Content 2</Content>
          </div>
        )}
        {activeTab === "3" && (
          <div>
            <Content>Content 3</Content>
          </div>
        )}
      </Tabs>
    </div>
  );
}

const Content = (props: React.PropsWithChildren) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "300px",
        backgroundColor: "var(--seed-color-bg-layer-default)",
      }}
    >
      {props.children}
    </div>
  );
};
