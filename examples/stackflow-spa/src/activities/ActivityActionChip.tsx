import { useEffect, useMemo, useRef, useState } from "react";

import { AppScreen } from "@stackflow/plugin-basic-ui";
import type { ActivityComponentType } from "@stackflow/react";

import IconAddRegular from "@seed-design/icon/IconAddRegular";
import {
  actionChip,
  actionChipVariantMap,
  type ActionChipSlotName,
  type ActionChipVariantProps,
} from "@seed-design/recipe/actionChip";

import { ComponentShowcase } from "../components/ComponentShowcase";
import ControlPanel from "../components/ControlPanel";
import { ActionChip } from "../design-system/ui/action-chip";
import { getGridColumnCount, getVariantCombination } from "../helper";

const ActivityActionChip: ActivityComponentType = () => {
  const [variants, setVariants] = useState<Required<ActionChipVariantProps>>({
    size: "medium",
    layout: "withText",
  });
  const [measurements, setMeasurements] =
    useState<Record<ActionChipSlotName, DOMRect | undefined>>();
  const [highlightedSlot, setHighlightedSlot] = useState<ActionChipSlotName | null>(null);

  const controlPanelRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);

  const variantCombination = useMemo(
    () => getVariantCombination(actionChipVariantMap, variants),
    [variants],
  );
  const gridColumns = getGridColumnCount(actionChipVariantMap, variants);
  const classNames = useMemo(() => actionChip(variantCombination[0]), [variantCombination]);
  const slots = useMemo(() => Object.keys(classNames) as ActionChipSlotName[], [classNames]);

  function getMeasurements(slot: ActionChipSlotName) {
    const className = classNames[slot];
    return screenRef.current
      ?.querySelector(`.${className.split(" ").join(".")}`)
      ?.getBoundingClientRect();
  }

  function updateMeasurements() {
    setMeasurements(
      Object.fromEntries(
        slots.map((slot) => {
          return [slot, getMeasurements(slot)];
        }),
      ) as Record<ActionChipSlotName, DOMRect | undefined>,
    );
  }

  useEffect(() => {
    updateMeasurements();
  }, [highlightedSlot]);

  return (
    <AppScreen appBar={{ title: "ActionChip" }}>
      <div
        ref={screenRef}
        style={{
          overflow: "auto",
          height: "calc(100vh - var(--stackflow-plugin-basic-ui-app-bar-height))",
          paddingBottom: controlPanelRef.current?.clientHeight,
        }}
      >
        <ComponentShowcase gridColumns={gridColumns}>
          {variantCombination.map((variant) => (
            <ActionChip key={JSON.stringify(variant)} {...variant}>
              {variant.layout === "withText" ? "야옹" : <IconAddRegular />}
            </ActionChip>
          ))}
        </ComponentShowcase>
        {measurements ? (
          <div>
            {slots
              .filter((slot) => !!measurements[slot])
              .map((slot) => (
                <div key={slot} onClick={() => setHighlightedSlot(slot)}>
                  <span>{slot}</span>
                  <span>
                    {measurements[slot]?.width} x {measurements[slot]?.height}
                  </span>
                </div>
              ))}
          </div>
        ) : null}
        {highlightedSlot && measurements?.[highlightedSlot] ? (
          <div
            style={{
              position: "fixed",
              top: measurements[highlightedSlot].top - 44,
              left: measurements[highlightedSlot].left,
              width: measurements[highlightedSlot].width,
              height: measurements[highlightedSlot].height,
              border: "2px solid red",
              pointerEvents: "none",
            }}
          />
        ) : null}
        <ControlPanel
          ref={controlPanelRef}
          variantMap={actionChipVariantMap}
          value={variants}
          onChange={(variant, value) => {
            setVariants({
              ...variants,
              [variant]: value,
            });
          }}
        />
      </div>
    </AppScreen>
  );
};

export default ActivityActionChip;
