"use client";

import { Flex } from "seed-design/ui/layout";
import { IconBellFill } from "@daangn/react-monochrome-icon";
import type { ActivityComponentType } from "@stackflow/react/future";
import {
  AppBar,
  AppScreen,
  CloseButton,
  IconButton,
  Left,
  Right,
  Title,
} from "seed-design/ui/app-screen";

declare module "@stackflow/config" {
  interface Register {
    AppScreenPreview: unknown;
  }
}

const AppScreenPreviewActivity: ActivityComponentType<"AppScreenPreview"> = () => {
  return (
    <AppScreen
      theme="cupertino"
      appBar={
        <AppBar>
          <Left>
            <CloseButton />
          </Left>
          <Title>Preview</Title>
          <Right>
            <IconButton aria-label="Notification">
              <IconBellFill />
            </IconButton>
          </Right>
        </AppBar>
      }
    >
      <Flex height="full" justifyContent="center" alignItems="center">
        Preview
      </Flex>
    </AppScreen>
  );
};

export default AppScreenPreviewActivity;
