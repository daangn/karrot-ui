import { IconTrashcanLine } from "@daangn/react-monochrome-icon";
import { TextButton } from "seed-design/ui/text-button";

export default function TextButtonDanger() {
  return (
    <TextButton variant="danger" prefixIcon={<IconTrashcanLine />}>
      삭제
    </TextButton>
  );
}
