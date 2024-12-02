import { useEffect, useMemo, useRef, useState } from "react";

import { AppScreen } from "@stackflow/plugin-basic-ui";
import type { ActivityComponentType } from "@stackflow/react";

import IconAddRegular from "@seed-design/icon/IconAddRegular";
import {
  actionButton,
  actionButtonVariantMap,
  type ActionButtonSlotName,
  type ActionButtonVariantProps,
} from "@seed-design/recipe/actionButton";

import { ComponentShowcase } from "../components/ComponentShowcase";
import ControlPanel from "../components/ControlPanel";
import { ActionButton } from "../design-system/ui/action-button";
import { getGridColumnCount, getVariantCombination } from "../helper";

const ActivityActionButton: ActivityComponentType = () => {
  const [variants, setVariants] = useState<Required<ActionButtonVariantProps>>({
    variant: "brandSolid",
    size: "xsmall",
    layout: "withText",
  });
  const [measurements, setMeasurements] =
    useState<Record<ActionButtonSlotName, DOMRect | undefined>>();
  const [highlightedSlot, setHighlightedSlot] = useState<ActionButtonSlotName | null>(null);

  const controlPanelRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);

  const variantCombination = useMemo(
    () => getVariantCombination(actionButtonVariantMap, variants),
    [variants],
  );
  const gridColumns = getGridColumnCount(actionButtonVariantMap, variants);
  const classNames = useMemo(() => actionButton(variantCombination[0]), [variantCombination]);
  const slots = useMemo(() => Object.keys(classNames) as ActionButtonSlotName[], [classNames]);

  function getMeasurements(slot: ActionButtonSlotName) {
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
      ) as Record<ActionButtonSlotName, DOMRect | undefined>,
    );
  }

  useEffect(() => {
    updateMeasurements();
  }, [highlightedSlot]);

  return (
    <AppScreen appBar={{ title: "ActionButton" }}>
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
            <ActionButton key={JSON.stringify(variant)} {...variant}>
              {variant.layout === "withText" ? "야옹" : <IconAddRegular />}
            </ActionButton>
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
          variantMap={actionButtonVariantMap}
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

export default ActivityActionButton;
