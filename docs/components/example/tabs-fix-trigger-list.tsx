import { Tabs, TabContent, TabContentList, TabTrigger, TabTriggerList } from "seed-design/ui/tabs";

export default function TabsFixTriggerList() {
  return (
    // 600은 화면 높이라고 가정합니다.
    <div style={{ width: "360px", height: "600px" }}>
      <Tabs
        defaultValue="1"
        lazyMode="keepMounted"
        isLazy={true}
        size="medium"
        isSwipeable={false}
        fixTriggerList
        style={{ height: "100%" }} // 탭 영역을 전체 화면으로 설정합니다.
      >
        <TabTriggerList>
          <TabTrigger value="1">라벨1</TabTrigger>
          <TabTrigger value="2">라벨2</TabTrigger>
          <TabTrigger value="3">라벨3</TabTrigger>
        </TabTriggerList>
        <TabContentList>
          <TabContent value="1">
            <Content height="1000px">Content 1</Content>
          </TabContent>
          <TabContent value="2">
            <Content height="1000px">Content 2</Content>
          </TabContent>
          <TabContent value="3">
            <Content height="1000px">Content 3</Content>
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
        alignItems: "center",
        height,
        background: "linear-gradient(to bottom, white, gray)",
      }}
    >
      {children}
    </div>
  );
};
