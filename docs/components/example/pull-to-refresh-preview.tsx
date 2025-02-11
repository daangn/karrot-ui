"use client";

import { AppBar, AppScreen } from "@seed-design/stackflow";
import { ActivityComponentType } from "@stackflow/react/future";
import { Stack } from "seed-design/ui/layout";
import {
  PullToRefreshContent,
  PullToRefreshIndicator,
  PullToRefreshRoot,
} from "seed-design/ui/pull-to-refresh";

declare module "@stackflow/config" {
  interface Register {
    "pull-to-refresh-preview": unknown;
  }
}

const PullToRefreshPreview: ActivityComponentType<"pull-to-refresh-preview"> = () => {
  // AppScreen is imported from @seed-design/stackflow instead of snippet for demo purpose.
  // AppScreen snippet is integrating PullToRefresh, so it's not necessary to use it here.
  return (
    <AppScreen.Root>
      <AppBar.Root divider>
        <AppBar.Main>
          <AppBar.Title>Pull To Refresh</AppBar.Title>
        </AppBar.Main>
      </AppBar.Root>
      <PullToRefreshRoot
        asChild
        onPtrReady={() => {}}
        onPtrRefresh={async () => {
          await new Promise((resolve) => setTimeout(resolve, 1000));
        }}
      >
        <AppScreen.Layer>
          <PullToRefreshIndicator />
          <PullToRefreshContent asChild>
            <Stack paddingX="spacingX.globalGutter">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam autem deserunt
              reprehenderit ducimus sunt. Quod laudantium excepturi tempora fuga repellendus
              accusantium nam maiores? Quas debitis, neque ullam eligendi minus sit?
            </Stack>
          </PullToRefreshContent>
        </AppScreen.Layer>
      </PullToRefreshRoot>
    </AppScreen.Root>
  );
};

export default PullToRefreshPreview;
