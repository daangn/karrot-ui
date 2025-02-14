import { PullToRefresh as PullToRefreshPrimitive } from "@seed-design/react-pull-to-refresh";
import { pullToRefresh, type PullToRefreshVariantProps } from "@seed-design/recipe/pull-to-refresh";
import { createStyleContext } from "../../utils/createStyleContext";

const { withContext, withProvider } = createStyleContext(pullToRefresh);

export interface PullToRefreshRootProps
  extends PullToRefreshVariantProps,
    PullToRefreshPrimitive.RootProps {}

export const PullToRefreshRoot = withProvider<SVGSVGElement, PullToRefreshRootProps>(
  PullToRefreshPrimitive.Root,
  "root",
);

export interface PullToRefreshIndicatorProps extends PullToRefreshPrimitive.IndicatorProps {}

export const PullToRefreshIndicator = withContext<HTMLDivElement, PullToRefreshIndicatorProps>(
  PullToRefreshPrimitive.Indicator,
  "indicator",
);

export interface PullToRefreshContentProps extends PullToRefreshPrimitive.ContentProps {}

export const PullToRefreshContent = PullToRefreshPrimitive.Content;
