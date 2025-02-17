"use client";

import { Fragment, useState } from "react";
import { TokenCell } from "../token-cell";
import { TokenMappingItem } from "./color-migration-index";

export function ColorMigrationRow({
  item,
}: {
  item: TokenMappingItem;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <tr key={item.previousTokenId}>
      <td>{item.previousTokenId}</td>
      <td className="align-middle space-y-2">
        {item.newTokens.length > 0 &&
          item.newTokens.map((newToken, index) => (
            <Fragment key={newToken.id}>
              <div onClick={() => setIsExpanded((prev) => !prev)} className="cursor-pointer">
                <TokenCell
                  isExpanded={isExpanded}
                  values={newToken.values}
                  resolvedValue={newToken.resolvedValue}
                />
              </div>
              {index !== item.newTokens.length - 1 && (
                <div className="text-xs text-center">또는</div>
              )}
            </Fragment>
          ))}
      </td>
      <td>{item.description}</td>
    </tr>
  );
}
