"use client";

import "@seed-design/stylesheet/skeleton.css";

import {
  skeleton,
  type SkeletonVariantProps,
} from "@seed-design/recipe/skeleton";
import clsx from "clsx";
import * as React from "react";
import { styleProps, type StyleProps } from "../util/styleProps";

interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    SkeletonVariantProps,
    StyleProps {}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  (props, ref) => {
    const { className, shape, ...otherProps } = props;
    const classNames = skeleton({
      shape,
    });
    const { style } = styleProps(otherProps);

    return (
      <div
        ref={ref}
        {...otherProps}
        className={clsx("seed-box", classNames.root, className)}
        style={style}
      />
    );
  },
);
