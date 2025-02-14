import type { ActivityComponentType } from "@stackflow/react";
import {
  AppBar,
  AppBarBackButton,
  AppBarLeft,
  AppBarMain,
} from "../design-system/stackflow/AppBar";
import { AppScreen, AppScreenContent } from "../design-system/stackflow/AppScreen";

import { toggleButton, toggleButtonVariantMap } from "@seed-design/recipe/toggle-button";

import { IconThumbUpFill } from "@daangn/react-monochrome-icon";
import { ComponentAnalyzer } from "../components/ComponentAnalyzer";
import { ToggleButton, type ToggleButtonProps } from "../design-system/ui/toggle-button";

const initialVariants = {
  variant: "brandSolid",
  size: "small",
} satisfies ToggleButtonProps;

const ActivityToggleButton: ActivityComponentType = () => {
  return (
    <AppScreen>
      <AppBar>
        <AppBarLeft>
          <AppBarBackButton />
        </AppBarLeft>
        <AppBarMain>Toggle Button</AppBarMain>
      </AppBar>
      <AppScreenContent>
        <ComponentAnalyzer
          variantsMap={toggleButtonVariantMap}
          initialVariants={initialVariants}
          recipeFn={toggleButton}
          render={(variants) => (
            <ToggleButton key={JSON.stringify(variants)} {...variants}>
              <IconThumbUpFill />
            </ToggleButton>
          )}
        />
      </AppScreenContent>
    </AppScreen>
  );
};

export default ActivityToggleButton;
