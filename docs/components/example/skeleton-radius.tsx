import { Skeleton } from "seed-design/ui/skeleton";
import { Flex } from "seed-design/ui/layout";

export default function SkeletonRadius() {
  return (
    <Flex gap="s4" alignItems="center">
      <Skeleton radius="0" width="s12" height="s12" />
      <Skeleton radius="8" width="s12" height="s12" />
      <Skeleton radius="16" width="s12" height="s12" />
      <Skeleton radius="full" width="s12" height="s12" />
    </Flex>
  );
}
