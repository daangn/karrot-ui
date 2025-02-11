import { Box } from "@seed-design/react";
import type { ActivityComponentType } from "@stackflow/react";
import {
  AppBar,
  AppBarBackButton,
  AppBarLeft,
  AppBarMain,
} from "../design-system/stackflow/AppBar";
import { AppScreen, AppScreenContent } from "../design-system/stackflow/AppScreen";
import {
  TabsCarousel,
  TabsContent,
  TabsList,
  TabsRoot,
  TabsTrigger,
} from "../design-system/ui/tabs";

const ActivityAnimatedTabs: ActivityComponentType = () => {
  return (
    <AppScreen>
      <AppBar>
        <AppBarLeft>
          <AppBarBackButton />
        </AppBarLeft>
        <AppBarMain title="Animated Tabs" />
      </AppBar>
      <AppScreenContent>
        <TabsRoot defaultValue="1" contentLayout="hug">
          <TabsList>
            <TabsTrigger value="1">Tab 1</TabsTrigger>
            <TabsTrigger value="x" disabled>
              Disabled
            </TabsTrigger>
            <TabsTrigger value="2" notification>
              Tab 2
            </TabsTrigger>
          </TabsList>
          <TabsCarousel autoHeight>
            <TabsContent value="1">
              <Box borderWidth={1} borderColor="stroke.neutral" padding="x2" height="1000px">
                Tab 1 content
              </Box>
            </TabsContent>
            <TabsContent value="2">
              <Box borderWidth={1} borderColor="stroke.neutral" paddingX="x2" paddingY="x10">
                Tab 2 content
              </Box>
            </TabsContent>
          </TabsCarousel>
        </TabsRoot>
      </AppScreenContent>
    </AppScreen>
  );
};

export default ActivityAnimatedTabs;
