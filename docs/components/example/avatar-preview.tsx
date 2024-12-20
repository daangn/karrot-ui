import { Flex } from "@/registry/ui/flex";
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "seed-design/ui/avatar";

function IdentityPlaceholder() {
  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "#dcdee3" }}>
      <svg viewBox="0 0 640 640" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M420.093 431.464C471.194 398.801 505.076 341.555 505.076 276.392C505.076 174.831 422.774 92.5 321.25 92.5C219.726 92.5 137.424 174.831 137.424 276.392C137.424 341.555 171.306 398.801 222.407 431.464C136.423 466.256 72.9584 545.086 59.9561 640H582.544C569.542 545.086 506.077 466.256 420.093 431.464ZM262.5 254.75C257.53 254.75 253.5 258.779 253.5 263.75V273.75C253.5 278.721 257.53 282.75 262.5 282.75C267.471 282.75 271.5 278.721 271.5 273.75V263.75C271.5 258.779 267.471 254.75 262.5 254.75ZM377.5 254.75C372.53 254.75 368.5 258.779 368.5 263.75V273.75C368.5 278.721 372.53 282.75 377.5 282.75C382.471 282.75 386.5 278.721 386.5 273.75V263.75C386.5 258.779 382.471 254.75 377.5 254.75ZM263.768 315.067C267.873 313.433 272.525 315.437 274.159 319.542C281.44 337.839 299.308 350.75 320.172 350.75C341.036 350.75 358.903 337.839 366.184 319.542C367.818 315.437 372.47 313.433 376.575 315.067C380.681 316.701 382.684 321.353 381.05 325.458C371.429 349.636 347.809 366.75 320.172 366.75C292.535 366.75 268.914 349.636 259.293 325.458C257.659 321.353 259.663 316.701 263.768 315.067Z"
          fill="#f7f8f9"
        />
      </svg>
    </div>
  );
}

export default function AvatarPreview() {
  return (
    <Flex gap="s4">
      <Avatar size="80">
        <AvatarImage src="https://avatars.githubusercontent.com/u/62840502?v=4" />
        <AvatarFallback>
          <IdentityPlaceholder />
        </AvatarFallback>
        <AvatarBadge>+</AvatarBadge>
      </Avatar>
      <Avatar size="80">
        <AvatarImage src="..." />
        <AvatarFallback>
          <IdentityPlaceholder />
        </AvatarFallback>
      </Avatar>
    </Flex>
  );
}
