import { IconWonLine } from "@daangn/react-monochrome-icon";
import { TextField } from "seed-design/ui/text-field";

export default function TextFieldSuffix() {
  return (
    <div className="flex gap-4 w-full">
      <TextField
        label="라벨"
        placeholder="플레이스홀더"
        description="설명을 써주세요"
        suffix="cm"
      />
      <TextField
        label="라벨"
        placeholder="플레이스홀더"
        description="설명을 써주세요"
        suffix={<IconWonLine />}
      />
    </div>
  );
}
