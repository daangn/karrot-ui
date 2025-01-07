import type { ActivityComponentType } from "@stackflow/react";
import { AppBar, BackButton, Left, Title } from "../design-system/stackflow/AppBar";
import { AppScreen } from "../design-system/stackflow/AppScreen";

import { actionButton, actionButtonVariantMap } from "@seed-design/recipe/actionButton";

import IconPlusFill from "@daangn/react-monochrome-icon/IconPlusFill";
import { ComponentAnalyzer } from "../components/ComponentAnalyzer";
import { ActionButton, type ActionButtonProps } from "../design-system/ui/action-button";

const initialVariants = {
  variant: "brandSolid",
  size: "xsmall",
  layout: "withText",
} satisfies ActionButtonProps;

const ActivityActionButton: ActivityComponentType = () => {
  return (
    <AppScreen
      appBar={
        <AppBar>
          <Left>
            <BackButton />
          </Left>
          <Title>Action Button</Title>
        </AppBar>
      }
    >
      <ComponentAnalyzer
        variantsMap={actionButtonVariantMap}
        initialVariants={initialVariants}
        recipeFn={actionButton}
        render={(variants) => (
          <ActionButton key={JSON.stringify(variants)} {...variants}>
            {variants.layout === "withText" ? "야옹" : <IconPlusFill />}
          </ActionButton>
        )}
      />
    </AppScreen>
  );
};

export default ActivityActionButton;
