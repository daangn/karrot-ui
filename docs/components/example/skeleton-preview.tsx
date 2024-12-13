import { Flex } from "@/registry/ui/flex";
import { Skeleton } from "seed-design/ui/skeleton";

export default function SkeletonPreview() {
  return (
    <Flex gap="s4" alignItems="center">
      <Skeleton shape="circular" width="s12" height="s12" />
      <Flex flexDirection="column" gap="s2">
        <Skeleton shape="rounded" height="s4" width="250px" />
        <Skeleton shape="rounded" height="s4" width="250px" />
      </Flex>
    </Flex>
  );
}
