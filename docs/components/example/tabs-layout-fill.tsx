import { TabsContent, TabsList, TabsRoot, TabsTrigger } from "seed-design/ui/tabs";

export default function TabsLayoutFill() {
  return (
    <div style={{ width: "360px" }}>
      <TabsRoot defaultValue="2" triggerLayout="fill">
        <TabsList>
          <TabsTrigger value="1">라벨1</TabsTrigger>
          <TabsTrigger value="2">라벨2</TabsTrigger>
          <TabsTrigger value="3">라벨3</TabsTrigger>
        </TabsList>
        <TabsContent value="1">
          <Content>Content 1</Content>
        </TabsContent>
        <TabsContent value="2">
          <Content>Content 2</Content>
        </TabsContent>
        <TabsContent value="3">
          <Content>Content 3</Content>
        </TabsContent>
      </TabsRoot>
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
