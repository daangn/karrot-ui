import { ProgressCircle as ProgressCirclePrimitive } from "@seed-design/react-progress";
import {
  progressCircle,
  type ProgressCircleVariantProps,
} from "@seed-design/recipe/progress-circle";
import { createStyleContext } from "../../utils/createStyleContext";

const { withContext, withProvider } = createStyleContext(progressCircle);

export interface ProgressCircleRootProps
  extends ProgressCirclePrimitive.RootProps,
    Omit<ProgressCircleVariantProps, "indeterminate"> {}

export const ProgressCircleRoot = withProvider<SVGSVGElement, ProgressCircleRootProps>(
  ProgressCirclePrimitive.Root,
  "root",
);

export interface ProgressCircleTrackProps extends ProgressCirclePrimitive.TrackProps {}

export const ProgressCircleTrack = withContext<SVGCircleElement, ProgressCircleTrackProps>(
  ProgressCirclePrimitive.Track,
  "track",
);

export interface ProgressCircleRangeProps extends ProgressCirclePrimitive.RangeProps {}

export const ProgressCircleRange = withContext<SVGCircleElement, ProgressCircleRangeProps>(
  ProgressCirclePrimitive.Range,
  "range",
);
