import { skeleton, type SkeletonVariantProps } from "@seed-design/recipe/skeleton";
import type * as React from "react";
import { createStyleContext } from "../../utils/createStyleContext";
import { Box, type BoxProps } from "../Box";

const { withProvider } = createStyleContext(skeleton);

export interface SkeletonProps
  extends SkeletonVariantProps,
    Pick<BoxProps, "width" | "height">,
    Omit<React.HTMLAttributes<HTMLDivElement>, "color"> {}

export const Skeleton = withProvider<HTMLDivElement, SkeletonProps>(Box, "root");
