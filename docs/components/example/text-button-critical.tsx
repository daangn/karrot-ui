import { IconTrashcanLine } from "@daangn/react-monochrome-icon";
import { TextButton } from "seed-design/ui/text-button";

export default function TextButtonCritical() {
  return (
    <TextButton tone="critical" icon={<IconTrashcanLine />}>
      삭제
    </TextButton>
  );
}
