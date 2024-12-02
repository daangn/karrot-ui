import { IconPenHorizlineLine } from "@daangn/react-monochrome-icon";
import { TextButton } from "seed-design/ui/text-button";

export default function TextButtonPreview() {
  return (
    <TextButton disabled prefixIcon={<IconPenHorizlineLine />}>
      새 글
    </TextButton>
  );
}
