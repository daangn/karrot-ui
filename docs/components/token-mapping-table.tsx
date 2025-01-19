import {
  resolveToken,
  stringifyValueExpression,
  type TokenRef,
  type ValueExpression,
} from "@seed-design/rootage-core";
import { getRootage } from "@/components/get-rootage";
import { ExpandableTokenCell } from "@/components/expandable-token-cell";
import { Fragment } from "react";

interface TokenMapping {
  previousTokenId: string;
  newTokenIds: TokenRef[];
  note?: string;
}

interface TokenMappingTableProps {
  mappings: TokenMapping[];
}

export interface TokenMappingItem {
  previousTokenId: TokenMapping["previousTokenId"];
  newTokens: {
    id: TokenMapping["newTokenIds"][number];
    values: string[];
    resolvedValue: ValueExpression;
  }[];
  note?: TokenMapping["note"];
}

export async function TokenMappingTable({ mappings }: TokenMappingTableProps) {
  const rootage = await getRootage();

  const tableItems: TokenMappingItem[] = mappings.map((mapping) => ({
    previousTokenId: mapping.previousTokenId,
    newTokens: mapping.newTokenIds.map((newId) => {
      const { path, value } = resolveToken(rootage, newId, {
        global: "default",
        color: "theme-light",
      });

      return {
        id: newId,
        values: [...path, stringifyValueExpression(value)],
        resolvedValue: value,
      };
    }),
    note: mapping.note,
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
            <td>{item.note}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
