import * as React from "react";
import { type TokenObject, vars } from "@seed-design/vars";

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: keyof TokenObject["$color"]["fg"];

  backgroundColor?: keyof TokenObject["$color"]["bg"];

  borderColor?: keyof TokenObject["$color"]["stroke"];

  borderRadius?: keyof TokenObject["$radius"];

  width?: keyof TokenObject["$unit"];

  height?: keyof TokenObject["$unit"];

  padding?: keyof TokenObject["$unit"];

  paddingTop?: keyof TokenObject["$unit"];

  paddingRight?: keyof TokenObject["$unit"];

  paddingBottom?: keyof TokenObject["$unit"];

  paddingLeft?: keyof TokenObject["$unit"];

  gap?: keyof TokenObject["$unit"];

  flexDirection?: "row" | "column";

  alignItems?: "center";
}

const handlers = {
  color: (key: string) =>
    vars.$color.fg[key as keyof TokenObject["$color"]["fg"]],
  backgroundColor: (key: string) =>
    vars.$color.bg[key as keyof TokenObject["$color"]["bg"]],
  borderColor: (key: string) =>
    vars.$color.stroke[key as keyof TokenObject["$color"]["stroke"]],
  borderRadius: (key: string) =>
    vars.$radius[key as keyof TokenObject["$radius"]],
  width: (key: string) => vars.$unit[key as keyof TokenObject["$unit"]],
  height: (key: string) => vars.$unit[key as keyof TokenObject["$unit"]],
  padding: (key: string) => vars.$unit[key as keyof TokenObject["$unit"]],
  paddingTop: (key: string) => vars.$unit[key as keyof TokenObject["$unit"]],
  paddingRight: (key: string) => vars.$unit[key as keyof TokenObject["$unit"]],
  paddingBottom: (key: string) => vars.$unit[key as keyof TokenObject["$unit"]],
  paddingLeft: (key: string) => vars.$unit[key as keyof TokenObject["$unit"]],
  gap: (key: string) => vars.$unit[key as keyof TokenObject["$unit"]],
  flexDirection: (key: string) => key,
  alignItems: (key: string) => key,
};

/**
 * Naive implementation of Flex component. should be replaced with actual implementation.
 */
export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  (props, ref) => {
    const knownProps: Record<string, unknown> = {};
    const nativeProps: Record<string, unknown> = {};

    for (const key in props) {
      if (key in handlers) {
        knownProps[key] = handlers[key as keyof typeof handlers](
          props[key as keyof typeof props],
        );
      } else {
        nativeProps[key] = props[key as keyof typeof props];
      }
    }

    return (
      <div
        ref={ref}
        style={{
          display: "flex",
          ...knownProps,
          ...props.style,
        }}
        {...nativeProps}
      />
    );
  },
);
