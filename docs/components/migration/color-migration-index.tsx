import { getRootage, stringifyValueLit } from "@/components/rootage";
import {
  scaleColorMappings,
  semanticColorMappings,
  staticColorMappings,
} from "@seed-design/migration-index/color";
import { resolveToken, type AST } from "@seed-design/rootage-core";
import { ColorMigrationRow } from "./color-migration-row";

interface ColorMigrationIndexProps {
  prefix: "semantic" | "scale" | "static";
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

export async function ColorMigrationIndex({ prefix }: ColorMigrationIndexProps) {
  const rootage = await getRootage();
  const mappings = {
    semantic: semanticColorMappings,
    scale: scaleColorMappings,
    static: staticColorMappings,
  }[prefix];

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
          <ColorMigrationRow key={item.previousTokenId} item={item} />
        ))}
      </tbody>
    </table>
  );
}
