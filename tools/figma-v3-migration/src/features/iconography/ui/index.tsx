import { render, Tabs, type EventHandler, type TabsOption } from "@create-figma-plugin/ui";
import { h } from "preact";
import { useState } from "preact/hooks";
import IconographyProvider from "../contexts/iconography";
import { MigrationTab } from "./migration-tab";
import { ReportTab } from "./report-tab";

import "!../../../shared/css/output.css";

type Tab = "migration" | "report";

function IconographyMigrationPlugin() {
  const [value, setValue] = useState<Tab>("migration");

  const options: Array<TabsOption> = [
    {
      children: <MigrationTab />,
      value: "migration",
    },
    {
      children: <ReportTab />,
      value: "report",
    },
  ];

  const handleChange: EventHandler.onChange<HTMLInputElement> = (event) => {
    const newValue = event.currentTarget.value as Tab;
    setValue(newValue);
  };

  return (
    <IconographyProvider>
      <Tabs onChange={handleChange} options={options} value={value} />
    </IconographyProvider>
  );
}

export default render(IconographyMigrationPlugin);
