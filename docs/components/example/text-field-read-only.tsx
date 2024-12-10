import { FormControl, TextField } from "seed-design/ui/text-field";

export default function TextFieldReadOnly() {
  return (
    <div className="grid grid-cols-2 gap-4 w-full">
      <FormControl label="라벨" description="설명을 써주세요" readOnly>
        <TextField placeholder="플레이스홀더" />
      </FormControl>
      <FormControl label="라벨" description="설명을 써주세요" readOnly defaultValue="값">
        <TextField placeholder="플레이스홀더" />
      </FormControl>
      <FormControl
        label="라벨"
        description="설명을 써주세요"
        readOnly
        invalid
        errorMessage="오류가 발생한 이유를 써주세요"
      >
        <TextField placeholder="플레이스홀더" />
      </FormControl>
      <FormControl
        label="라벨"
        description="설명을 써주세요"
        readOnly
        invalid
        errorMessage="오류가 발생한 이유를 써주세요"
        defaultValue="값"
      >
        <TextField placeholder="플레이스홀더" />
      </FormControl>
    </div>
  );
}
