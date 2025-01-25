import { IconPlusCircleLine } from "@daangn/react-monochrome-icon";
import { TextButton } from "seed-design/ui/text-button";

export default function TextButtonMedium() {
  return (
    <TextButton tone="neutral" icon={<IconPlusCircleLine />} size="medium">
      추가
    </TextButton>
  );
}
