import type { ComponentMapping, NewComponentProperties } from "./types";

const tabFillMapping: ComponentMapping<"✅ Tab v2", ".Item / Tab (Fill)"> = {
  oldComponent: "✅ Tab v2",
  newComponent: ".Item / Tab (Fill)",
  calculateProperties(oldProperties) {
    const newProperties: NewComponentProperties<".Item / Tab (Fill)"> = {
      "Label#4478:2": oldProperties["Label#55170:0"].value,
      Notification: oldProperties.Dot.value,
      Size: "Medium",
    };

    const isDisabled = oldProperties.State.value === "Disabled";
    const isSelected = oldProperties.State.value === "Selected";

    if (isDisabled) {
      newProperties.State = "Disabled";
    } else if (isSelected) {
      newProperties.State = "Selected";
    } else {
      newProperties.State = "Enabled";
    }

    return newProperties;
  },
};

const tabHugMapping: ComponentMapping<"✅ Tab v2", ".Item / Tab (Hug)"> = {
  oldComponent: "✅ Tab v2",
  newComponent: ".Item / Tab (Hug)",
  calculateProperties(oldProperties) {
    const newProperties: NewComponentProperties<".Item / Tab (Hug)"> = {
      "Label#4478:2": oldProperties["Label#55170:0"].value,
      Notification: oldProperties.Dot.value,
      Size: "Medium",
    };

    const isDisabled = oldProperties.State.value === "Disabled";
    const isSelected = oldProperties.State.value === "Selected";

    if (isDisabled) {
      newProperties.State = "Disabled";
    } else if (isSelected) {
      newProperties.State = "Selected";
    } else {
      newProperties.State = "Enabled";
    }

    return newProperties;
  },
};

export const tabsMapping: ComponentMapping<"✅ Tabs v2", "🟢 Tablist"> = {
  oldComponent: "✅ Tabs v2",
  newComponent: "🟢 Tablist",
  variantMap: {
    "Layout:Fill": "Layout:Fill",
    "Layout:Hug": "Layout:Hug",
    "Tab Count:2": "Tab Count:2",
    "Tab Count:3": "Tab Count:3",
    "Tab Count:4": "Tab Count:4",
    "Tab Count:max": "Tab Count:5+",
  },
  calculateProperties(oldProperties) {
    const newProperties: NewComponentProperties<"🟢 Tablist"> = {
      Size: "Medium",
    };

    return newProperties;
  },
  childrenMappings: [tabHugMapping, tabFillMapping],
};
