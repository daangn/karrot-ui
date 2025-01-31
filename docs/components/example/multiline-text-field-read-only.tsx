import { Column, Columns } from "seed-design/ui/layout";
import { TextField, TextFieldTextarea } from "seed-design/ui/text-field";

export default function MultilineTextFieldReadOnly() {
  return (
    <Columns width="full" gap="s3">
      <Column>
        <TextField label="라벨" description="설명을 써주세요" readOnly>
          <TextFieldTextarea placeholder="플레이스홀더" />
        </TextField>
      </Column>
      <Column>
        <TextField
          label="라벨"
          description="설명을 써주세요"
          readOnly
          invalid
          errorMessage="오류가 발생한 이유를 써주세요"
        >
          <TextFieldTextarea placeholder="플레이스홀더" />
        </TextField>
      </Column>
    </Columns>
  );
}
