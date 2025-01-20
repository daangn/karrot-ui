import { Stack } from "@/registry/ui/layout";
import { IconMagnifyingglassLine } from "@daangn/react-monochrome-icon";
import { TextField, TextFieldInput } from "seed-design/ui/text-field";

export default function TextFieldPrefix() {
  return (
    <Stack className="flex gap-4 w-full">
      <TextField label="라벨" description="설명을 써주세요" prefix="https://">
        <TextFieldInput placeholder="플레이스홀더" />
      </TextField>
      <TextField
        label="라벨"
        description="설명을 써주세요"
        prefixIcon={<IconMagnifyingglassLine />}
      >
        <TextFieldInput placeholder="플레이스홀더" />
      </TextField>
    </Stack>
  );
}
