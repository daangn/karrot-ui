import { CheckSelectBox, CheckSelectBoxGroup } from "seed-design/ui/select-box";

export default function CheckSelectBoxPreview() {
  return (
    <CheckSelectBoxGroup>
      <CheckSelectBox label="Apple" defaultChecked />
      <CheckSelectBox label="Melon" description="Elit cupidatat dolore fugiat enim veniam culpa." />
      <CheckSelectBox label="Mango" />
    </CheckSelectBoxGroup>
  );
}
