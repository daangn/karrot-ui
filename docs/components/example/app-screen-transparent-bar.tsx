"use client";

import { Flex } from "@/registry/ui/layout";
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
    AppScreenTransparentBar: unknown;
  }
}

const AppScreenTransparentBarActivity: ActivityComponentType<"AppScreenTransparentBar"> = () => {
  return (
    <AppScreen
      theme="cupertino"
      appBar={
        <AppBar tone="transparent" border={false}>
          <Left>
            <CloseButton />
          </Left>
          <Title>Transparent Bar</Title>
          <Right>
            <IconButton aria-label="Notification">
              <IconBellFill />
            </IconButton>
          </Right>
        </AppBar>
      }
    >
      <Flex height="full">
        <img src="/penguin.webp" alt="Penguin" />
      </Flex>
    </AppScreen>
  );
};

export default AppScreenTransparentBarActivity;
