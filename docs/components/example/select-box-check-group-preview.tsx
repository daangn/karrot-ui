import { SelectBoxCheck, SelectBoxCheckGroup } from "@/registry/ui/select-box-group";

export default function SelectBoxCheckGroupPreview() {
  return (
    <SelectBoxCheckGroup>
      <SelectBoxCheck value="culpa" label="Culpa" defaultChecked />
      <SelectBoxCheck
        value="voluptate"
        label="Voluptate"
        description="Elit cupidatat dolore fugiat enim veniam culpa."
      />
      <SelectBoxCheck value="eiusmod" label="Eiusmod" />
    </SelectBoxCheckGroup>
  );
}
