import { Column, Columns } from "seed-design/ui/layout";

export default function ColumnsPreview() {
  return (
    <Columns background="bg.layerDefault" gap="s2" width="full" borderRadius="s2">
      <Column background="bg.brandSolid" paddingX="s4" paddingY="s3" borderRadius="s2">
        1
      </Column>
      <Column
        background="bg.brandSolid"
        paddingX="s4"
        paddingY="s3"
        width="content"
        borderRadius="s2"
      >
        Content Width
      </Column>
      <Column background="bg.brandSolid" paddingX="s4" paddingY="s3" borderRadius="s2">
        2
      </Column>
    </Columns>
  );
}
