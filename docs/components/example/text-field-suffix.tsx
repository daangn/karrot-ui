import { Stack } from "@/registry/ui/layout";
import { IconWonLine } from "@daangn/react-monochrome-icon";
import { TextField, TextFieldInput } from "seed-design/ui/text-field";

export default function TextFieldSuffix() {
  return (
    <Stack gap="s4" width="full">
      <TextField label="라벨" description="설명을 써주세요" suffix="cm">
        <TextFieldInput placeholder="플레이스홀더" />
      </TextField>
      <TextField label="라벨" description="설명을 써주세요" suffixIcon={<IconWonLine />}>
        <TextFieldInput placeholder="플레이스홀더" />
      </TextField>
    </Stack>
  );
}
