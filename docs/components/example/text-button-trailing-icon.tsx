import { IconPlusCircleLine } from "@daangn/react-monochrome-icon";
import { TextButton } from "seed-design/ui/text-button";

export default function TextButtonTrailingIcon() {
  return (
    <TextButton icon={<IconPlusCircleLine />} iconPosition="trailing">
      추가
    </TextButton>
  );
}
