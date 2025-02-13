import { InstanceBadge } from "@/shared/components/badges";
import type {
  FocusNodeEventHandler,
  SerializedLayoutVariablesSuggestionsResults,
} from "@/features/design-system/types";
import { emit } from "@create-figma-plugin/utilities";
import { Fragment, h } from "preact";
import { useEffect, useMemo, useRef } from "preact/hooks";
import { List, ListGroupButton, ListItemButton } from "@/shared/components/list";
import { Progress } from "@/shared/components/progress";
import { LeftPanel } from "@/shared/components/panels";
import { useMigration } from "@/features/design-system/ui/context";
import { type ListEntry, getOldValueId } from "@/features/design-system/ui/layouts/context";
import { useLayoutMigration } from "@/features/design-system/ui/layouts/context";
import { LoadingIndicator } from "@/features/design-system/ui/components/loading-indicator";
import { Tooltip } from "@/shared/components/tooltip";

export function LayersWithLayoutList() {
  const { results, progress } = useLayoutMigration();

  if (!results) return <LoadingIndicator />;

  return (
    <LeftPanel>
      <List>
        {results.map(({ oldValue, consumers }) => (
          <Fragment key={getOldValueId(oldValue)}>
            <LayerGroup groupId={getOldValueId(oldValue)} />
            {consumers.map((consumer) => (
              <Layer key={consumer.node.id} groupId={getOldValueId(oldValue)} consumer={consumer} />
            ))}
          </Fragment>
        ))}
      </List>
      <Tooltip
        label={
          progress.left === 0
            ? "모든 항목이 새 토큰을 사용하고 있습니다."
            : `${progress.left}개의 항목이 아직 Detach 상태입니다.`
        }
      >
        <Progress
          value={progress.percent}
          max={100}
          label={progress.left === 0 ? "완료" : `${progress.left}개 남음`}
        />
      </Tooltip>
    </LeftPanel>
  );
}

function LayerGroup({ groupId }: Pick<ListEntry, "groupId">) {
  const { results, currentlyViewing, setCurrentlyViewingEntryId } = useLayoutMigration();
  if (!results) return null;

  const group = results.find(({ oldValue }) => groupId === getOldValueId(oldValue));
  if (!group) return null;

  const isCurrentlyViewing = useMemo(
    () =>
      currentlyViewing
        ? getOldValueId(currentlyViewing.group.oldValue) === groupId && !currentlyViewing.item
        : false,
    [currentlyViewing, groupId],
  );

  const isAllItemsSelected = useMemo(
    () => group.consumers.every(({ selectedNewVariableId }) => selectedNewVariableId),
    [group],
  );

  const groupRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    if (isCurrentlyViewing && groupRef.current) {
      groupRef.current.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, [isCurrentlyViewing]);

  return (
    <ListGroupButton
      onClick={() => {
        setCurrentlyViewingEntryId({ groupId });
        emit<FocusNodeEventHandler>("FOCUS_NODE", {
          nodeIds: group.consumers.map(({ node }) => node.id),
        });
      }}
      ref={groupRef}
      isFocused={
        isCurrentlyViewing ||
        (group.consumers.length === 1 &&
          currentlyViewing?.item?.node.id === group.consumers[0].node.id &&
          getOldValueId(currentlyViewing.group.oldValue) === groupId)
      }
      isDimmed={isAllItemsSelected}
      title={`${group.oldValue}`}
    />
  );
}

function Layer({
  groupId,
  consumer,
}: {
  groupId: ListEntry["groupId"];
  consumer: SerializedLayoutVariablesSuggestionsResults[number]["consumers"][number];
}) {
  const { setCurrentlyViewingEntryId, currentlyViewing } = useLayoutMigration();

  const { node, closestInstanceNode, selectedNewVariableId } = consumer;

  const isCurrentlyViewing = useMemo(
    () =>
      currentlyViewing?.item?.node.id === node.id &&
      getOldValueId(currentlyViewing.group.oldValue) === groupId,
    [currentlyViewing, node.id, groupId],
  );

  const itemRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    if (isCurrentlyViewing && itemRef.current) {
      itemRef.current.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, [isCurrentlyViewing]);

  return (
    <ListItemButton
      onClick={() => {
        setCurrentlyViewingEntryId({ groupId, itemId: node.id });
        emit<FocusNodeEventHandler>("FOCUS_NODE", { nodeIds: [node.id] });
      }}
      ref={itemRef}
      isFocused={
        isCurrentlyViewing ||
        (!currentlyViewing?.item && currentlyViewing
          ? getOldValueId(currentlyViewing.group.oldValue) === groupId
          : false)
      }
      isDimmed={!!selectedNewVariableId}
      title={node.name}
      {...(closestInstanceNode && { endElement: <InstanceBadge /> })}
    />
  );
}
