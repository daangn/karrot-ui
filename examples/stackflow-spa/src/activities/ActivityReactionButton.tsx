import type { ActivityComponentType } from "@stackflow/react";
import {
  AppBar,
  AppBarBackButton,
  AppBarLeft,
  AppBarMain,
} from "../design-system/stackflow/AppBar";
import { AppScreen, AppScreenContent } from "../design-system/stackflow/AppScreen";

import { reactionButton, reactionButtonVariantMap } from "@seed-design/css/recipes/reaction-button";

import { ComponentAnalyzer } from "../components/ComponentAnalyzer";
import { ReactionButton, type ReactionButtonProps } from "../design-system/ui/reaction-button";
import { IconFaceSmileCircleFill } from "@daangn/react-monochrome-icon";

const initialVariants = {
  size: "small",
} satisfies ReactionButtonProps;

const ActivityReactionButton: ActivityComponentType = () => {
  return (
    <AppScreen>
      <AppBar>
        <AppBarLeft>
          <AppBarBackButton />
        </AppBarLeft>
        <AppBarMain>Reaction Button</AppBarMain>
      </AppBar>
      <AppScreenContent>
        <ComponentAnalyzer
          variantsMap={reactionButtonVariantMap}
          initialVariants={initialVariants}
          recipeFn={reactionButton}
          render={(variants) => (
            <ReactionButton
              prefixIcon={<IconFaceSmileCircleFill />}
              key={JSON.stringify(variants)}
              {...variants}
              count={10}
            >
              야옹쓰
            </ReactionButton>
          )}
        />
      </AppScreenContent>
    </AppScreen>
  );
};

export default ActivityReactionButton;
