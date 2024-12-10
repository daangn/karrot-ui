import { FormControl, MultilineTextField } from "seed-design/ui/text-field";

export default function MultilineTextFieldConstraints() {
  return (
    <FormControl label="라벨" description="설명을 써주세요">
      <MultilineTextField
        placeholder="플레이스홀더"
        style={{ minHeight: "200px", maxHeight: "300px" }}
      />
    </FormControl>
  );
}
