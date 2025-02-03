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

declare module "@stackflow/config" {
  interface Register {
    Demo: unknown;
  }
}

export type Article = {
  id: number;
  title: string;
  content: string;
  author: string;
  categoryId: string;
  createdAt: string;
  isPopular?: boolean;
};

export type Category = {
  id: string;
  name: string;
};

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

export const CATEGORIES: Category[] = [
  { id: "travel", name: "여행" },
  { id: "food", name: "음식" },
  { id: "lifestyle", name: "라이프스타일" },
];

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: "산토리니의 일몰",
    content:
      "에게해의 푸른 바다와 하얀 건물들 사이로 지는 석양이 만드는 황홍빛 풍경. 산토리니에서 가장 로맨틱한 순간을 만날 수 있다.",
    author: "mollit",
    categoryId: "travel",
    createdAt: "2023-02-15T09:30:00Z",
  },

  {
    id: 2,
    title: "교토의 대나무 숲",
    content:
      "아라시야마의 대나무 숲길을 걸으며 느끼는 고요함. 바람에 흔들리는 대나무 소리가 마음을 평온하게 만든다.",
    author: "sunt",
    categoryId: "travel",
    createdAt: "2023-05-22T14:15:00Z",
    isPopular: true,
  },

  {
    id: 3,
    title: "알프스 하이킹 가이드",
    content:
      "스위스 알프스의 초보자용 트레킹 코스. 그린델발트에서 시작하여 아이거 북벽을 감상하며 2시간 코스로 즐길 수 있다.",
    author: "ullamco",
    categoryId: "travel",
    createdAt: "2023-10-15T12:10:00Z",
  },
  {
    id: 4,
    title: "홈메이드 파스타의 비밀",
    content:
      "신선한 면과 소스만 있다면 레스토랑 급 파스타를 만들 수 있다. 올리브오일과 마늘의 양이 맛을 결정한다.",
    author: "dolore",
    categoryId: "food",
    createdAt: "2023-03-30T16:20:00Z",
  },

  {
    id: 5,
    title: "제철 딸기 고르는 법",
    content:
      "봄철 딸기는 꼭지가 선명한 초록색이어야 한다. 윤기 나는 빨간색과 은은한 향기가 좋은 딸기의 조건.",
    author: "aliqua",
    categoryId: "food",
    createdAt: "2023-06-18T10:05:00Z",
  },

  {
    id: 6,
    title: "커피 브루잉 팁",
    content:
      "물 온도 92도, 분쇄도는 중간, 추출 시간 3분이 기본. 원두 양은 물 200ml당 15g이 황금비율이다.",
    author: "consectetur",
    categoryId: "food",
    createdAt: "2023-09-25T13:40:00Z",
  },

  {
    id: 7,
    title: "미니멀 홈 데코",
    content:
      "불필요한 소품은 과감히 정리하고, 화이트 톤의 기본 가구만으로 깔끔한 공간을 연출할 수 있다.",
    author: "adipisicing",
    categoryId: "lifestyle",
    createdAt: "2023-04-12T15:55:00Z",
    isPopular: true,
  },

  {
    id: 8,
    title: "아침 루틴의 힘",
    content:
      "하루를 5분 일찍 시작하는 것부터. 따뜻한 물 한잔과 스트레칭으로 활기찬 아침을 맞이하자.",
    author: "elit",
    categoryId: "lifestyle",
    createdAt: "2023-07-28T08:25:00Z",
    isPopular: true,
  },

  {
    id: 9,
    title: "실내 공기 정화 식물",
    content:
      "스투키, 스파티필름, 산세베리아는 관리가 쉽고 공기정화 능력이 뛰어난 대표적인 실내식물이다.",
    author: "exercitation",
    categoryId: "lifestyle",
    createdAt: "2023-08-07T11:45:00Z",
  },

  {
    id: 10,
    title: "독서 습관 만들기",
    content:
      "하루 10페이지부터 시작하자. 취침 전 20분 독서는 수면의 질도 높여주는 일석이조 습관이다.",
    author: "magna",
    categoryId: "lifestyle",
    createdAt: "2023-12-03T17:35:00Z",
    isPopular: true,
  },
];

export default DemoActivity;
