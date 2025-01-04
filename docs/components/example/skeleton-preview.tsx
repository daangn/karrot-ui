import { Flex } from "seed-design/ui/layout";
import { Skeleton } from "seed-design/ui/skeleton";

export default function SkeletonPreview() {
  return (
    <Flex gap="s4" alignItems="center">
      <Skeleton radius="full" width="s12" height="s12" />
      <Flex flexDirection="column" gap="s2">
        <Skeleton radius="8" height="s4" width="250px" />
        <Skeleton radius="8" height="s4" width="250px" />
      </Flex>
    </Flex>
  );
}
