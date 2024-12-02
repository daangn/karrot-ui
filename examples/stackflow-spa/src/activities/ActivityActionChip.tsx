import { AppScreen } from "@stackflow/plugin-basic-ui";
import type { ActivityComponentType } from "@stackflow/react";

import { actionChip, actionChipVariantMap } from "@seed-design/recipe/actionChip";

import IconAddRegular from "@seed-design/icon/IconAddRegular";
import { ComponentAnalyzer } from "../components/ComponentAnalyzer";
import { ActionChip, type ActionChipProps } from "../design-system/ui/action-chip";

const initialVariants = {
  size: "medium",
  layout: "withText",
} satisfies ActionChipProps;

const ActivityActionChip: ActivityComponentType = () => {
  return (
    <AppScreen appBar={{ title: "ActionChip" }}>
      <ComponentAnalyzer
        variantsMap={actionChipVariantMap}
        initialVariants={initialVariants}
        recipeFn={actionChip}
        render={(variants) => (
          <ActionChip key={JSON.stringify(variants)} {...variants}>
            {variants.layout === "withText" ? "야옹" : <IconAddRegular />}
          </ActionChip>
        )}
      />
    </AppScreen>
  );
};

export default ActivityActionChip;
