import { IdentityPlaceholder } from "@/registry/ui/identity-placeholder";
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "seed-design/ui/avatar";

export default function AvatarWithBadge() {
  return (
    <Avatar size="80">
      <AvatarImage src="https://avatars.githubusercontent.com/u/54893898?v=4" />
      <AvatarFallback>
        <IdentityPlaceholder />
      </AvatarFallback>
      <AvatarBadge>
        <div style={{ background: "green", width: 20, height: 20, borderRadius: 9999 }} />
      </AvatarBadge>
    </Avatar>
  );
}
