// known issue: Alert Dialog Secondary button 처리가 잘 안됨

import { boxButtonMapping } from "./buttons";
import type { ComponentMapping, NewComponentProperties } from "./types";

// const neutralActionMapping: ComponentMapping<"Neutral", ".Item / Neutral"> = {
//   oldComponent: "Neutral",
//   newComponent: ".Item / Neutral",
//   variantMap: {},
//   calculateProperties(oldProperties) {
//     const newProperties: NewComponentProperties<".Item / Neutral"> = {};
//     return newProperties;
//   },
// };

// const nonPreferredActionMapping: ComponentMapping<"Nonpreferred", ".Item / Nonpreferred"> = {
//   oldComponent: "Nonpreferred",
//   newComponent: ".Item / Nonpreferred",
//   variantMap: {},
//   calculateProperties(oldProperties) {
//     const newProperties: NewComponentProperties<".Item / Nonpreferred"> = {};
//     return newProperties;
//   },
// };

export const alertDialogMapping: ComponentMapping<"✅ Alert Dialog v2", "🟢 Alert Dialog"> = {
  oldComponent: "✅ Alert Dialog v2",
  newComponent: "🟢 Alert Dialog",
  variantMap: {
    "Overlay:False": "Overlay:False",
    "Overlay:True": "Overlay:True",
    "Title:False": "Title:False",
    "Title:True": "Title:True",
    "Secondary Action:False": "Secondary Action:False",
    "Secondary Action:True": "Secondary Action:True",
  },
  calculateProperties(oldProperties) {
    console.log("oldProperties", oldProperties["↳ Secondary Action#50323:0"].value);

    const newProperties: NewComponentProperties<"🟢 Alert Dialog"> = {
      "🅃 Description text#626:0": oldProperties["🅃 Description text#626:0"].value,
      "🅃 Title text#626:13": oldProperties["🅃 Title text#626:13"].value,
    };
    return newProperties;
  },
  childrenMappings: [boxButtonMapping],
};
