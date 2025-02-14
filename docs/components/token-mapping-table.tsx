import { resolveToken, type AST } from "@seed-design/rootage-core";
import { getRootage, stringifyValueLit } from "@/components/rootage";
import { ExpandableTokenCell } from "@/components/expandable-token-cell";
import { Fragment } from "react";
import type { FoundationTokenMapping } from "@seed-design/migration-index";

interface TokenMappingTableProps {
  mappings: FoundationTokenMapping[];
}

export interface TokenMappingItem {
  previousTokenId: string;
  newTokens: {
    id: string;
    values: string[];
    resolvedValue: AST.ValueLit;
  }[];
  description?: string;
}

export async function TokenMappingTable({ mappings }: TokenMappingTableProps) {
  const rootage = await getRootage();

  const tableItems: TokenMappingItem[] = mappings.map((mapping) => ({
    previousTokenId: mapping.previous,
    newTokens: mapping.next.map((newId) => {
      const { path, value } = resolveToken(rootage, newId as `$${string}`, {
        global: "default",
        color: "theme-light",
      });

      return {
        id: newId,
        values: [...path, stringifyValueLit(value)],
        resolvedValue: value,
      };
    }),
    description: mapping.description,
  }));

  return (
    <table>
      <colgroup>
        <col />
        <col />
        <col style={{ width: "15%" }} />
      </colgroup>
      <thead>
        <tr>
          <th>V2</th>
          <th>V3</th>
          <th>비고</th>
        </tr>
      </thead>
      <tbody>
        {tableItems.map((item) => (
          <tr key={item.previousTokenId}>
            <td>{item.previousTokenId}</td>
            <td className="align-middle space-y-2">
              {item.newTokens.length > 0 &&
                item.newTokens.map((newToken, index) => (
                  <Fragment key={newToken.id}>
                    <ExpandableTokenCell newToken={newToken} />
                    {index !== item.newTokens.length - 1 && (
                      <div className="text-xs text-center">또는</div>
                    )}
                  </Fragment>
                ))}
            </td>
            <td>{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
