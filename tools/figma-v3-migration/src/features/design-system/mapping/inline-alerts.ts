import type { ComponentMapping, NewComponentProperties } from "./types";

export const inlineAlertMapping: ComponentMapping<"✅ Inline alert v2", "🟢 Inline Banner"> = {
  oldComponent: "✅ Inline alert v2",
  newComponent: "🟢 Inline Banner",
  variantMap: {},
  calculateProperties(oldProperties, oldComponentStructure) {
    const newProperties: NewComponentProperties<"🟢 Inline Banner"> = {
      "Show Title": "False",
    };

    const labelInStandard = oldComponentStructure?.children?.Container?.children?.Label?.value;
    const labelInStrong = oldComponentStructure?.children?.Label?.value;
    if (labelInStandard) {
      newProperties["Link Label#1547:81"] = labelInStandard as string;
    } else if (labelInStrong) {
      newProperties["Link Label#1547:81"] = labelInStrong as string;
    } else {
      newProperties["Link Label#1547:81"] = "자세히보기";
    }

    const hasLink = oldProperties.Link.value === "True";
    if (hasLink) {
      newProperties.Interaction = "Link";
    } else {
      newProperties.Interaction = "Default";
    }

    const hasPrefixIcon = oldProperties["Prefix Icon"].value === "True";
    if (hasPrefixIcon) {
      newProperties["Show Icon#11840:27"] = true;
    } else {
      newProperties["Show Icon#11840:27"] = false;
    }

    type Variant = `${typeof oldProperties.Variant.value} ${typeof oldProperties.Weight.value}`;
    const variant = `${oldProperties.Variant.value} ${oldProperties.Weight.value}` as Variant;
    switch (variant) {
      case "Normal Standard":
        newProperties.Variant = "Neutral Weak";
        break;
      case "Normal Strong":
        newProperties.Variant = "Neutral Weak";
        break;
      case "Danger Standard":
        newProperties.Variant = "Critical Weak";
        break;
      case "Danger Strong":
        newProperties.Variant = "Critical Solid";
        break;
      case "Info Standard":
        newProperties.Variant = "Informative Weak";
        break;
      case "Info Strong":
        newProperties.Variant = "Informative Weak";
        break;
      case "Success Standard":
        newProperties.Variant = "Positive Weak";
        break;
      case "Success Strong":
        newProperties.Variant = "Positive Weak";
        break;
    }

    return newProperties;
  },
};

export const actionableInlineAlertMapping: ComponentMapping<
  "✅ Actionable Inline alert v2",
  "🟢 Inline Banner"
> = {
  oldComponent: "✅ Actionable Inline alert v2",
  newComponent: "🟢 Inline Banner",
  variantMap: {},
  calculateProperties(oldProperties, oldComponentStructure) {
    const newProperties: NewComponentProperties<"🟢 Inline Banner"> = {
      Interaction: "Actionable",
      "Show Title": "False",
    };

    const hasPrefixIcon = oldProperties["Prefix Icon"].value === "True";
    if (hasPrefixIcon) {
      newProperties["Show Icon#11840:27"] = true;
    } else {
      newProperties["Show Icon#11840:27"] = false;
    }

    type Variant = `${typeof oldProperties.Variant.value} ${typeof oldProperties.Weight.value}`;
    const variant = `${oldProperties.Variant.value} ${oldProperties.Weight.value}` as Variant;
    switch (variant) {
      case "Normal Standard":
        newProperties.Variant = "Neutral Weak";
        break;
      case "Normal Strong":
        newProperties.Variant = "Neutral Weak";
        break;
      case "Danger Standard":
        newProperties.Variant = "Critical Weak";
        break;
      case "Danger Strong":
        newProperties.Variant = "Critical Solid";
        break;
      case "Info Standard":
        newProperties.Variant = "Informative Weak";
        break;
      case "Info Strong":
        newProperties.Variant = "Informative Weak";
        break;
      case "Success Standard":
        newProperties.Variant = "Positive Weak";
        break;
      case "Success Strong":
        newProperties.Variant = "Positive Weak";
        break;
    }

    return newProperties;
  },
};

export const dismissableInlineAlertMapping: ComponentMapping<
  "✅ Dismissable Inline alert v2",
  "🟢 Inline Banner"
> = {
  oldComponent: "✅ Dismissable Inline alert v2",
  newComponent: "🟢 Inline Banner",
  variantMap: {},
  calculateProperties(oldProperties, oldComponentStructure) {
    const newProperties: NewComponentProperties<"🟢 Inline Banner"> = {
      Interaction: "Dismissible",
      "Show Title": "False",
    };

    const hasPrefixIcon = oldProperties["Prefix Icon"].value === "True";
    if (hasPrefixIcon) {
      newProperties["Show Icon#11840:27"] = true;
    } else {
      newProperties["Show Icon#11840:27"] = false;
    }

    type Variant = `${typeof oldProperties.Variant.value} ${typeof oldProperties.Weight.value}`;
    const variant = `${oldProperties.Variant.value} ${oldProperties.Weight.value}` as Variant;
    switch (variant) {
      case "Normal Standard":
        newProperties.Variant = "Neutral Weak";
        break;
      case "Normal Strong":
        newProperties.Variant = "Neutral Weak";
        break;
      case "Danger Standard":
        newProperties.Interaction = "Default";
        newProperties.Variant = "Critical Weak";
        break;
      case "Danger Strong":
        newProperties.Interaction = "Default";
        newProperties.Variant = "Critical Solid";
        break;
      case "Info Standard":
        newProperties.Variant = "Informative Weak";
        break;
      case "Info Strong":
        newProperties.Variant = "Informative Weak";
        break;
      case "Success Standard":
        newProperties.Variant = "Positive Weak";
        break;
      case "Success Strong":
        newProperties.Variant = "Positive Weak";
        break;
    }

    return newProperties;
  },
  // TODO
  // oldVariant도 여러 variant 조합이 되어야함 (and나 or 연산자가 가능하도록?)
  // newVariant도 여러 variant가 다 적용가능하도록 선택적으로
  // swappableVariants: [
  //   {
  //     oldVariant: "Variant:Danger",
  //     newVariants: ["Interaction:Actionable"],
  //     description: "Danger variant can't be Dismissible",
  //   },
  // ],
};
