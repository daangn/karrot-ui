import { AppScreen } from "@stackflow/plugin-basic-ui";
import type { ActivityComponentType } from "@stackflow/react";

import { controlChip, controlChipVariantMap } from "@seed-design/recipe/controlChip";

import IconPlusFill from "@daangn/react-monochrome-icon/IconPlusFill";
import { ComponentAnalyzer } from "../components/ComponentAnalyzer";
import { ControlChip, type ControlChipToggleProps } from "../design-system/ui/control-chip";

const initialVariants = {
  size: "medium",
  layout: "withText",
} satisfies ControlChipToggleProps;

const ActivityControlChip: ActivityComponentType = () => {
  return (
    <AppScreen appBar={{ title: "ControlChip" }}>
      <ComponentAnalyzer
        variantsMap={controlChipVariantMap}
        initialVariants={initialVariants}
        recipeFn={controlChip}
        render={(variants) => (
          <ControlChip.Toggle count={10} key={JSON.stringify(variants)} {...variants}>
            {variants.layout === "withText" ? "야옹" : <IconPlusFill />}
          </ControlChip.Toggle>
        )}
      />
    </AppScreen>
  );
};

export default ActivityControlChip;
