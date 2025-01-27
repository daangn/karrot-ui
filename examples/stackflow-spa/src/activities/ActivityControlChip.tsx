import type { ActivityComponentType } from "@stackflow/react";
import { AppBar, BackButton, AppBarLeft, AppBarTitle } from "../design-system/stackflow/AppBar";
import { AppScreen, AppScreenContent } from "../design-system/stackflow/AppScreen";

import { controlChip, controlChipVariantMap } from "@seed-design/recipe/controlChip";

import IconPlusFill from "@daangn/react-monochrome-icon/IconPlusFill";
import { ComponentAnalyzer } from "../components/ComponentAnalyzer";
import { ControlChip, type ToggleControlChipProps } from "../design-system/ui/control-chip";

const initialVariants = {
  size: "medium",
  layout: "withText",
} satisfies ToggleControlChipProps;

const ActivityControlChip: ActivityComponentType = () => {
  return (
    <AppScreen>
      <AppBar>
        <AppBarLeft>
          <BackButton />
        </AppBarLeft>
        <AppBarTitle>Control Chip</AppBarTitle>
      </AppBar>
      <AppScreenContent>
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
      </AppScreenContent>
    </AppScreen>
  );
};

export default ActivityControlChip;
