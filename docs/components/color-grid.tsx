import { getRootage } from "./rootage";
import { AST } from "@seed-design/rootage-core";

export interface ColorGridProps {
  scales: {
    prefix: string;
    name: string;
  }[];
}

export async function ColorGrid(props: ColorGridProps) {
  const rootage = await getRootage();
  const scales = props.scales;
  const rows = scales.map((scale) => {
    const tokens = rootage.tokenIds
      .filter((id) => id.startsWith(`$color.palette.${scale.prefix}`))
      .map((id) => rootage.tokenEntities[id]);

    return {
      name: scale.name,
      tokens,
    };
  });

  // TODO: implement selectable theme instead of hard-coded values[0]
  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex gap-1 justify-center">
        <div className="flex-1" />
        {rows[0].tokens.map((_, i) => (
          <div key={i} className="flex-1 text-center text-fd-muted-foreground">
            {i * 100}
          </div>
        ))}
      </div>
      {rows.map(({ name, tokens }) => (
        <div key={name} className="flex gap-1 items-center">
          <div className="flex-1 text-fd-muted-foreground">{name}</div>
          {tokens.map((color) => (
            <ColorSwatch
              key={color.token.identifier}
              value={(color.values[0].value as AST.ColorHexLit).value}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

interface ColorSwatchProps {
  value: string;
}

function ColorSwatch(props: ColorSwatchProps) {
  return (
    <div
      className="flex-1 h-12 border border-fd-border/20"
      style={{ backgroundColor: props.value }}
    />
  );
}
