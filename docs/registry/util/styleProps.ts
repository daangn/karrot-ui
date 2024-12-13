import { vars, type TokenObject } from "@seed-design/vars";
import type * as React from "react";

export interface StyleProps {
  width?: keyof TokenObject["$unit"] | (string & {});

  height?: keyof TokenObject["$unit"] | (string & {});

  style?: React.CSSProperties;
}

/**
 * Naive implementation of styleProps. should be replaced with actual implementation.
 */
export function styleProps(props: StyleProps) {
  const { width, height, style } = props;

  return {
    style: {
      ...style,
      // @ts-ignore
      "--seed-box-width": vars.$unit[width] ?? width,
      // @ts-ignore
      "--seed-box-height": vars.$unit[height] ?? height,
    },
  };
}
