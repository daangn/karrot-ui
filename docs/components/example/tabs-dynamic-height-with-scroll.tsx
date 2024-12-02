import { Tabs, TabContent, TabContentList, TabTrigger, TabTriggerList } from "seed-design/ui/tabs";

export default function TabsDynamicHeightWithScroll() {
  return (
    <div style={{ width: "360px", height: "500px" }}>
      <Tabs
        defaultValue="1"
        lazyMode="keepMounted"
        isLazy={true}
        isSwipeable={false}
        style={{ position: "relative" }}
      >
        <TabTriggerList style={{ position: "sticky", top: 0, zIndex: 1 }}>
          <TabTrigger value="1">라벨1</TabTrigger>
          <TabTrigger value="2">라벨2</TabTrigger>
          <TabTrigger value="3">라벨3</TabTrigger>
        </TabTriggerList>
        <TabContentList>
          <TabContent value="1" style={{ maxHeight: "500px" }}>
            <Content height="700px">Content 1</Content>
          </TabContent>
          <TabContent value="2" style={{ maxHeight: "500px" }}>
            <Content height="700px">Content 2</Content>
          </TabContent>
          <TabContent value="3" style={{ maxHeight: "500px" }}>
            <Content height="700px">Content 3</Content>
          </TabContent>
        </TabContentList>
      </Tabs>
      <div style={{ height: "100px", backgroundColor: "gray" }}>아래 컨텐츠</div>
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
        alignItems: "center",
        height,
        backgroundColor: "var(--seed-color-bg-layer-default)",
      }}
    >
      {children}
    </div>
  );
};
