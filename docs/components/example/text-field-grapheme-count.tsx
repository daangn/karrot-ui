import { FormControl, TextField } from "seed-design/ui/text-field";

export default function TextFieldGraphemeCount() {
  return (
    <FormControl label="라벨" description="설명을 써주세요" maxGraphemeCount={8}>
      <TextField placeholder="플레이스홀더" />
    </FormControl>
  );
}
