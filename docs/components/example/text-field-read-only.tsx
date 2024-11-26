import { TextField } from "seed-design/ui/text-field";

export default function TextFieldReadOnly() {
  return (
    <div className="grid grid-cols-2 gap-4 w-full">
      <TextField label="라벨" placeholder="플레이스홀더" description="설명을 써주세요" readOnly />
      <TextField
        label="라벨"
        placeholder="플레이스홀더"
        description="설명을 써주세요"
        readOnly
        value="값"
      />
      <TextField
        label="라벨"
        placeholder="플레이스홀더"
        description="설명을 써주세요"
        readOnly
        invalid
        errorMessage="오류가 발생한 이유를 써주세요"
      />
      <TextField
        label="라벨"
        placeholder="플레이스홀더"
        description="설명을 써주세요"
        readOnly
        invalid
        errorMessage="오류가 발생한 이유를 써주세요"
        value="값"
      />
    </div>
  );
}
