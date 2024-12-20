import { Avatar, AvatarFallback, AvatarImage, AvatarStack } from "seed-design/ui/avatar";
import { IdentityPlaceholder } from "seed-design/ui/identity-placeholder";

export default function AvatarStackExample() {
  return (
    <AvatarStack size="64">
      <Avatar>
        <AvatarImage src="https://avatars.githubusercontent.com/u/54893898?v=4" />
        <AvatarFallback>
          <IdentityPlaceholder />
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://avatars.githubusercontent.com/u/54893898?v=4" />
        <AvatarFallback>
          <IdentityPlaceholder />
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://avatars.githubusercontent.com/u/54893898?v=4" />
        <AvatarFallback>
          <IdentityPlaceholder />
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://avatars.githubusercontent.com/u/54893898?v=4" />
        <AvatarFallback>
          <IdentityPlaceholder />
        </AvatarFallback>
      </Avatar>
    </AvatarStack>
  );
}
