import { Skeleton } from "seed-design/ui/skeleton";
import { Flex } from "seed-design/ui/layout";

export default function SkeletonRadius() {
  return (
    <Flex gap="x4" alignItems="center">
      <Skeleton radius="0" width="x12" height="x12" />
      <Skeleton radius="8" width="x12" height="x12" />
      <Skeleton radius="16" width="x12" height="x12" />
      <Skeleton radius="full" width="x12" height="x12" />
    </Flex>
  );
}
