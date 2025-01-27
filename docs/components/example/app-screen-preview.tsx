"use client";

import { IconBellFill } from "@daangn/react-monochrome-icon";
import type { ActivityComponentType } from "@stackflow/react/future";
import {
  AppBar,
  AppBarCloseButton,
  AppBarIconButton,
  AppBarLeft,
  AppBarRight,
  AppBarTitle,
} from "seed-design/ui/app-bar";
import { AppScreen, AppScreenContent } from "seed-design/ui/app-screen";
import { Flex } from "seed-design/ui/layout";

declare module "@stackflow/config" {
  interface Register {
    AppScreenPreview: unknown;
  }
}

const AppScreenPreviewActivity: ActivityComponentType<"AppScreenPreview"> = () => {
  return (
    <AppScreen theme="cupertino">
      <AppBar>
        <AppBarLeft>
          <AppBarCloseButton />
        </AppBarLeft>
        <AppBarTitle>Preview</AppBarTitle>
        <AppBarRight>
          <AppBarIconButton aria-label="Notification">
            <IconBellFill />
          </AppBarIconButton>
        </AppBarRight>
      </AppBar>
      <AppScreenContent>
        <Flex height="full" justifyContent="center" alignItems="center">
          Preview
        </Flex>
      </AppScreenContent>
    </AppScreen>
  );
};

export default AppScreenPreviewActivity;
