import { IconChevronRightLine } from "@daangn/react-monochrome-icon";
import { TextButton } from "seed-design/ui/text-button";

export default function TextButtonIconLast() {
  return (
    <TextButton layout="iconLast" icon={<IconChevronRightLine />}>
      추가
    </TextButton>
  );
}
