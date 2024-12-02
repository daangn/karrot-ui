import { AppScreen } from "@stackflow/plugin-basic-ui";
import type { ActivityComponentType } from "@stackflow/react";

import { actionButton, actionButtonVariantMap } from "@seed-design/recipe/actionButton";

import IconAddRegular from "@seed-design/icon/IconAddRegular";
import { ComponentAnalyzer } from "../components/ComponentAnalyzer";
import { ActionButton, type ActionButtonProps } from "../design-system/ui/action-button";

const initialVariants = {
  variant: "brandSolid",
  size: "xsmall",
  layout: "withText",
} satisfies ActionButtonProps;

const ActivityActionButton: ActivityComponentType = () => {
  return (
    <AppScreen appBar={{ title: "ActionButton" }}>
      <ComponentAnalyzer
        variantsMap={actionButtonVariantMap}
        initialVariants={initialVariants}
        recipeFn={actionButton}
        render={(variants) => (
          <ActionButton key={JSON.stringify(variants)} {...variants}>
            {variants.layout === "withText" ? "야옹" : <IconAddRegular />}
          </ActionButton>
        )}
      />
    </AppScreen>
  );
};

export default ActivityActionButton;
