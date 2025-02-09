import { vars } from "@seed-design/vars";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import { historySyncPlugin } from "@stackflow/plugin-history-sync";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { stackflow, type ActivityComponentType, type UseActionsOutputType } from "@stackflow/react";
import React from "react";

import { IconChevronLeftLine } from "@daangn/react-monochrome-icon";
import { seedPlugin } from "@seed-design/stackflow";
import ActivityNotFound from "../activities/ActivityNotFound";
import { theme } from "./theme";

/**
 * Stackflow는 웹뷰 내에서 Stack Navigation UI를 도와주는 도구에요.
 * 아래 웹사이트를 통해, 가이드 문서를 확인하실 수 있어요.
 * 웹사이트: https://stackflow.so
 * GitHub: https://github.com/daangn/stackflow
 */

const { Stack, useFlow, useStepFlow } = stackflow({
  activities: {
    ActivityHome: React.lazy(() => import("../activities/ActivityHome")),
    ActivityActionButton: React.lazy(() => import("../activities/ActivityActionButton")),
    ActivityActionChip: React.lazy(() => import("../activities/ActivityActionChip")),
    ActivityControlChip: React.lazy(() => import("../activities/ActivityControlChip")),
    ActivityHelpBubble: React.lazy(() => import("../activities/ActivityHelpBubble")),
    ActivityLayerBar: React.lazy(() => import("../activities/ActivityLayerBar")),
    ActivityTransparentBar: React.lazy(() => import("../activities/ActivityTransparentBar")),
    ActivityAlertDialog: React.lazy(() => import("../activities/ActivityAlertDialog")),
    ActivityBottomSheet: React.lazy(() => import("../activities/ActivityBottomSheet")),
    ActivityActionSheet: React.lazy(() => import("../activities/ActivityActionSheet")),
    ActivityMannerTempLevel: React.lazy(() => import("../activities/ActivityMannerTempLevel")),
    ActivityExtendedActionSheet: React.lazy(
      () => import("../activities/ActivityExtendedActionSheet"),
    ),
    ActivityErrorState: React.lazy(() => import("../activities/ActivityErrorState")),
    ActivityNotFound,
  },
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      appBar: {
        borderColor: vars.$color.stroke.neutral,
        closeButton: {
          renderIcon: () => <IconChevronLeftLine />,
        },
        iconColor: vars.$color.fg.neutral,
        textColor: vars.$color.fg.neutral,
      },
      backgroundColor: vars.$color.bg.layerDefault,
      dimBackgroundColor: vars.$color.bg.overlay,
      theme,
    }),
    seedPlugin({
      theme,
    }),
    historySyncPlugin({
      fallbackActivity: () => "ActivityNotFound",
      routes: {
        ActivityHome: "/",
        ActivityActionButton: "/action-button",
        ActivityActionChip: "/action-chip",
        ActivityControlChip: "/control-chip",
        ActivityHelpBubble: "/help-bubble",
        ActivityLayerBar: "/layer-bar",
        ActivityTransparentBar: "/transparent-bar",
        ActivityAlertDialog: "/alert-dialog",
        ActivityBottomSheet: "/bottom-sheet",
        ActivityActionSheet: "/action-sheet",
        ActivityExtendedActionSheet: "/extended-action-sheet",
        ActivityErrorState: "/error",
        ActivityMannerTempLevel: "/manner-temp-level",
        ActivityNotFound: "/404",
      },
    }),
  ],
  transitionDuration: 270,
});

export { Stack };
export type TypeUseFlow = typeof useFlow;
export type TypeUseStepFlow = typeof useStepFlow;

export type InferActivities<T> = T extends () => UseActionsOutputType<infer A> ? A : never;
export type Activities = InferActivities<typeof useFlow>;
export type ActivityName = keyof Activities;
export type ActivityParamOf<K extends ActivityName> = Activities[K] extends ActivityComponentType<
  infer U
>
  ? U
  : Activities[K] extends { component: ActivityComponentType<infer U> }
    ? U
    : {};
