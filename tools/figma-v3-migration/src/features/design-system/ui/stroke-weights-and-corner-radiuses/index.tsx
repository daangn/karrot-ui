import {
  StrokeWeightAndCornerRadiusMigrationStateProvider,
  useStrokeWeightAndCornerRadiusMigration,
} from "@/features/design-system/ui/stroke-weights-and-corner-radiuses/context";
import { LayersWithStrokeWeightAndCornerRadiusList } from "@/features/design-system/ui/stroke-weights-and-corner-radiuses/list";
import { Result } from "@/features/design-system/ui/stroke-weights-and-corner-radiuses/result";
import { Footer } from "@/shared/components/panels";
import { Tooltip } from "@/shared/components/tooltip";
import { Button } from "@create-figma-plugin/ui";
import { h } from "preact";
import { useCallback, useMemo } from "preact/hooks";

export function StrokeWeightAndCornerRadiusSection() {
  return (
    <div className="flex flex-col grow overflow-y-hidden">
      <StrokeWeightAndCornerRadiusMigrationStateProvider>
        <div className="flex grow overflow-y-hidden relative">
          <DoneBanner />
          <LayersWithStrokeWeightAndCornerRadiusList />
          <Result />
        </div>
        <StrokeWeightAndCornerRadiusFooter />
      </StrokeWeightAndCornerRadiusMigrationStateProvider>
    </div>
  );
}

function DoneBanner() {
  const { hasAllItemsSelectedNewStrokeWeightAndCornerRadiusVariableId } =
    useStrokeWeightAndCornerRadiusMigration();

  if (!hasAllItemsSelectedNewStrokeWeightAndCornerRadiusVariableId) return null;

  return (
    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-neutral-800 text-white z-10 p-4 rounded-xl shadow flex flex-col gap-2 text-center">
      이 레이어의 마이그레이션이 끝났습니다.
    </div>
  );
}

function StrokeWeightAndCornerRadiusFooter() {
  const { results, applyStrokeWeightAndCornerRadiusVariable, requestSuggestions } =
    useStrokeWeightAndCornerRadiusMigration();

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

      applyStrokeWeightAndCornerRadiusVariable({
        oldValue,
        consumerNodeIds: consumers.map(({ node: { id } }) => id),
        variableId: suggestions[0].variable.id,
      });
    }
  }, [results, applyStrokeWeightAndCornerRadiusVariable]);

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
