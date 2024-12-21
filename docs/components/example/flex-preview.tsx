import { Flex } from "seed-design/ui/layout";

export default function FlexPreview() {
  return (
    <Flex direction="column" background="bg.dangerSolid" gap="s4" width="full">
      <Flex background="bg.neutralWeak" paddingX="s4" paddingY="s3">
        1
      </Flex>
      <Flex background="bg.neutralWeak" paddingX="s4" paddingY="s3">
        2
      </Flex>
      <Flex background="bg.neutralWeak" paddingX="s4" paddingY="s3">
        3
      </Flex>
    </Flex>
  );
}
