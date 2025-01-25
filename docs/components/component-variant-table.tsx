"use client";

import { AST, resolveToken, RootageCtx } from "@seed-design/rootage-core";
import { useMemo, useState } from "react";
import { TokenCell } from "./token-cell";
import { stringifyStates, stringifyTokenLit, stringifyValueLit } from "./rootage";

interface ComponentVariantTableProps {
  rootage: RootageCtx;
  variant: AST.VariantDeclaration;
}

interface TableItem {
  id: string;
  stateKey: string;
  slotKey: string;
  propertyKey: string;
  values: string[];
  resolvedValue: AST.ValueLit;
}

export function ComponentVariantTable(props: ComponentVariantTableProps) {
  const [hoveredRow, setHoveredRow] = useState<{
    slotKey: string;
    propertyKey: string;
  } | null>(null);

  const { rootage, variant } = props;
  const tableItems: TableItem[] = useMemo(
    () =>
      variant.body.flatMap((stateDecl) => {
        const stateKey = stringifyStates(stateDecl.states);
        return stateDecl.body.flatMap((slotDecl) => {
          const slotKey = slotDecl.slot;
          return slotDecl.body.map((propertyDecl) => {
            const propertyKey = propertyDecl.property;

            if (propertyDecl.value.kind === "TokenLit") {
              const { path, value } = resolveToken(rootage, stringifyTokenLit(propertyDecl.value), {
                global: "default",
                color: "theme-light",
              });
              return {
                id: `${stateKey}/${slotKey}/${propertyKey}`,
                stateKey,
                slotKey,
                propertyKey,
                values: [...path, stringifyValueLit(value)],
                resolvedValue: value,
              };
            }

            return {
              id: `${stateKey}/${slotKey}/${propertyKey}`,
              stateKey,
              slotKey,
              propertyKey,
              values: [stringifyValueLit(propertyDecl.value)],
              resolvedValue: propertyDecl.value,
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
        <TokenCell isExpanded={isExpanded} values={values} resolvedValue={resolvedValue} />
      </td>
    </tr>
  );
}
