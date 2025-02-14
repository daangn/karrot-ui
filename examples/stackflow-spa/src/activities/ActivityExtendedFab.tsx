import type { ActivityComponentType } from "@stackflow/react";
import {
  AppBar,
  AppBarBackButton,
  AppBarLeft,
  AppBarMain,
} from "../design-system/stackflow/AppBar";
import { AppScreen, AppScreenContent } from "../design-system/stackflow/AppScreen";

import { extendedFab, extendedFabVariantMap } from "@seed-design/css/recipes/extended-fab";

import IconPlusFill from "@daangn/react-monochrome-icon/IconPlusFill";
import { ComponentAnalyzer } from "../components/ComponentAnalyzer";
import { ExtendedFab, type ExtendedFabProps } from "../design-system/ui/extended-fab";
import { PrefixIcon } from "@seed-design/react";

const initialVariants = {
  variant: "neutralSolid",
  size: "medium",
} satisfies ExtendedFabProps;

const ActivityExtendedFab: ActivityComponentType = () => {
  return (
    <AppScreen>
      <AppBar>
        <AppBarLeft>
          <AppBarBackButton />
        </AppBarLeft>
        <AppBarMain>Extended FAB</AppBarMain>
      </AppBar>
      <AppScreenContent>
        <ComponentAnalyzer
          variantsMap={extendedFabVariantMap}
          initialVariants={initialVariants}
          recipeFn={extendedFab}
          render={(variants) => (
            <ExtendedFab key={JSON.stringify(variants)} {...variants}>
              <PrefixIcon svg={<IconPlusFill />} />
              Hello
            </ExtendedFab>
          )}
        />
      </AppScreenContent>
    </AppScreen>
  );
};

export default ActivityExtendedFab;
