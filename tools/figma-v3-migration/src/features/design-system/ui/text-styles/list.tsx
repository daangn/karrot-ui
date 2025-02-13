import { InstanceBadge } from "@/shared/components/badges";
import {
  useTextStyleMigration,
  type ListEntry,
} from "@/features/design-system/ui/text-styles/context";
import type {
  FocusNodeEventHandler,
  SerializedTextStyleSuggestionsResults,
} from "@/features/design-system/types";
import { emit } from "@create-figma-plugin/utilities";
import { Fragment, h } from "preact";
import { useEffect, useMemo, useRef } from "preact/hooks";
import { List, ListGroupButton, ListItemButton } from "@/shared/components/list";
import { Progress } from "@/shared/components/progress";
import { LeftPanel } from "@/shared/components/panels";
import { LoadingIndicator } from "@/features/design-system/ui/components/loading-indicator";
import { Tooltip } from "@/shared/components/tooltip";

export function TextLayersList() {
  const { results, progress } = useTextStyleMigration();

  if (!results) return <LoadingIndicator />;

  return (
    <LeftPanel>
      <List>
        {results.map(({ groupId, items }) => (
          <Fragment key={groupId}>
            <TextLayerGroup groupId={groupId} />
            {items.map((item) => (
              <TextLayer key={item.textNode.id} groupId={groupId} item={item} />
            ))}
          </Fragment>
        ))}
      </List>
      <Tooltip
        label={
          progress.left === 0
            ? "모든 항목이 새 텍스트 스타일을 사용하고 있습니다."
            : `${progress.left}개의 항목이 아직 V2 텍스트 스타일을 사용 중이거나 Detach 상태입니다.`
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

function TextLayerGroup({ groupId }: Pick<ListEntry, "groupId">) {
  const { results, setCurrentlyViewingEntryId, currentlyViewing } = useTextStyleMigration();
  if (!results) return null;

  const group = results.find(({ groupId: id }) => id === groupId);
  if (!group) return null;

  const isCurrentlyViewing = useMemo(
    () => currentlyViewing?.group?.groupId === groupId && !currentlyViewing?.item,
    [currentlyViewing, groupId],
  );

  const isAllItemsSelected = useMemo(
    () =>
      group.items.every(({ selectedNewTextStyleId }) => selectedNewTextStyleId !== null) ?? false,
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
          nodeIds: group.items.map(({ textNode }) => textNode.id),
        });
      }}
      ref={groupRef}
      isFocused={
        isCurrentlyViewing ||
        (group.items.length === 1 &&
          currentlyViewing?.item?.textNode.id === group.items[0].textNode.id)
      }
      isDimmed={isAllItemsSelected}
      title={groupId}
    />
  );
}

function TextLayer({
  groupId,
  item,
}: {
  groupId: ListEntry["groupId"];
  item: SerializedTextStyleSuggestionsResults[number];
}) {
  const { setCurrentlyViewingEntryId, currentlyViewing } = useTextStyleMigration();

  const { textNode, closestInstanceNode, selectedNewTextStyleId } = item;

  const isCurrentlyViewing = useMemo(
    () => currentlyViewing?.item?.textNode.id === textNode.id,
    [currentlyViewing, textNode.id],
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
        setCurrentlyViewingEntryId({ groupId, itemId: textNode.id });
        emit<FocusNodeEventHandler>("FOCUS_NODE", { nodeIds: [textNode.id] });
      }}
      ref={itemRef}
      isFocused={
        isCurrentlyViewing ||
        (!currentlyViewing?.item && currentlyViewing?.group?.groupId === groupId)
      }
      isDimmed={!!selectedNewTextStyleId}
      title={textNode.characters}
      {...(closestInstanceNode && { endElement: <InstanceBadge /> })}
    />
  );
}
