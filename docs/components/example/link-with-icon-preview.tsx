import { LinkWithIcon } from "@/registry/ui/link-with-icon";
import { IconChevronRightLine } from "@daangn/react-monochrome-icon";
import { SuffixIcon } from "@seed-design/react";

export default function LinkWithIconPreview() {
  return (
    <LinkWithIcon>
      새 글
      <SuffixIcon svg={<IconChevronRightLine />} />
    </LinkWithIcon>
  );
}
