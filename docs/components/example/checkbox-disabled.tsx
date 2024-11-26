import { Checkbox } from "seed-design/ui/checkbox";

export default function CheckboxDisabled() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <Checkbox defaultChecked label="Disabled Checked, Square" disabled />
      <Checkbox checked={false} label="Disabled without Checked, Square" disabled />
      <Checkbox variant="ghost" defaultChecked label="Disabled Checked, Ghost" disabled />
      <Checkbox variant="ghost" checked={false} label="Disabled without Checked, Ghost" disabled />
    </div>
  );
}
