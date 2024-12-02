import type * as React from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { getGridColumnCount, getVariantCombination } from "../helper";
import { ComponentShowcase } from "./ComponentShowcase";
import ControlPanel from "./ControlPanel";

type ComponentAnalyzerProviderProps<T extends Record<string, string[]>, R extends string> = {
  variantsMap: T;

  initialVariants: { [K in keyof T]: T[K][number] };

  recipeFn: (variants: { [K in keyof T]: T[K][number] }) => Record<R, string>;

  render: (props: { [K in keyof T]: T[K][number] }) => React.ReactNode;
};

export function ComponentAnalyzer<T extends Record<string, string[]>, R extends string>(
  props: ComponentAnalyzerProviderProps<T, R>,
) {
  const { variantsMap, initialVariants, recipeFn, render } = props;

  const [variants, setVariants] = useState(initialVariants);
  const [measurements, setMeasurements] = useState<Record<R, DOMRect | undefined>>();
  const [highlightedSlot, setHighlightedSlot] = useState<R | null>(null);

  const controlPanelRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);

  const variantCombination = useMemo(
    () => getVariantCombination(variantsMap, variants),
    [variants, variantsMap],
  );
  const gridColumns = getGridColumnCount(variantsMap, variants);
  const classNames = useMemo(() => recipeFn(variantCombination[0]), [variantCombination, recipeFn]);
  const slots = useMemo(() => Object.keys(classNames) as R[], [classNames]);

  function getMeasurements(slot: R) {
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
      ) as Record<R, DOMRect | undefined>,
    );
  }

  useEffect(() => {
    updateMeasurements();
  }, [highlightedSlot, variantCombination]);

  return (
    <div
      ref={screenRef}
      style={{
        overflow: "auto",
        height: "calc(100vh - var(--stackflow-plugin-basic-ui-app-bar-height))",
        paddingBottom: controlPanelRef.current?.clientHeight,
      }}
    >
      <ComponentShowcase gridColumns={gridColumns}>
        {variantCombination.map((variant) => render(variant))}
      </ComponentShowcase>

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
        variantMap={variantsMap}
        value={variants}
        onValueChange={(variant, value) => {
          setVariants({
            ...variants,
            [variant]: value,
          });
        }}
        measurements={measurements}
        highlightedSlot={highlightedSlot}
        onSlotHighlight={(slot) => setHighlightedSlot(slot as R)}
      />
    </div>
  );
}
