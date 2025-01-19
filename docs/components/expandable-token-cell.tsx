"use client";

import { useState } from "react";
import { TokenCell } from "./token-cell";
import type { TokenMappingItem } from "@/components/token-mapping-table";

export function ExpandableTokenCell({
  newToken,
}: {
  newToken: TokenMappingItem["newTokens"][number];
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div onClick={() => setIsExpanded((prev) => !prev)} className="cursor-pointer">
      <TokenCell
        isExpanded={isExpanded}
        values={newToken.values}
        resolvedValue={newToken.resolvedValue}
      />
    </div>
  );
}
