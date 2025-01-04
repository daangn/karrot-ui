import { IconPlusCircleLine, IconWonLine } from "@daangn/react-monochrome-icon";
import { TextField, TextFieldInput } from "seed-design/ui/text-field";

export default function TextFieldSuffix() {
  return (
    <div className="flex gap-4 w-full">
      <TextField label="라벨" description="설명을 써주세요" prefix="만" suffix="세">
        <TextFieldInput placeholder="플레이스홀더" />
      </TextField>
      <TextField
        label="라벨"
        description="설명을 써주세요"
        prefixIcon={<IconPlusCircleLine />}
        suffixIcon={<IconWonLine />}
      >
        <TextFieldInput placeholder="플레이스홀더" />
      </TextField>
    </div>
  );
}
