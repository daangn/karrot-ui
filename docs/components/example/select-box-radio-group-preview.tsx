import { SelectBoxRadioGroup, SelectBoxRadio } from "seed-design/ui/select-box-radio-group";

export default function SelectBoxRadioGroupPreview() {
  return (
    <SelectBoxRadioGroup defaultValue="culpa">
      <SelectBoxRadio value="culpa" label="Culpa" />
      <SelectBoxRadio
        value="voluptate"
        label="Voluptate"
        description="Elit cupidatat dolore fugiat enim veniam culpa."
      />
      <SelectBoxRadio value="eiusmod" label="Eiusmod" />
    </SelectBoxRadioGroup>
  );
}
