import { IconPlusCircleLine } from "@daangn/react-monochrome-icon";
import { TextButton } from "seed-design/ui/text-button";

export default function TextButtonLarge() {
  return (
    <TextButton tone="neutral" icon={<IconPlusCircleLine />} size="large">
      추가
    </TextButton>
  );
}
