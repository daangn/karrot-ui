import { TextField } from "seed-design/ui/text-field";

export default function TextFieldRequired() {
  return (
    <TextField
      label="라벨"
      placeholder="플레이스홀더"
      description="설명을 써주세요"
      required
      requiredIndicator="(필수)"
    />
  );
}
