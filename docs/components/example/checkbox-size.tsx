import { Checkbox } from "seed-design/ui/checkbox";

export default function CheckboxSize() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <Checkbox label="Medium (default)" size="medium" />
      <Checkbox label="Large" size="large" />
    </div>
  );
}
