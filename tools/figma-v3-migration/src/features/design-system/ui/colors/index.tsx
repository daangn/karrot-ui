import {
  ColorMigrationStateProvider,
  useColorMigration,
} from "@/features/design-system/ui/colors/context";
import { LayersWithColorList } from "@/features/design-system/ui/colors/list";
import { Result } from "@/features/design-system/ui/colors/result";
import { useMigration } from "@/features/design-system/ui/context";
import { Footer } from "@/shared/components/panels";
import { Tooltip } from "@/shared/components/tooltip";
import { SEED_V3_LIBRARY_VARIABLE_PREFIXES } from "@/shared/constants";
import { usePreferences } from "@/shared/contexts/PreferencesProvider";
import { Button } from "@create-figma-plugin/ui";
import { h } from "preact";
import { useCallback, useMemo } from "preact/hooks";

export function ColorsSection() {
  return (
    <div className="flex flex-col grow overflow-y-hidden">
      <ColorMigrationStateProvider>
        <div className="flex grow overflow-y-hidden relative">
          <DoneBanner />
          <LayersWithColorList />
          <Result />
        </div>
        <ColorsFooter />
      </ColorMigrationStateProvider>
    </div>
  );
}

function DoneBanner() {
  const { hasAllItemsSelectedNewColorVariableId } = useColorMigration();

  const { showNextStep } = useMigration();

  if (!hasAllItemsSelectedNewColorVariableId) return null;

  return (
    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-neutral-800 text-white z-10 p-4 rounded-xl shadow flex flex-col gap-2">
      <p className="text-center">모든 레이어에 새 색상 토큰이 적용되었습니다.</p>
      <Button fullWidth onClick={showNextStep}>
        다음 단계로
      </Button>
    </div>
  );
}

function ColorsFooter() {
  const { results, applyColorVariable, requestSuggestions } = useColorMigration();
  const { preferences } = usePreferences();

  const remainingConnectableNodeCount = useMemo(() => {
    if (!results) return 0;

    return results
      .filter(({ oldValue, suggestions }) => {
        if (suggestions.length === 1) return true;

        // XXX: 하드코딩한 로직
        // V2 컴포넌트도 컬러 검사 옵션이 켜져 있는 경우에는
        // 추천 2+인 경우 자동 연결 하지 않고 사용자가 직접 선택하도록 함
        if (preferences?.["inspect-v2-components-on-color-migration"]) return false;

        // V2 컴포넌트도 컬러 검사 옵션이 *꺼져* 있는 경우에는
        // gray-900 -> gray-1000 + 시맨틱 토큰 조합에서 추천 2+인 경우에도 자동 연결 (시맨틱으로 연결)

        if (oldValue.type === "style" && oldValue.style.name.endsWith("gray-900")) {
          const semanticSuggestions = suggestions.filter(
            ({ variable: { name } }) =>
              name.startsWith(SEED_V3_LIBRARY_VARIABLE_PREFIXES.COLOR.BG) ||
              name.startsWith(SEED_V3_LIBRARY_VARIABLE_PREFIXES.COLOR.FG) ||
              name.startsWith(SEED_V3_LIBRARY_VARIABLE_PREFIXES.COLOR.STROKE),
          );

          return semanticSuggestions.length === 1;
        }

        return false;
      })
      .flatMap(({ consumers }) => consumers)
      .filter(({ selectedNewVariableId }) => selectedNewVariableId === null).length;
  }, [results, preferences?.["inspect-v2-components-on-color-migration"]]);

  const bulkApply = useCallback(() => {
    if (!results) return;

    for (const { oldValue, consumers, suggestions } of results) {
      if (suggestions.length !== 1) {
        // XXX: 하드코딩한 로직
        // V2 컴포넌트도 컬러 검사 옵션이 켜져 있는 경우에는
        // 추천 2+인 경우 자동 연결 하지 않고 사용자가 직접 선택하도록 함
        if (preferences?.["inspect-v2-components-on-color-migration"]) continue;

        // V2 컴포넌트도 컬러 검사 옵션이 *꺼져* 있는 경우에는
        // gray-900 -> gray-1000 + 시맨틱 토큰 조합에서 추천 2+인 경우에도 자동 연결 (시맨틱으로 연결)
        if (oldValue.type === "style" && oldValue.style.name.endsWith("gray-900")) {
          const semanticSuggestions = suggestions.filter(
            ({ variable: { name } }) =>
              name.startsWith(SEED_V3_LIBRARY_VARIABLE_PREFIXES.COLOR.BG) ||
              name.startsWith(SEED_V3_LIBRARY_VARIABLE_PREFIXES.COLOR.FG) ||
              name.startsWith(SEED_V3_LIBRARY_VARIABLE_PREFIXES.COLOR.STROKE),
          );

          if (semanticSuggestions.length !== 1) continue;

          applyColorVariable({
            oldValue,
            consumerNodeIds: consumers.map(({ node: { id } }) => id),
            variableId: semanticSuggestions[0].variable.id,
          });
        }

        continue;
      }

      applyColorVariable({
        oldValue,
        consumerNodeIds: consumers.map(({ node: { id } }) => id),
        variableId: suggestions[0].variable.id,
      });
    }
  }, [results, applyColorVariable, preferences?.["inspect-v2-components-on-color-migration"]]);

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
