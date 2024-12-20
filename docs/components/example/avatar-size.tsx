import { Flex } from "@/registry/ui/flex";
import { Avatar, AvatarFallback, AvatarImage } from "seed-design/ui/avatar";

export default function AvatarSize() {
  return (
    <Flex gap="s4">
      <Avatar size="20">
        <AvatarImage src="https://avatars.githubusercontent.com/u/54893898?v=4" />
        <AvatarFallback>L</AvatarFallback>
      </Avatar>
      <Avatar size="24">
        <AvatarImage src="https://avatars.githubusercontent.com/u/54893898?v=4" />
        <AvatarFallback>L</AvatarFallback>
      </Avatar>
      <Avatar size="36">
        <AvatarImage src="https://avatars.githubusercontent.com/u/54893898?v=4" />
        <AvatarFallback>L</AvatarFallback>
      </Avatar>
      <Avatar size="48">
        <AvatarImage src="https://avatars.githubusercontent.com/u/54893898?v=4" />
        <AvatarFallback>L</AvatarFallback>
      </Avatar>
      <Avatar size="64">
        <AvatarImage src="https://avatars.githubusercontent.com/u/54893898?v=4" />
        <AvatarFallback>L</AvatarFallback>
      </Avatar>
      <Avatar size="80">
        <AvatarImage src="https://avatars.githubusercontent.com/u/54893898?v=4" />
        <AvatarFallback>L</AvatarFallback>
      </Avatar>
      <Avatar size="96">
        <AvatarImage src="https://avatars.githubusercontent.com/u/54893898?v=4" />
        <AvatarFallback>L</AvatarFallback>
      </Avatar>
    </Flex>
  );
}
