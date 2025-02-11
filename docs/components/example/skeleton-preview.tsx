import { Flex } from "seed-design/ui/layout";
import { Skeleton } from "seed-design/ui/skeleton";

export default function SkeletonPreview() {
  return (
    <Flex gap="x4" alignItems="center">
      <Skeleton radius="full" width="x12" height="x12" />
      <Flex flexDirection="column" gap="x2">
        <Skeleton radius="8" height="x4" width="250px" />
        <Skeleton radius="8" height="x4" width="250px" />
      </Flex>
    </Flex>
  );
}
