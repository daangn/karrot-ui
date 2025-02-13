import { h } from "preact";
import type { PropsWithChildren } from "preact/compat";
import { createContext } from "preact";
import { useState, useMemo, useCallback, useContext, useEffect } from "preact/hooks";
import type {
  SerializedVariable,
  SerializedSizingVariablesSuggestionsResults,
  SuggestSizingVariablesEventHandler,
  RequestSizingSuggestionsEventHandler,
  ApplySizingVariableEventHandler,
} from "@/features/design-system/types";
import { emit, on } from "@create-figma-plugin/utilities";
import type { FocusNodeEventHandler } from "@/features/design-system/types";
import { useMigration } from "@/features/design-system/ui/context";

export interface ListEntry {
  itemId?: string;
  groupId: string;
}

function useSizingMigrationState() {
  const { targets } = useMigration();

  const [results, setResults] = useState<SerializedSizingVariablesSuggestionsResults | null>(null);

  const [currentlyViewingEntryId, setCurrentlyViewingEntryId] = useState<ListEntry | null>(null);

  const hasAllItemsSelectedNewSizingVariableId = useMemo(() => {
    // 로딩 중인 경우 done은 아님
    if (!results) return false;

    if (
      results
        .flatMap(({ consumers }) => consumers)
        .every(({ selectedNewVariableId }) => selectedNewVariableId)
    ) {
      return true;
    }
  }, [results]);

  const progress = useMemo(() => {
    if (!results)
      return {
        total: 0,
        selected: 0,
        left: 0,
        percent: 0,
      };

    const total = results.reduce((acc, { consumers }) => acc + consumers.length, 0);
    const selected = results.reduce(
      (acc, { consumers }) =>
        acc + consumers.filter(({ selectedNewVariableId }) => !!selectedNewVariableId).length,
      0,
    );

    return {
      total,
      selected,
      left: total - selected,
      percent: Math.round((selected / total) * 100),
    };
  }, [results]);

  const currentlyViewing = useMemo(() => {
    if (!currentlyViewingEntryId || !results) return null;

    const group = results.find(
      ({ oldValue }) => currentlyViewingEntryId.groupId === getOldValueId(oldValue),
    );
    if (!group) return null;

    if (!currentlyViewingEntryId.itemId) return { group };

    const item = group.consumers.find(({ node }) => node.id === currentlyViewingEntryId.itemId);
    if (!item) return { group };

    return { item, group };
  }, [currentlyViewingEntryId, results]);

  const showNextListItemWithoutSelectedSizingVariable = useCallback(() => {
    if (!results || !currentlyViewing?.item) return;

    const currentlyViewingGroupId = getOldValueId(currentlyViewing.group.oldValue);

    const currentGroupIndex = results.findIndex(
      ({ oldValue }) => getOldValueId(oldValue) === currentlyViewingGroupId,
    );
    // should be unreachable
    if (currentGroupIndex === -1) return;

    const currentGroupItems = results[currentGroupIndex].consumers;

    const currentItemIndex = currentGroupItems.findIndex(
      ({ node }) => node.id === currentlyViewing.item?.node.id,
    );

    // 현재 그룹에서 다음 선택되지 않은 아이템 찾기
    const nextUnselectedItemIndex = currentGroupItems.findIndex(
      (item, index) => index > currentItemIndex && item.selectedNewVariableId === null,
    );

    // 현재 그룹에서 이후 선택 안 된 아이템이 있는 경우 해당 아이템 선택
    if (nextUnselectedItemIndex !== -1) {
      setCurrentlyViewingEntryId({
        groupId: currentlyViewingGroupId,
        itemId: currentGroupItems[nextUnselectedItemIndex].node.id,
      });

      return;
    }

    // 현재 그룹에서 이후 선택 안 된 아이템이 없는 경우 다음 그룹에서 선택 안 된 아이템 찾기
    for (let i = currentGroupIndex + 1; i < results.length; i++) {
      const result = results[i];
      const groupId = getOldValueId(result.oldValue);
      const groupItems = result.consumers;

      const unselectedItemIndex = groupItems.findIndex(
        (item) => item.selectedNewVariableId === null,
      );

      if (unselectedItemIndex !== -1) {
        setCurrentlyViewingEntryId({ groupId, itemId: groupItems[unselectedItemIndex].node.id });

        break;
      }
    }
  }, [results, currentlyViewing]);

  const showNextListGroupWithoutSelectedSizingVariable = useCallback(() => {
    if (!results || !currentlyViewing?.group) return;

    const currentGroupIndex = results.findIndex(
      ({ oldValue }) => getOldValueId(oldValue) === getOldValueId(currentlyViewing.group.oldValue),
    );

    // should be unreachable
    if (currentGroupIndex === -1) return;

    for (let i = currentGroupIndex + 1; i < results.length; i++) {
      const result = results[i];
      const groupId = getOldValueId(result.oldValue);
      const groupItems = result.consumers;

      if (groupItems.some((item) => item.selectedNewVariableId === null)) {
        setCurrentlyViewingEntryId({ groupId });

        break;
      }
    }
  }, [results, currentlyViewing]);

  const applySizingVariable = useCallback(
    ({
      oldValue,
      consumerNodeIds,
      variableId,
    }: {
      oldValue: SerializedSizingVariablesSuggestionsResults[number]["oldValue"];
      consumerNodeIds: SerializedSizingVariablesSuggestionsResults[number]["consumers"][number]["node"]["id"][];
      variableId: SerializedVariable["id"];
    }) => {
      setResults((prev) => {
        if (!prev) return prev;

        const oldValueFound = prev.find(
          ({ oldValue: oldValueToCompare }) =>
            getOldValueId(oldValue) === getOldValueId(oldValueToCompare),
        );
        if (!oldValueFound) return prev;

        const updatedConsumers = oldValueFound.consumers.map((consumer) => {
          if (consumerNodeIds.includes(consumer.node.id)) {
            return {
              ...consumer,
              selectedNewVariableId: variableId,
            };
          }

          return consumer;
        });

        return prev.map((group) =>
          getOldValueId(group.oldValue) === getOldValueId(oldValue)
            ? { ...group, consumers: updatedConsumers }
            : group,
        );
      });

      emit<ApplySizingVariableEventHandler>("APPLY_SIZING_VARIABLE", {
        oldValue,
        consumerNodeIds,
        variableId,
      });
    },
    [],
  );

  const requestSuggestions = useCallback(() => {
    setResults(null);

    emit<RequestSizingSuggestionsEventHandler>("REQUEST_SIZING_SUGGESTIONS", {
      nodeIds: targets.map(({ id }) => id),
    });
  }, [targets]);

  useEffect(() => {
    requestSuggestions();
  }, [requestSuggestions]);

  useEffect(() => {
    on<SuggestSizingVariablesEventHandler>("SUGGEST_SIZING_VARIABLES", ({ results }) => {
      setResults(results);
      if (results.length === 0) return;

      setCurrentlyViewingEntryId({
        groupId: getOldValueId(results[0].oldValue),
      });

      const firstGroupNodeIds = results[0].consumers.map(({ node }) => node.id);

      emit<FocusNodeEventHandler>("FOCUS_NODE", { nodeIds: firstGroupNodeIds });
    });
  }, []);

  return {
    results,
    hasAllItemsSelectedNewSizingVariableId,
    progress,
    setResults,
    currentlyViewing,
    setCurrentlyViewingEntryId,
    showNextListItemWithoutSelectedSizingVariable,
    showNextListGroupWithoutSelectedSizingVariable,
    applySizingVariable,
    requestSuggestions,
  };
}

const SizingMigrationStateContext = createContext<ReturnType<
  typeof useSizingMigrationState
> | null>(null);

export function SizingMigrationStateProvider({ children }: PropsWithChildren) {
  return (
    <SizingMigrationStateContext.Provider value={useSizingMigrationState()}>
      {children}
    </SizingMigrationStateContext.Provider>
  );
}

export function useSizingMigration() {
  const context = useContext(SizingMigrationStateContext);

  if (!context)
    throw new Error("useSizingMigration must be used within SizingMigrationStateProvider");

  return context;
}

export function getOldValueId(
  value: SerializedSizingVariablesSuggestionsResults[number]["oldValue"],
) {
  return `${value}`;
}
