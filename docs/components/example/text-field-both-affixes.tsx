import { IconPlusCircleLine, IconWonLine } from "@daangn/react-monochrome-icon";
import { FormControl, TextField } from "seed-design/ui/text-field";

export default function TextFieldSuffix() {
  return (
    <div className="flex gap-4 w-full">
      <FormControl label="라벨" description="설명을 써주세요">
        <TextField placeholder="플레이스홀더" prefix="만" suffix="세" />
      </FormControl>
      <FormControl label="라벨" description="설명을 써주세요">
        <TextField
          placeholder="플레이스홀더"
          prefixIcon={<IconPlusCircleLine />}
          suffixIcon={<IconWonLine />}
        />
      </FormControl>
    </div>
  );
}
