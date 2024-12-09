import { FormControl, MultilineTextField } from "seed-design/ui/text-field";

export default function MultilineTextFieldGraphemeCount() {
  return (
    <FormControl label="라벨" description="설명을 써주세요" maxGraphemeCount={8}>
      <MultilineTextField placeholder="플레이스홀더" />
    </FormControl>
  );
}
