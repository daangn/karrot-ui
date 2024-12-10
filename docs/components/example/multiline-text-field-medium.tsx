import { FormControl, MultilineTextField } from "seed-design/ui/text-field";

export default function MultilineTextFieldMedium() {
  return (
    <FormControl label="라벨" description="설명을 써주세요" size="medium">
      <MultilineTextField placeholder="플레이스홀더" />
    </FormControl>
  );
}
