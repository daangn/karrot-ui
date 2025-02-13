import type {
  SerializedColorVariablesSuggestionsResults,
  SerializedVariable,
} from "@/features/design-system/types";
import { InstanceBadge } from "@/shared/components/badges";
import { h } from "preact";
import { useMemo } from "preact/hooks";
import { RightPanel } from "@/shared/components/panels";
import { SuggestionCard } from "@/shared/components/buttons";
import { H1, H2 } from "@/shared/components/headings";
import { InstanceWarningBanner } from "@/shared/components/banners";
import {
  getOldValueName,
  getOldValueType,
  useColorMigration,
} from "@/features/design-system/ui/colors/context";
import { ColorChip } from "@/shared/components/color-chip";

export function Result() {
  const { currentlyViewing } = useColorMigration();

  if (currentlyViewing?.item) return <LayerResult />;
  if (currentlyViewing?.group) return <LayerGroupResult />;

  return null;
}

function LayerResult() {
  const { currentlyViewing, applyColorVariable } = useColorMigration();

  if (!currentlyViewing?.item) return null;

  const { oldValue, suggestions } = currentlyViewing.group;
  const { closestInstanceNode, node, properties, selectedNewVariableId } = currentlyViewing.item;

  return (
    <RightPanel>
      <div className="flex flex-col gap-1 p-2 pb-1 w-full">
        <div className="flex items-center gap-2">
          <H1>{node.name}</H1>
          <div className="flex gap-0.5 flex-none">
            {closestInstanceNode && <InstanceBadge label={closestInstanceNode.name} />}
          </div>
        </div>
        <H2>
          <span className="font-bold">{getOldValueType(oldValue)}</span>{" "}
          <span>{getOldValueName(oldValue)}</span>
        </H2>
        <div className="text-neutral-600">
          <span className="font-semibold">{properties.join(", ")}</span>에 사용되었어요
        </div>
      </div>
      <div className="grow flex flex-col gap-2 w-full p-1.5 pt-0.5">
        <div className="font-semibold text-neutral-600 p-1">
          {suggestions.length === 0 &&
            (oldValue.type === "style"
              ? "이 스타일은 더 이상 사용되지 않습니다. 디자인코어팀에 문의해주세요."
              : "추천된 Variable이 없습니다. 직접 설정해주세요.")}
          {suggestions.length > 0 && "이 레이어에 설정할 Variable을 선택하세요."}
        </div>
        {closestInstanceNode && (
          <InstanceWarningBanner closestInstanceNodeName={closestInstanceNode.name} />
        )}
        {suggestions.map((suggestion) => (
          <VariableSuggestionButton
            onClick={() =>
              applyColorVariable({
                oldValue,
                consumerNodeIds: [node.id],
                variableId: suggestion.variable.id,
              })
            }
            key={suggestion.variable.id}
            isSelected={selectedNewVariableId === suggestion.variable.id}
            suggestion={suggestion}
          />
        ))}
      </div>
    </RightPanel>
  );
}

function LayerGroupResult() {
  const { currentlyViewing, applyColorVariable } = useColorMigration();

  if (!currentlyViewing?.group) return null;

  const hasSelectedNodesWithinInstance = useMemo(
    () => currentlyViewing.group.consumers.some(({ closestInstanceNode }) => closestInstanceNode),
    [currentlyViewing.group.consumers],
  );

  const { oldValue, suggestions, consumers } = currentlyViewing.group;

  return (
    <RightPanel>
      <div className="flex flex-col gap-1 p-2 pb-1 w-full">
        <H1>{consumers.length}개 레이어</H1>
        <H2>
          <span className="font-bold">{getOldValueType(oldValue)}</span>{" "}
          <span>{getOldValueName(oldValue)}</span>
        </H2>
      </div>
      <div className="grow flex flex-col gap-2 w-full p-1.5 pt-0.5">
        <div className="font-semibold text-neutral-600 p-1">
          {suggestions.length === 0 &&
            (oldValue.type === "style"
              ? "이 스타일은 더 이상 사용되지 않습니다. 디자인코어팀에 문의해주세요."
              : "추천된 Variable이 없습니다. 직접 설정해주세요.")}
          {suggestions.length > 0 && "이 레이어에 설정할 Variable을 선택하세요."}
        </div>
        {hasSelectedNodesWithinInstance && <InstanceWarningBanner />}
        {suggestions.map((suggestion) => (
          <VariableSuggestionButton
            onClick={() =>
              applyColorVariable({
                oldValue,
                consumerNodeIds: consumers.map(({ node }) => node.id),
                variableId: suggestion.variable.id,
              })
            }
            key={suggestion.variable.id}
            suggestion={suggestion}
            isSelected={consumers.every(
              ({ selectedNewVariableId }) => selectedNewVariableId === suggestion.variable.id,
            )}
          />
        ))}
      </div>
    </RightPanel>
  );
}

function VariableSuggestionButton({
  isSelected,
  suggestion,
  onClick,
}: {
  isSelected?: boolean;
  suggestion: SerializedColorVariablesSuggestionsResults[number]["suggestions"][number];
  onClick: (variable: SerializedVariable) => void;
  disabled?: boolean;
}) {
  return (
    <SuggestionCard
      title={suggestion.variable.name}
      description={
        <div className="text-start flex items-center gap-1">
          <ColorChip backgroundColor={`#${suggestion.hex}`} />
          <span>#{suggestion.hex}</span>
          {suggestion.opacity !== 1 && (
            <span className="text-neutral-600">({Math.round(suggestion.opacity * 100)}%)</span>
          )}
        </div>
      }
      onButtonClick={() => onClick(suggestion.variable)}
      isSelected={isSelected}
    />
  );
}
