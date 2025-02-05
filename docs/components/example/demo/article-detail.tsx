"use client";

import { useState } from "react";
import { CATEGORIES, type Article } from "@/components/example/demo/data";
import type { ActivityComponentType } from "@stackflow/react/future";
import { AppScreen, AppScreenContent } from "seed-design/ui/app-screen";
import {
  AppBar,
  AppBarBackButton,
  AppBarCloseButton,
  AppBarRight,
  AppBarLeft,
} from "seed-design/ui/app-bar";
import { Stack, Columns, Column, Box } from "seed-design/ui/layout";
import { Text } from "seed-design/ui/text";
import { Badge } from "seed-design/ui/badge";
import { SegmentedControl, SegmentedControlSegment } from "seed-design/ui/segmented-control";
import { Callout } from "seed-design/ui/callout";
import { TextField, TextFieldTextarea } from "seed-design/ui/text-field";
import { ErrorState } from "seed-design/ui/error-state";
import { ActionButton } from "seed-design/ui/action-button";
import { IconILowercaseSerifCircleFill } from "@daangn/react-monochrome-icon";
import img from "@/public/penguin.webp";
import { ArticleAuthor } from "./components/article-author";
import { formatDate } from "@/components/example/demo/utils/date";

declare module "@stackflow/config" {
  interface Register {
    "demo/article-detail": {
      article: Article;
    };
  }
}

const SEGMENTS = [
  { value: "popular", label: "인기" },
  { value: "latest", label: "최근" },
] as const satisfies { value: string; label: string }[];

const DemoArticleDetail: ActivityComponentType<"demo/article-detail"> = ({
  params: { article },
}) => {
  const categoryName = CATEGORIES.find((c) => c.id === article.categoryId)?.name;

  return (
    <AppScreen layerOffsetTop="none">
      <AppBar tone="transparent">
        <AppBarLeft>
          <AppBarBackButton />
        </AppBarLeft>
        <AppBarRight>
          <AppBarCloseButton />
        </AppBarRight>
      </AppBar>
      <AppScreenContent>
        <Stack gap="s4">
          <img src={img.src} alt="penguin" />
          <Stack gap="s6" paddingBottom="s4">
            <Stack
              paddingX="spacingX.globalGutter"
              gap="spacingY.componentDefault"
              alignItems="flexStart"
            >
              {article.isPopular && (
                <Badge variant="outline" tone="brand" size="large">
                  인기
                </Badge>
              )}
              <Stack gap="s1">
                <Text as="h1" textStyle="titleLargeDefault" color="fg.neutral">
                  {article.title}
                </Text>
                <Text
                  as="p"
                  textStyle="bodyMediumReadingDefault"
                  color="fg.neutralMuted"
                  style={{ wordBreak: "keep-all" }}
                >
                  {article.content}
                </Text>
              </Stack>
              <Columns width="full" alignItems="center">
                <Column>
                  <ArticleAuthor author={article.author} />
                </Column>
                <Column width="content">
                  <Text textStyle="labelMediumDefault" color="fg.neutralMuted">
                    {categoryName} ⸱ {formatDate(article.createdAt)}
                  </Text>
                </Column>
              </Columns>
            </Stack>
            <Stack paddingX="spacingX.globalGutter" gap="spacingY.componentDefault">
              <Callout
                tone="neutral"
                description="따뜻한 댓글을 남겨주세요."
                icon={<IconILowercaseSerifCircleFill />}
              />
              <SegmentedControl defaultValue={SEGMENTS[0].value} style={{ width: "100%" }}>
                {SEGMENTS.map((tab) => (
                  <SegmentedControlSegment key={tab.value} value={tab.value}>
                    {tab.label}
                  </SegmentedControlSegment>
                ))}
              </SegmentedControl>
              <Box paddingY="s3">
                <ErrorState title="댓글 없음" description="댓글이 없습니다." />
              </Box>
              <TextField maxGraphemeCount={200}>
                <TextFieldTextarea placeholder="저는…" />
              </TextField>
              <ActionButton>게시</ActionButton>
            </Stack>
          </Stack>
        </Stack>
      </AppScreenContent>
    </AppScreen>
  );
};

export default DemoArticleDetail;
