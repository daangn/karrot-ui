import { IconPlusCircleLine } from "@daangn/react-monochrome-icon";
import { TextButton } from "seed-design/ui/text-button";

export default function TextButtonSmall() {
  return (
    <TextButton variant="neutral" prefixIcon={<IconPlusCircleLine />} size="small">
      추가
    </TextButton>
  );
}
