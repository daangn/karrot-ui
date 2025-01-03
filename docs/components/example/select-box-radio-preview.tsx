import { SelectBoxRadioGroup, SelectBoxRadio } from "seed-design/ui/select-box";

export default function SelectBoxRadioPreview() {
  return (
    <SelectBoxRadioGroup defaultValue="apple" aria-label="과일">
      <SelectBoxRadio value="apple" label="Culpa" />
      <SelectBoxRadio
        value="voluptate"
        label="Voluptate"
        description="Elit cupidatat dolore fugiat enim veniam culpa."
      />
      <SelectBoxRadio value="eiusmod" label="Eiusmod" />
    </SelectBoxRadioGroup>
  );
}
