import { IconPlusCircleLine } from "@daangn/react-monochrome-icon";
import { TextButton } from "seed-design/ui/text-button";

export default function TextButtonBrand() {
  return (
    <TextButton tone="brand" prefixIcon={<IconPlusCircleLine />}>
      추가
    </TextButton>
  );
}
