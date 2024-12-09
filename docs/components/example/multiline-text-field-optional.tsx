import { FormControl, MultilineTextField } from "seed-design/ui/text-field";

export default function MultilineTextFieldOptional() {
  return (
    <FormControl label="라벨" description="설명을 써주세요" optionalIndicator="(선택)">
      <MultilineTextField placeholder="플레이스홀더" />
    </FormControl>
  );
}
