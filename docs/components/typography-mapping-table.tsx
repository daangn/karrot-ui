import { getRootage } from "@/components/rootage";
import { Fragment } from "react";

interface TypographyMapping {
  previousTokenId: string;
  newTextStyleIds: string[];
  note?: string;
}

interface TypographyMappingTableProps {
  mappings: TypographyMapping[];
}

export async function TypographyMappingTable({ mappings }: TypographyMappingTableProps) {
  const rootage = await getRootage();

  if (!("typography" in rootage.componentSpecEntities)) {
    throw new Error("Typography component spec not found");
  }

  const tableItems: TypographyMapping[] = mappings.map((item) => ({
    previousTokenId: item.previousTokenId,
    newTextStyleIds: item.newTextStyleIds.map((id) => {
      const typography = rootage.componentSpecEntities.typography.body.find(({ variants }) =>
        variants.some((variant) => variant.name === "textStyle" && variant.value === id),
      );

      if (!typography) {
        throw new Error(`Typography component spec not found for variant textStyle=${id}`);
      }

      return id;
    }),
    note: item.note,
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
              {item.newTextStyleIds.length > 0 &&
                item.newTextStyleIds.map((newTextStyleId, index) => (
                  <Fragment key={newTextStyleId}>
                    <div>{newTextStyleId}</div>
                    {index !== item.newTextStyleIds.length - 1 && (
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
