import type { ActivityComponentType } from "@stackflow/react";

import { AppScreen } from "@stackflow/plugin-basic-ui";

import { BoxButton } from "../design-system/components";
import { useFlow } from "../stackflow";

const ActivityHome: ActivityComponentType = () => {
  const { push } = useFlow();

  return (
    <AppScreen appBar={{ title: "Home" }}>
      <div style={{ overflow: "auto", height: "100vh" }}>
        <BoxButton onClick={() => push("ActivityBoxButton", {})}>BoxButton</BoxButton>
        <BoxButton onClick={() => push("ActivityRadioGroup", {})}>RadioGroup</BoxButton>
        <BoxButton onClick={() => push("ActivityCheckbox", {})}>Checkbox</BoxButton>
        <BoxButton onClick={() => push("ActivityChip", {})}>ChipButton</BoxButton>
        <BoxButton onClick={() => push("ActivityAlertDialog", {})}>Dialog</BoxButton>
        <BoxButton onClick={() => push("ActivityCallout", {})}>Callout</BoxButton>
        <BoxButton onClick={() => push("ActivityCallout", {})}>Callout</BoxButton>
        <BoxButton onClick={() => push("ActivitySwitch", {})}>Switch</BoxButton>
        <BoxButton onClick={() => push("ActivityTextField", {})}>TextField</BoxButton>
      </div>
    </AppScreen>
  );
};

export default ActivityHome;
