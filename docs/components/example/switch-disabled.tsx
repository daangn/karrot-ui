"use client";

import { Switch } from "seed-design/ui/switch";

export default function SwitchDisabled() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <Switch disabled />
      <Switch checked disabled />
    </div>
  );
}
