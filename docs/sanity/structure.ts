import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Docs")
    .items([
      S.documentTypeListItem("contents").title("Contents"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !["contents"].includes(item.getId()!),
      ),
    ]);
