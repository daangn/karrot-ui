import { RadioGroup, Radio } from "seed-design/ui/radio-group";

export default function RadioGroupItemDisabled() {
  return (
    <RadioGroup>
      <Radio value="duis">duis</Radio>
      <Radio value="officia" disabled>
        officia
      </Radio>
      <Radio value="sint">sint</Radio>
    </RadioGroup>
  );
}
