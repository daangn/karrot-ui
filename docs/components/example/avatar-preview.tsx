import { Flex } from "seed-design/ui/layout";
import { IdentityPlaceholder } from "seed-design/ui/identity-placeholder";
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "seed-design/ui/avatar";

export default function AvatarPreview() {
  return (
    <Flex gap="s4">
      <Avatar size="80">
        <AvatarImage src="https://avatars.githubusercontent.com/u/54893898?v=4" />
        <AvatarFallback>
          <IdentityPlaceholder />
        </AvatarFallback>
        <AvatarBadge>
          <div style={{ background: "green", width: 20, height: 20, borderRadius: 9999 }} />
        </AvatarBadge>
      </Avatar>
      <Avatar size="80">
        <AvatarImage src={undefined} />
        <AvatarFallback>
          <IdentityPlaceholder />
        </AvatarFallback>
      </Avatar>
    </Flex>
  );
}
