"use client";

import {
  ComponentSpecExpression,
  stringifyTokenExpression,
  stringifyValueExpression,
} from "@seed-design/rootage-core";
import { useState } from "react";

export function ComponentVariantTable(props: { variant: ComponentSpecExpression[number] }) {
  const [hoveredRow, setHoveredRow] = useState<{
    slotKey: string;
    propertyKey: string;
  } | null>(null);

  const { variant } = props;
  const tableItems = variant.state.flatMap((state) => {
    const stateKey = state.key.join(", ");
    return state.slot.flatMap((slot) => {
      const slotKey = slot.key;
      return slot.property.map((property) => {
        const propertyKey = property.key;
        const value = property.value;
        return {
          stateKey,
          slotKey,
          propertyKey,
          value,
        };
      });
    });
  });

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
        {tableItems.map(({ stateKey, slotKey, propertyKey, value }, index) => {
          const prevItem = tableItems[index - 1];
          const shouldRenderState = stateKey !== prevItem?.stateKey;
          const shouldRenderSlot = shouldRenderState || slotKey !== prevItem?.slotKey;
          const shouldRenderProperty = shouldRenderSlot || propertyKey !== prevItem?.propertyKey;
          return (
            <tr
              className={
                hoveredRow?.slotKey === slotKey && hoveredRow?.propertyKey === propertyKey
                  ? "bg-fd-muted"
                  : ""
              }
              key={`${stateKey}/${slotKey}/${propertyKey}`}
              onMouseEnter={() => setHoveredRow({ slotKey, propertyKey })}
              onMouseLeave={() => setHoveredRow(null)}
            >
              <td>{shouldRenderState ? stateKey : null}</td>
              <td>{shouldRenderSlot ? slotKey : null}</td>
              <td>{shouldRenderProperty ? propertyKey : null}</td>
              <td>
                {value.type === "token"
                  ? stringifyTokenExpression(value)
                  : stringifyValueExpression(value)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
