import { stringifyTokenExpression, stringifyValueExpression } from "@seed-design/rootage-core";
import { getRootage } from "./get-rootage";

interface TokenTableProps {
  groups: string[];
}

export async function TokenTable(props: TokenTableProps) {
  const rootage = await getRootage();
  const tokenDeclsToRender = rootage.tokens.filter((tokenDecl) =>
    props.groups.every((group, index) => tokenDecl.token.group[index] === group),
  );
  const collectionName = tokenDeclsToRender[0].collection;
  const collection = rootage.tokenCollections.find(
    (collection) => collection.name === collectionName,
  );
  const modes = collection?.modes ?? [];
  const tableItems = tokenDeclsToRender.map((decl) => ({
    name: stringifyTokenExpression(decl.token),
    values: decl.values,
  }));

  return (
    <table>
      <thead>
        <tr>
          <th>이름</th>
          {modes.map((mode) => (
            <th key={mode}>{mode === "default" ? "값" : mode}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableItems.map((item) => (
          <tr key={item.name}>
            <td>{item.name}</td>
            {item.values.map(({ mode, value }) => (
              <td key={mode}>
                {value.type === "token"
                  ? stringifyTokenExpression(value)
                  : stringifyValueExpression(value)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
