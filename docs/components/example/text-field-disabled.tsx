import { TextField, TextFieldInput } from "seed-design/ui/text-field";

export default function TextFieldDisabled() {
  return (
    <div className="grid grid-cols-2 gap-4 w-full">
      <TextField label="라벨" description="설명을 써주세요" disabled>
        <TextFieldInput placeholder="플레이스홀더" />
      </TextField>
      <TextField label="라벨" description="설명을 써주세요" disabled defaultValue="값">
        <TextFieldInput placeholder="플레이스홀더" />
      </TextField>
      <TextField
        label="라벨"
        description="설명을 써주세요"
        disabled
        invalid
        errorMessage="오류가 발생한 이유를 써주세요"
      >
        <TextFieldInput placeholder="플레이스홀더" />
      </TextField>
      <TextField
        label="라벨"
        description="설명을 써주세요"
        disabled
        invalid
        errorMessage="오류가 발생한 이유를 써주세요"
        defaultValue="값"
      >
        <TextFieldInput placeholder="플레이스홀더" />
      </TextField>
    </div>
  );
}
