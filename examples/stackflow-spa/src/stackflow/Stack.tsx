import { vars } from "@seed-design/vars";
import { IconBack, basicUIPlugin } from "@stackflow/plugin-basic-ui";
import { historySyncPlugin } from "@stackflow/plugin-history-sync";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { stackflow } from "@stackflow/react";
import React from "react";

import ActivityNotFound from "../activities/ActivityNotFound";

/**
 * Stackflow는 웹뷰 내에서 Stack Navigation UI를 도와주는 도구에요.
 * 아래 웹사이트를 통해, 가이드 문서를 확인하실 수 있어요.
 * 웹사이트: https://stackflow.so
 * GitHub: https://github.com/daangn/stackflow
 */

const theme = /iphone|ipad|ipod/i.test(window.navigator.userAgent.toLowerCase())
  ? "cupertino"
  : "android";

const { Stack, useFlow, useStepFlow } = stackflow({
  activities: {
    ActivityHome: React.lazy(() => import("../activities/ActivityHome")),
    ActivityActionButton: React.lazy(() => import("../activities/ActivityActionButton")),
    ActivityActionChip: React.lazy(() => import("../activities/ActivityActionChip")),
    ActivityControlChip: React.lazy(() => import("../activities/ActivityControlChip")),
    ActivityHelpBubble: React.lazy(() => import("../activities/ActivityHelpBubble")),
    ActivityTransparentBar: React.lazy(() => import("../activities/ActivityTransparentBar")),
    ActivityNotFound,
  },
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      appBar: {
        borderColor: vars.$color.stroke.neutral,
        closeButton: {
          renderIcon: () => <IconBack />,
        },
        iconColor: vars.$color.fg.neutral,
        textColor: vars.$color.fg.neutral,
      },
      backgroundColor: vars.$color.bg.layerDefault,
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
        ActivityTransparentBar: "/transparent-bar",
        ActivityNotFound: "/404",
      },
    }),
  ],
  transitionDuration: 270,
});

export { Stack };
export type TypeUseFlow = typeof useFlow;
export type TypeUseStepFlow = typeof useStepFlow;
