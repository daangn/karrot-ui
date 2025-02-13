import { useMigration } from "@/features/design-system/ui/context";
import {
  LayoutMigrationStateProvider,
  useLayoutMigration,
} from "@/features/design-system/ui/layouts/context";
import { LayersWithLayoutList } from "@/features/design-system/ui/layouts/list";
import { Result } from "@/features/design-system/ui/layouts/result";
import { Footer } from "@/shared/components/panels";
import { Tooltip } from "@/shared/components/tooltip";
import { Button } from "@create-figma-plugin/ui";
import { h } from "preact";
import { useCallback, useMemo } from "preact/hooks";

export function LayoutsSection() {
  return (
    <div className="flex flex-col grow overflow-y-hidden">
      <LayoutMigrationStateProvider>
        <div className="flex grow overflow-y-hidden relative">
          <DoneBanner />
          <LayersWithLayoutList />
          <Result />
        </div>
        <LayoutsFooter />
      </LayoutMigrationStateProvider>
    </div>
  );
}

function DoneBanner() {
  const { hasAllItemsSelectedNewLayoutVariableId } = useLayoutMigration();

  const { showNextStep } = useMigration();

  if (!hasAllItemsSelectedNewLayoutVariableId) return null;

  return (
    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-neutral-800 text-white z-10 p-4 rounded-xl shadow flex flex-col gap-2">
      <p className="text-center">모든 레이어에 새 토큰이 적용되었습니다.</p>
      <Button fullWidth onClick={showNextStep}>
        다음 단계로
      </Button>
    </div>
  );
}

function LayoutsFooter() {
  const { results, applyLayoutVariable, requestSuggestions } = useLayoutMigration();

  const remainingConnectableNodeCount = useMemo(() => {
    if (!results) return 0;

    return results
      .filter(({ suggestions }) => suggestions.length === 1)
      .flatMap(({ consumers }) => consumers)
      .filter(({ selectedNewVariableId }) => selectedNewVariableId === null).length;
  }, [results]);

  const bulkApply = useCallback(() => {
    if (!results) return;

    for (const { oldValue, consumers, suggestions } of results) {
      if (suggestions.length !== 1) continue;

      applyLayoutVariable({
        oldValue,
        consumerNodeIds: consumers.map(({ node: { id } }) => id),
        variableId: suggestions[0].variable.id,
      });
    }
  }, [results, applyLayoutVariable]);

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
