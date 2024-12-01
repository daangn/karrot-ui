"use client";

import { IconArrowDownLine } from "@daangn/react-monochrome-icon";
import {
  ComponentSpecExpression,
  resolveToken,
  RootageCtx,
  stringifyTokenExpression,
  stringifyValueExpression,
  ValueExpression,
} from "@seed-design/rootage-core";
import { HourglassIcon, LayersIcon, RulerIcon, SigmaIcon, SplineIcon } from "lucide-react";
import { Fragment, useMemo, useState } from "react";

interface ComponentVariantTableProps {
  rootage: RootageCtx;
  variant: ComponentSpecExpression[number];
}

interface TableItem {
  id: string;
  stateKey: string;
  slotKey: string;
  propertyKey: string;
  values: string[];
  resolvedValue: ValueExpression;
}

export function ComponentVariantTable(props: ComponentVariantTableProps) {
  const [hoveredRow, setHoveredRow] = useState<{
    slotKey: string;
    propertyKey: string;
  } | null>(null);

  const { rootage, variant } = props;
  const tableItems: TableItem[] = useMemo(
    () =>
      variant.state.flatMap((state) => {
        const stateKey = state.key.join(", ");
        return state.slot.flatMap((slot) => {
          const slotKey = slot.key;
          return slot.property.map((property) => {
            const propertyKey = property.key;

            if (property.value.type === "token") {
              const { path, value } = resolveToken(rootage, property.value, {
                global: "default",
                color: "theme-light",
              });
              return {
                id: `${stateKey}/${slotKey}/${propertyKey}`,
                stateKey,
                slotKey,
                propertyKey,
                values: [
                  ...path.map((node) => stringifyTokenExpression(node.token)),
                  stringifyValueExpression(value),
                ],
                resolvedValue: value,
              };
            }

            return {
              id: `${stateKey}/${slotKey}/${propertyKey}`,
              stateKey,
              slotKey,
              propertyKey,
              values: [stringifyValueExpression(property.value)],
              resolvedValue: property.value,
            };
          });
        });
      }),
    [rootage, variant],
  );

  return (
    <table>
      <colgroup>
        <col style={{ width: "15%" }} />
        <col style={{ width: "15%" }} />
        <col style={{ width: "15%" }} />
        <col />
      </colgroup>
      <thead>
        <tr>
          <th>상태</th>
          <th>슬롯</th>
          <th>속성</th>
          <th>값</th>
        </tr>
      </thead>
      <tbody>
        {tableItems.map((item, index) => {
          const prevItem = tableItems[index - 1];
          const shouldRenderState = item.stateKey !== prevItem?.stateKey;
          const shouldRenderSlot = shouldRenderState || item.slotKey !== prevItem?.slotKey;
          const shouldRenderProperty =
            shouldRenderSlot || item.propertyKey !== prevItem?.propertyKey;
          return (
            <ComponentVariantRow
              key={item.id}
              item={item}
              shouldRenderState={shouldRenderState}
              shouldRenderSlot={shouldRenderSlot}
              shouldRenderProperty={shouldRenderProperty}
              isHighlighted={
                hoveredRow?.slotKey === item.slotKey && hoveredRow?.propertyKey === item.propertyKey
              }
              onHoverStart={setHoveredRow}
              onHoverEnd={() => setHoveredRow(null)}
            />
          );
        })}
      </tbody>
    </table>
  );
}

function ComponentVariantRow(props: {
  item: TableItem;
  shouldRenderState: boolean;
  shouldRenderSlot: boolean;
  shouldRenderProperty: boolean;
  isHighlighted: boolean;
  onHoverStart: (details: { slotKey: string; propertyKey: string }) => void;
  onHoverEnd: () => void;
}) {
  const {
    item,
    shouldRenderState,
    shouldRenderSlot,
    shouldRenderProperty,
    isHighlighted,
    onHoverStart,
    onHoverEnd,
  } = props;
  const { id, stateKey, slotKey, propertyKey, values, resolvedValue } = item;

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <tr
      className={isHighlighted ? "bg-fd-muted cursor-pointer" : "cursor-pointer"}
      key={id}
      onMouseEnter={() => onHoverStart({ slotKey, propertyKey })}
      onMouseLeave={() => onHoverEnd()}
      onClick={() => setIsExpanded((prev) => !prev)}
    >
      <td>{shouldRenderState ? stateKey : null}</td>
      <td>{shouldRenderSlot ? slotKey : null}</td>
      <td>{shouldRenderProperty ? propertyKey : null}</td>
      <td className="align-middle">
        <div className="flex flex-col gap-1">
          {isExpanded ? (
            values.map((value, index) => (
              <Fragment key={value}>
                <div className="flex items-center gap-2">
                  <TypeIndicator resolvedValue={resolvedValue} /> {value}
                </div>
                {index < values.length - 1 ? (
                  <div>
                    <IconArrowDownLine className="w-3 h-3" />
                  </div>
                ) : null}
              </Fragment>
            ))
          ) : (
            <div className="flex items-center gap-2">
              <TypeIndicator resolvedValue={resolvedValue} /> {values[0]}
            </div>
          )}
        </div>
      </td>
    </tr>
  );
}

function TypeIndicator(props: { resolvedValue: ValueExpression }) {
  const { resolvedValue } = props;

  if (resolvedValue.type === "color") {
    return (
      <div
        className="w-4 h-4 rounded-full border"
        style={{ backgroundColor: resolvedValue.value }}
      />
    );
  }

  if (resolvedValue.type === "dimension") {
    return (
      <div>
        <RulerIcon className="w-4 h-4" />
      </div>
    );
  }

  if (resolvedValue.type === "duration") {
    return (
      <div>
        <HourglassIcon className="w-4 h-4" />
      </div>
    );
  }

  if (resolvedValue.type === "number") {
    return (
      <div>
        <SigmaIcon className="w-4 h-4" />
      </div>
    );
  }

  if (resolvedValue.type === "shadow") {
    return (
      <div>
        <LayersIcon className="w-4 h-4" />
      </div>
    );
  }

  if (resolvedValue.type === "cubicBezier") {
    return (
      <div>
        <SplineIcon className="w-4 h-4" />
      </div>
    );
  }

  return null;
}
