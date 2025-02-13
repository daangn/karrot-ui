import { h } from "preact";
import { Result } from "@/features/design-system/ui/text-styles/result";
import {
  TextStyleMigrationStateProvider,
  useTextStyleMigration,
} from "@/features/design-system/ui/text-styles/context";
import { TextLayersList } from "@/features/design-system/ui/text-styles/list";
import { useCallback, useMemo } from "preact/hooks";
import { Footer } from "@/shared/components/panels";
import { Button } from "@create-figma-plugin/ui";
import { useMigration } from "@/features/design-system/ui/context";
import { Tooltip } from "@/shared/components/tooltip";

export function TextStylesSection() {
  return (
    <div className="flex flex-col grow overflow-y-hidden">
      <TextStyleMigrationStateProvider>
        <div className="flex grow overflow-y-hidden relative">
          <DoneBanner />
          <TextLayersList />
          <Result />
        </div>
        <TextStylesFooter />
      </TextStyleMigrationStateProvider>
    </div>
  );
}

function DoneBanner() {
  const { hasAllItemsSelectedNewTextStyleId } = useTextStyleMigration();

  const { showNextStep } = useMigration();

  if (!hasAllItemsSelectedNewTextStyleId) return null;

  return (
    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-neutral-800 text-white z-10 p-4 rounded-xl shadow flex flex-col gap-2">
      <p className="text-center">모든 텍스트 레이어에 새 텍스트 스타일이 적용되었습니다.</p>
      <Button fullWidth onClick={showNextStep}>
        다음 단계로
      </Button>
    </div>
  );
}

function TextStylesFooter() {
  const { results, applyTextStyle, requestSuggestions } = useTextStyleMigration();

  const remainingConnectableNodeCount = useMemo(() => {
    if (!results) return 0;

    return results
      .flatMap(({ items }) => items)
      .filter(
        ({ suggestions, selectedNewTextStyleId }) =>
          selectedNewTextStyleId === null && suggestions.length === 1,
      ).length;
  }, [results]);

  const bulkApply = useCallback(() => {
    if (!results) return;

    for (const { items } of results) {
      const suggestions = items[0].suggestions;
      if (!suggestions || suggestions.length !== 1) continue;

      applyTextStyle(
        items.map(({ textNode: { id } }) => id),
        suggestions[0].textStyle.id,
      );
    }
  }, [results, applyTextStyle]);

  return (
    <Footer>
      <Tooltip
        className="grow"
        label="추천 토큰이 1개인 항목에 자동으로 추천을 적용합니다. 추천이 없거나 2개 이상인 항목은 변경되지 않습니다."
      >
        <Button onClick={bulkApply} fullWidth disabled={remainingConnectableNodeCount === 0}>
          {remainingConnectableNodeCount}개 자동 연결
        </Button>
      </Tooltip>
      <Button secondary onClick={requestSuggestions} disabled={!results}>
        새로고침
      </Button>
    </Footer>
  );
}
