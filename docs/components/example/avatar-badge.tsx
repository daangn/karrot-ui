import { IdentityPlaceholder } from "seed-design/ui/identity-placeholder";
import { Avatar, AvatarBadge } from "seed-design/ui/avatar";

export default function AvatarWithBadge() {
  return (
    <Avatar
      size="80"
      src="https://avatars.githubusercontent.com/u/54893898?v=4"
      fallback={<IdentityPlaceholder />}
    >
      <AvatarBadge>
        <div style={{ background: "green", width: 20, height: 20, borderRadius: 9999 }} />
      </AvatarBadge>
    </Avatar>
  );
}
