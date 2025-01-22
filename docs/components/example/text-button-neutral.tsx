import { IconPlusCircleLine } from "@daangn/react-monochrome-icon";
import { TextButton } from "seed-design/ui/text-button";

export default function TextButtonNeutral() {
  return (
    <TextButton tone="neutral" icon={<IconPlusCircleLine />}>
      추가
    </TextButton>
  );
}
