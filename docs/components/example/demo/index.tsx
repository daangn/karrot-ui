"use client";

import { useMemo, useState } from "react";
import type { ActivityComponentType } from "@stackflow/react/future";
import { IconChevronDownFill, IconPenHorizlineFill } from "@daangn/react-monochrome-icon";

import { AppBar, AppBarCloseButton, AppBarMain, AppBarRight } from "seed-design/ui/app-bar";
import { AppScreen, AppScreenContent } from "seed-design/ui/app-screen";
import { Flex, Inline, Stack } from "seed-design/ui/layout";
import { ControlChip } from "seed-design/ui/control-chip";
import { Tabs, TabTrigger, TabTriggerList } from "seed-design/ui/tabs";
import { IdentityPlaceholder } from "seed-design/ui/identity-placeholder";
import { Avatar } from "seed-design/ui/avatar";
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
import { ExtendedFab } from "seed-design/ui/extended-fab";

import { ARTICLES, CATEGORIES } from "./data";
import { type Article } from "./types";

declare module "@stackflow/config" {
  interface Register {
    Demo: unknown;
  }
}

const TABS = [
  { label: "추천", value: "recommendations" },
  { label: "구독", value: "subscriptions" },
] as const satisfies {
  label: string;
  value: string;
}[];

type Tab = (typeof TABS)[number]["value"];

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

const DemoActivity: ActivityComponentType<"Demo"> = () => {
  const [tab, setTab] = useState<Tab>("recommendations");

  return (
    <SnackbarProvider>
      <style
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{
          __html: "::-webkit-scrollbar{display:none}",
        }}
      />
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
            {tab === "recommendations" && <HomeTab />}
            {tab === "subscriptions" && (
              <ErrorState
                title="구독한 글이 없습니다."
                description="추천 글을 확인해보세요."
                primaryActionProps={{
                  children: "추천 글 보기",
                  onClick: () => setTab("recommendations"),
                }}
              />
            )}
          </Tabs>
        </AppScreenContent>
      </AppScreen>
    </SnackbarProvider>
  );
};

export function HomeTab() {
  const [currentFilterBottomSheet, setCurrentFilterBottomSheet] = useState<Filter | null>(null);

  const defaultFilters = useMemo(
    () => ({
      category: [],
      location: [],
      author: [],
      createdAt: [],
    }),
    [],
  );

  const [selectedFilters, setSelectedFilters] = useState<Record<Filter, string[]>>(defaultFilters);

  const adapter = useSnackbarAdapter();

  const onUnavailableFilterClick = () =>
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

  const filteredArticles = useMemo(() => {
    let filtered = ARTICLES;

    if (selectedFilters.category?.length) {
      filtered = ARTICLES.filter((article) =>
        selectedFilters.category?.includes(article.categoryId),
      );
    }

    // XXX: Add more filters if needed

    return filtered;
  }, [selectedFilters]);

  const handleFilterConfirm = (filter: Filter, values: string[]) => {
    setSelectedFilters((prev) => ({ ...prev, [filter]: values }));
  };

  return (
    <Stack gap="spacingY.componentDefault" paddingTop="s4" paddingBottom="s16">
      <ExtendedFab
        prefixIcon={<IconPenHorizlineFill />}
        style={{ position: "fixed", insetBlockEnd: "16px", insetInlineEnd: "16px" }}
      >
        글쓰기
      </ExtendedFab>
      <Flex gap="spacingX.betweenChips" paddingX="spacingX.globalGutter" overflowX="auto">
        {FILTERS.map(({ label, value }) => (
          <BottomSheetRoot
            key={value}
            closeOnEscape
            closeOnInteractOutside
            open={currentFilterBottomSheet === value}
            onOpenChange={(open) => setCurrentFilterBottomSheet(open ? value : null)}
          >
            {value === "category" ? (
              <BottomSheetTrigger asChild>
                <ControlChip.Button
                  size="medium"
                  layout="withText"
                  suffixIcon={<IconChevronDownFill />}
                  onClick={value !== "category" ? onUnavailableFilterClick : undefined}
                >
                  {selectedFilters[value]?.length
                    ? selectedFilters[value]
                        .map((id) => CATEGORIES.find((c) => c.id === id)?.name)
                        .join(", ") || label
                    : label}
                </ControlChip.Button>
              </BottomSheetTrigger>
            ) : (
              <ControlChip.Button
                size="medium"
                layout="withText"
                suffixIcon={<IconChevronDownFill />}
                onClick={onUnavailableFilterClick}
              >
                {label}
              </ControlChip.Button>
            )}
            <FilterBottomSheet
              filter={value}
              currentFilter={selectedFilters[value]}
              onClose={() => setCurrentFilterBottomSheet(null)}
              onConfirm={(values) => handleFilterConfirm(value, values)}
            />
          </BottomSheetRoot>
        ))}
      </Flex>
      <Stack gap="s4">
        {filteredArticles
          .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
          .map((article) => (
            <ArticleListItem key={article.id} {...article} />
          ))}
      </Stack>
    </Stack>
  );
}

export function FilterBottomSheet({
  filter,
  currentFilter,
  onClose,
  onConfirm,
}: {
  filter: Filter;
  currentFilter: string[];
  onClose: () => void;
  onConfirm: (values: string[]) => void;
}) {
  const options = useMemo(() => {
    switch (filter) {
      case "category":
        return CATEGORIES;
      // Add more cases for other filters if needed
      default:
        return [];
    }
  }, [filter]);

  const [selectedOptions, setSelectedOptions] = useState<string[]>(currentFilter);

  return (
    <BottomSheetContent title={FILTERS.find((f) => f.value === filter)?.label}>
      <BottomSheetBody>
        <Inline gap="s2">
          {options.map((option) => (
            <ControlChip.Toggle
              size="medium"
              layout="withText"
              key={option.id}
              checked={selectedOptions.includes(option.id)}
              onCheckedChange={(checked) => {
                setSelectedOptions((prev) =>
                  checked ? [...prev, option.id] : prev.filter((id) => id !== option.id),
                );
              }}
            >
              {option.name}
            </ControlChip.Toggle>
          ))}
        </Inline>
      </BottomSheetBody>
      <BottomSheetFooter>
        <ActionButton
          variant="neutralSolid"
          onClick={() => {
            onConfirm(selectedOptions);
            onClose();
          }}
        >
          완료
        </ActionButton>
      </BottomSheetFooter>
    </BottomSheetContent>
  );
}

type ArticleProps = Article & {};

export function ArticleListItem({
  title,
  categoryId,
  content,
  author,
  createdAt,
  isPopular,
}: ArticleProps) {
  const relativeDate = new Date(createdAt).toLocaleDateString("ko-KR", {
    month: "long",
    day: "numeric",
  });

  const categoryName = CATEGORIES.find((c) => c.id === categoryId)?.name;

  return (
    <Stack gap="s2_5" paddingX="spacingX.globalGutter" paddingY="s1">
      <Inline justifyContent="spaceBetween" alignItems="center">
        <Inline gap="s1_5" alignItems="center">
          <Avatar
            fallback={<IdentityPlaceholder identity="person" />}
            size="20"
            // FIXME
            style={{ zIndex: -1 }}
          />
          <Text textStyle="bodySmallStrong" color="fg.neutral">
            {author}
          </Text>
        </Inline>
      </Inline>
      <Stack gap="s2">
        <Stack gap="s1">
          <Text textStyle="bodyMediumStrong" color="fg.neutral" maxLines={1}>
            {title}
          </Text>
          <Text textStyle="bodySmallDefault" color="fg.neutralMuted" maxLines={2}>
            {content}
          </Text>
        </Stack>
        <Inline alignItems="center" gap="s2">
          {isPopular && (
            <Badge variant="outline" tone="brand">
              인기
            </Badge>
          )}
          <Text textStyle="bodySmallDefault" color="fg.neutralSubtle">
            {categoryName} ⸱ 서초2동 ⸱ {relativeDate}
          </Text>
        </Inline>
      </Stack>
    </Stack>
  );
}

export default DemoActivity;
