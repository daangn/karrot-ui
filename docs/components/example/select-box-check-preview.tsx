import { SelectBoxCheck, SelectBoxCheckGroup } from "seed-design/ui/select-box";

export default function SelectBoxCheckPreview() {
  return (
    <SelectBoxCheckGroup>
      <SelectBoxCheck label="Apple" defaultChecked />
      <SelectBoxCheck label="Melon" description="Elit cupidatat dolore fugiat enim veniam culpa." />
      <SelectBoxCheck label="Mango" />
    </SelectBoxCheckGroup>
  );
}
