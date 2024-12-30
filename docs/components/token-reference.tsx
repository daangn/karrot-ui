import { resolveToken, stringifyValueExpression } from "@seed-design/rootage-core";
import { getRootage } from "./get-rootage";
import { TokenTable, TokenTableItem } from "./token-table";

interface TokenReferenceProps {
  groups?: string[];
}

export async function TokenReference(props: TokenReferenceProps) {
  const rootage = await getRootage();
  const groups = props.groups ?? [];

  const tableItems: TokenTableItem[] = rootage.tokenIds
    .filter((id) => id.startsWith(`$${groups.join(".")}`))
    .map((tokenId) => {
      const { path, value } = resolveToken(rootage, tokenId, {
        global: "default",
        color: "theme-light",
      });
      return {
        id: tokenId,
        values: [...path.slice(1), stringifyValueExpression(value)],
        resolvedValue: value,
      };
    });

  return <TokenTable items={tableItems} />;
}
