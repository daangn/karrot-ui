import { SelectBoxCheck, SelectBoxCheckGroup } from "seed-design/ui/select-box";

export default function SelectBoxCheckPreview() {
  return (
    <SelectBoxCheckGroup>
      <SelectBoxCheck label="Culpa" defaultChecked />
      <SelectBoxCheck
        label="Voluptate"
        description="Elit cupidatat dolore fugiat enim veniam culpa."
      />
      <SelectBoxCheck label="Eiusmod" />
    </SelectBoxCheckGroup>
  );
}
