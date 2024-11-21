import { Checkbox } from "seed-design/ui/checkbox";

export default function CheckboxVariant() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <Checkbox label="Square (default)" variant="sqaure" />
      <Checkbox label="Ghost" variant="ghost" />
    </div>
  );
}
