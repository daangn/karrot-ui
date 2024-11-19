import { IconPlusCircleLine } from "@daangn/react-monochrome-icon";
import { TextButton } from "seed-design/ui/text-button";

export default function TextButtonLeadingIcon() {
  return (
    <TextButton icon={<IconPlusCircleLine />} iconPosition="leading">
      추가
    </TextButton>
  );
}
