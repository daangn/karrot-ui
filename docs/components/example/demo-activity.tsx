"use client";

import { useState } from "react";
import type { ActivityComponentType } from "@stackflow/react/future";
import { IconChevronDownFill, IconDot3VerticalLine } from "@daangn/react-monochrome-icon";

import { AppBar, AppBarCloseButton, AppBarMain, AppBarRight } from "seed-design/ui/app-bar";
import { AppScreen, AppScreenContent } from "seed-design/ui/app-screen";
import { Box, Flex, Inline, Stack } from "seed-design/ui/layout";
import { ControlChip } from "seed-design/ui/control-chip";
import { Tabs, TabTrigger, TabTriggerList } from "seed-design/ui/tabs";
import { IdentityPlaceholder } from "seed-design/ui/identity-placeholder";
import { Avatar, AvatarBadge } from "seed-design/ui/avatar";
import { Text } from "seed-design/ui/text";
import { Badge } from "seed-design/ui/badge";
import { ErrorState } from "seed-design/ui/error-state";
import {
  BottomSheetBody,
  BottomSheetRoot,
  BottomSheetContent,
  BottomSheetFooter,
  BottomSheetTrigger,
} from "seed-design/ui/bottom-sheet";
import { ActionButton } from "seed-design/ui/action-button";
import { Snackbar, SnackbarProvider, useSnackbarAdapter } from "seed-design/ui/snackbar";
import { Callout } from "seed-design/ui/callout";

declare module "@stackflow/config" {
  interface Register {
    Demo: unknown;
  }
}

const TABS = [
  { label: "근처", value: "around-me" },
  { label: "인기", value: "popular" },
] as const satisfies {
  label: string;
  value: string;
}[];

type Tab = (typeof TABS)[number]["value"];

const DemoActivity: ActivityComponentType<"Demo"> = () => {
  const [tab, setTab] = useState<Tab>("around-me");

  return (
    <SnackbarProvider>
      <AppScreen>
        <AppBar tone="layer">
          <AppBarMain>Foo</AppBarMain>
          <AppBarRight>
            <AppBarCloseButton />
          </AppBarRight>
        </AppBar>
        <AppScreenContent>
          <Tabs
            value={tab}
            onValueChange={(value) => setTab(value as Tab)}
            layout="fill"
            size="medium"
            fixTriggerList
            style={{ height: "100%", overflowY: "auto" }}
          >
            <TabTriggerList>
              {TABS.map(({ label, value }) => (
                <TabTrigger key={value} value={value}>
                  {label}
                </TabTrigger>
              ))}
            </TabTriggerList>
            {tab === "around-me" && <Tab />}
            {tab === "popular" && (
              <ErrorState
                title="인기 게시물이 없습니다."
                description="다른 카테고리를 선택해주세요."
                primaryActionProps={{
                  children: "근처 게시물 보기",
                  onClick: () => setTab("around-me"),
                }}
              />
            )}
          </Tabs>
        </AppScreenContent>
      </AppScreen>
    </SnackbarProvider>
  );
};

const FILTERS = [
  { label: "카테고리", value: "category" },
  { label: "동네", value: "location" },
  { label: "작성자", value: "author" },
  { label: "작성 시간", value: "createdAt" },
] as const satisfies {
  label: string;
  value: string;
}[];

type Filter = (typeof FILTERS)[number]["value"];

export function Tab() {
  const [openBottomSheet, setOpenBottomSheet] = useState<Filter | null>(null);
  const adapter = useSnackbarAdapter();

  const onUnAvailableFilterClick = () =>
    adapter.create({
      render: () => (
        <Snackbar
          message="카테고리로만 필터링할 수 있어요."
          variant="critical"
          actionLabel="확인"
          onAction={adapter.dismiss}
        />
      ),
    });

  return (
    <Stack gap="spacingY.componentDefault">
      <Box paddingX="spacingX.globalGutter" paddingY="s2">
        <Callout description="Callout description" title="Callout title" />
      </Box>
      <Flex
        gap="spacingX.betweenChips"
        paddingX="spacingX.globalGutter"
        paddingY="s0_5"
        overflowX="auto"
      >
        <BottomSheetRoot
          closeOnEscape
          closeOnInteractOutside
          open={openBottomSheet === "category"}
          onOpenChange={(open) => setOpenBottomSheet(open ? "category" : null)}
        >
          <BottomSheetTrigger asChild>
            <ControlChip.Button
              size="medium"
              layout="withText"
              suffixIcon={<IconChevronDownFill />}
            >
              카테고리
            </ControlChip.Button>
          </BottomSheetTrigger>
          <CategoryFilterBottomSheet onClose={() => setOpenBottomSheet(null)} />
        </BottomSheetRoot>
        <ControlChip.Button
          size="medium"
          layout="withText"
          suffixIcon={<IconChevronDownFill />}
          onClick={onUnAvailableFilterClick}
        >
          동네
        </ControlChip.Button>
        <ControlChip.Button
          size="medium"
          layout="withText"
          suffixIcon={<IconChevronDownFill />}
          onClick={onUnAvailableFilterClick}
        >
          작성자
        </ControlChip.Button>
        <ControlChip.Button
          size="medium"
          layout="withText"
          suffixIcon={<IconChevronDownFill />}
          onClick={onUnAvailableFilterClick}
        >
          작성 시간
        </ControlChip.Button>
      </Flex>
      <Stack gap="s3">
        {Array.from({ length: 5 }).map((_, index) => (
          <Item key={index} />
        ))}
      </Stack>
    </Stack>
  );
}

export function CategoryFilterBottomSheet({ onClose }: { onClose: () => void }) {
  return (
    <BottomSheetContent title="카테고리">
      <BottomSheetBody>Foo</BottomSheetBody>
      <BottomSheetFooter>
        <ActionButton variant="neutralSolid" onClick={onClose}>
          Foo
        </ActionButton>
      </BottomSheetFooter>
    </BottomSheetContent>
  );
}

export function Item() {
  return (
    <Stack gap="s2_5" paddingX="spacingX.globalGutter" paddingY="s1">
      <Inline justifyContent="spaceBetween" alignItems="center">
        <Inline gap="s1_5" alignItems="center">
          <Avatar fallback={<IdentityPlaceholder identity="person" />} size="20">
            <AvatarBadge>
              <Box background="bg.brandSolid" width="s1" height="s1" borderRadius="full" />
            </AvatarBadge>
          </Avatar>
          <Text textStyle="bodySmallStrong" color="fg.neutral">
            강남라따뚜이
          </Text>
        </Inline>
        {/* <IconDot3VerticalLine /> */}
      </Inline>
      <Stack gap="s2">
        <Stack gap="s1">
          <Text textStyle="bodyMediumStrong" color="fg.neutral" maxLines={1}>
            저만의 최애 픽 공유해요
          </Text>
          <Text textStyle="bodySmallDefault" color="fg.neutralMuted" maxLines={2}>
            Amet nostrud mollit fugiat occaecat ut nisi. Aliqua sit sunt irure dolore officia aliqua
            nostrud consectetur labore commodo non officia. Et velit deserunt culpa enim officia
            aute officia id irure. Ipsum culpa anim id labore do qui mollit magna commodo proident
            officia amet. Sit voluptate Lorem nulla fugiat non minim. Id et qui do labore dolore. Et
            adipisicing duis eiusmod minim ullamco ullamco.
          </Text>
        </Stack>
        <Inline alignItems="center" gap="s2">
          <Badge variant="outline" tone="brand">
            인기
          </Badge>
          <Text textStyle="bodySmallDefault" color="fg.neutralSubtle">
            맛집 ⸱ 서초2동 ⸱ 00분 전
          </Text>
        </Inline>
      </Stack>
    </Stack>
  );
}

export default DemoActivity;
