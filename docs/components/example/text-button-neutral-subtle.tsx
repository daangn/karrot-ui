import { IconPlusCircleLine } from "@daangn/react-monochrome-icon";
import { TextButton } from "seed-design/ui/text-button";

export default function TextButtonNeutralSubtle() {
  return (
    <TextButton variant="neutralSubtle" prefixIcon={<IconPlusCircleLine />}>
      추가
    </TextButton>
  );
}
