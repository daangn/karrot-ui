import { Avatar } from "seed-design/ui/avatar";
import { Flex } from "seed-design/ui/layout";

export default function AvatarSize() {
  return (
    <Flex gap="s4">
      <Avatar size="20" src="https://avatars.githubusercontent.com/u/54893898?v=4" fallback="L" />
      <Avatar size="24" src="https://avatars.githubusercontent.com/u/54893898?v=4" fallback="L" />
      <Avatar size="36" src="https://avatars.githubusercontent.com/u/54893898?v=4" fallback="L" />
      <Avatar size="48" src="https://avatars.githubusercontent.com/u/54893898?v=4" fallback="L" />
      <Avatar size="64" src="https://avatars.githubusercontent.com/u/54893898?v=4" fallback="L" />
      <Avatar size="80" src="https://avatars.githubusercontent.com/u/54893898?v=4" fallback="L" />
      <Avatar size="96" src="https://avatars.githubusercontent.com/u/54893898?v=4" fallback="L" />
    </Flex>
  );
}
