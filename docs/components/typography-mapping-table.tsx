import { getRootage } from "@/components/rootage";
import { Text } from "@/registry/ui/text";
import { Fragment } from "react";
import { TextProps } from "@/registry/ui/text";
import type { FoundationTokenMapping } from "@seed-design/mapping";

interface TypographyMappingTableProps {
  mappings: FoundationTokenMapping[];
}

export async function TypographyMappingTable({ mappings }: TypographyMappingTableProps) {
  const rootage = await getRootage();

  if (!("typography" in rootage.componentSpecEntities)) {
    throw new Error("Typography component spec not found");
  }

  const tableItems: FoundationTokenMapping[] = mappings.map((item) => ({
    previous: item.previous,
    next: item.next.map((id) => {
      const typography = rootage.componentSpecEntities.typography.body.find(({ variants }) =>
        variants.some((variant) => variant.name === "textStyle" && variant.value === id),
      );

      if (!typography) {
        throw new Error(`Typography component spec not found for variant textStyle=${id}`);
      }

      return id;
    }),
    description: item.description,
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
          <tr key={item.previous}>
            <td>{item.previous}</td>
            <td className="align-middle space-y-2">
              {item.next.length > 0 &&
                item.next.map((newTextStyleId, index) => {
                  return (
                    <Fragment key={newTextStyleId}>
                      <Text textStyle={newTextStyleId as TextProps["textStyle"]}>
                        {newTextStyleId}
                      </Text>
                      {index !== item.next.length - 1 && (
                        <div className="text-xs text-center">또는</div>
                      )}
                    </Fragment>
                  );
                })}
            </td>
            <td>{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
