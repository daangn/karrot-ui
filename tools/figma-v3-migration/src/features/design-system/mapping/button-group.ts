import { boxButtonMapping } from "./buttons";
import type { ComponentMapping, NewComponentProperties } from "./types";

export const buttonGroupMapping: ComponentMapping<"button_group", "🔵 [Template] Button Group"> = {
  oldComponent: "button_group",
  newComponent: "🔵 [Template] Button Group",
  variantMap: {
    "OS:iOS": "OS:iOS",
    "OS:Andorid": "OS:Andorid",
  },
  calculateProperties(oldProperties) {
    const newProperties: NewComponentProperties<"🔵 [Template] Button Group"> = {
      "Show Divider": "False",
      "Show Favorite Button#29056:0": false,
      "Show Indicator#28768:0": false,
    };

    const combination = oldProperties.Combination.value;
    const orientation = oldProperties.Orientation.value;

    if (combination === "Single") {
      newProperties.Type = "Single";
    } else {
      if (orientation === "Horizontal") {
        newProperties.Type = "Horizontal";
      } else if (orientation === "Vertical") {
        newProperties.Type = "Vertical";
      }
    }

    return newProperties;
  },
  childrenMappings: [boxButtonMapping],
};

export const buttonGroupFixedMapping: ComponentMapping<
  "button_group_fixed",
  "🔵 [Template] Button Group"
> = {
  oldComponent: "button_group_fixed",
  newComponent: "🔵 [Template] Button Group",
  variantMap: {
    "OS:Andorid": "OS:Andorid",
    "OS:iOS": "OS:iOS",
    "Position:Bottom fixed": "Position:Bottom fixed",
    "Position:On keyboard": "Position:On keyboard",
    "Type:Horizontal ratio": "Type:Horizontal ratio",
    "Type:Horizontal": "Type:Horizontal",
    "Type:Single": "Type:Single",
    "Type:Vertical": "Type:Vertical",
  },
  calculateProperties(oldProperties) {
    const newProperties: NewComponentProperties<"🔵 [Template] Button Group"> = {
      "Show Divider": oldProperties["Divider#30731:5"].value ? "True" : "False",
      "Show Favorite Button#29056:0": oldProperties["Favorite#29056:0"].value,
      "Show Indicator#28768:0": oldProperties["Indicator#28768:0"].value,
      "Show Secondary Button#29056:29": oldProperties["Secondary btn#29056:29"].value,
      "Show Step Indicator#25896:0": oldProperties["Step Indicator#25896:0"].value,
    };

    return newProperties;
  },
  childrenMappings: [boxButtonMapping],
};
