import { RadioGroup, Radio } from "seed-design/ui/radio-group";

export default function RadioGroupOverridingStyles() {
  return (
    <RadioGroup size="small">
      <Radio value="duis" size="large">
        duis
      </Radio>
      <Radio value="officia">officia</Radio>
      <Radio value="sint" fontWeight="bold">
        sint
      </Radio>
    </RadioGroup>
  );
}
