import { IconPlusCircleLine } from "@daangn/react-monochrome-icon";
import { TextButton } from "seed-design/ui/text-button";

export default function TextButtonIconFirst() {
  return (
    <TextButton layout="iconFirst" icon={<IconPlusCircleLine />}>
      추가
    </TextButton>
  );
}
