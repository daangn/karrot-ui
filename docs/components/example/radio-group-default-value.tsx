import { RadioGroup, Radio } from "seed-design/ui/radio-group";

export default function RadioGroupDefaultValue() {
  return (
    <RadioGroup defaultValue="duis">
      <Radio value="duis">duis</Radio>
      <Radio value="officia">officia</Radio>
      <Radio value="sint">sint</Radio>
    </RadioGroup>
  );
}
