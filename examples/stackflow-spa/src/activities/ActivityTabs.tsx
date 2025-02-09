import { Box } from "@seed-design/react";
import type { ActivityComponentType } from "@stackflow/react";
import { useEffect, useState } from "react";
import {
  AppBar,
  AppBarBackButton,
  AppBarLeft,
  AppBarMain,
} from "../design-system/stackflow/AppBar";
import { AppScreen, AppScreenContent } from "../design-system/stackflow/AppScreen";
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from "../design-system/ui/tabs";

const ActivityTabs: ActivityComponentType = () => {
  return (
    <AppScreen>
      <AppBar>
        <AppBarLeft>
          <AppBarBackButton />
        </AppBarLeft>
        <AppBarMain title="Tabs" />
      </AppBar>
      <AppScreenContent>
        <div style={{ height: "100%", overflowY: "auto" }}>
          <Box padding="s4">Sticky Tablist</Box>
          <TabsRoot stickyList defaultValue="1" triggerLayout="hug" contentLayout="hug">
            <TabsList>
              <TabsTrigger value="1">Tab 1</TabsTrigger>
              <TabsTrigger value="2">Tab 2</TabsTrigger>
            </TabsList>
            <TabsContent value="1">
              <Box borderWidth={1} borderColor="stroke.neutral" padding="s2" height="1000px">
                Tab 1 content
              </Box>
            </TabsContent>
            <TabsContent value="2">
              <AsyncContent>
                <Box borderWidth={1} borderColor="stroke.neutral" paddingX="s2" paddingY="s10">
                  Tab 2 content
                </Box>
              </AsyncContent>
            </TabsContent>
          </TabsRoot>
        </div>
      </AppScreenContent>
    </AppScreen>
  );
};

const AsyncContent = (props: { children: React.ReactNode }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, []);

  return loaded ? <>{props.children}</> : <div>Loading...</div>;
};

export default ActivityTabs;
