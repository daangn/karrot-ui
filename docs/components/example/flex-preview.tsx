import { Flex } from "seed-design/ui/layout";

export default function FlexPreview() {
  return (
    <Flex direction="row" background="bg.layerDefault" gap="s2" width="full" borderRadius="s2">
      <Flex
        direction="column"
        background="bg.brandSolid"
        gap="s1_5"
        paddingX="s2"
        paddingY="s2"
        flexGrow={1}
        borderRadius="s2"
      >
        <Flex background="bg.neutralWeak" paddingX="s4" paddingY="s3" borderRadius="s1">
          1
        </Flex>
        <Flex background="bg.neutralWeak" paddingX="s4" paddingY="s3" borderRadius="s1">
          2
        </Flex>
      </Flex>
      <Flex
        direction="row"
        background="bg.brandSolid"
        gap="s1_5"
        paddingX="s2"
        paddingY="s2"
        flexGrow={1}
        borderRadius="s2"
      >
        <Flex background="bg.neutralWeak" paddingX="s4" paddingY="s3" borderRadius="s1">
          3
        </Flex>
        <Flex background="bg.neutralWeak" paddingX="s4" paddingY="s3" borderRadius="s1">
          4
        </Flex>
      </Flex>
      <Flex background="bg.brandSolid" paddingX="s4" paddingY="s3" borderRadius="s2">
        5
      </Flex>
    </Flex>
  );
}
