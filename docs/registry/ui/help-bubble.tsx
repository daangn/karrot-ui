"use client";

import "@seed-design/stylesheet/helpBubble.css";

import { Slot } from "@radix-ui/react-slot";
import { usePopover, type UsePopoverProps } from "@seed-design/react-popover";
import { helpBubble } from "@seed-design/recipe/helpBubble";
import { createContext, forwardRef, useContext } from "react";
import { mergeRefs } from "../util/mergeRefs";

interface HelpBubbleArrowProps extends React.ComponentPropsWithRef<"svg"> {
  width: number;

  height: number;

  tipRadius: number;
}

const HelpBubbleArrow = forwardRef<SVGSVGElement, HelpBubbleArrowProps>(
  (props, ref) => {
    const { width, height, tipRadius, ...otherProps } = props;
    const pathData = `M0,0
    H${width}
    L${width / 2 + tipRadius},${height - tipRadius}
    Q${width / 2},${height} ${width / 2 - tipRadius},${height - tipRadius}
    Z`;

    return (
      <svg
        aria-hidden="true"
        width={width}
        height={width}
        viewBox={`0 0 ${width} ${height > width ? height : width}`}
        ref={ref}
        {...otherProps}
      >
        <path stroke="none" d={pathData} />
      </svg>
    );
  },
);

const HelpBubbleContext = createContext<{
  api: ReturnType<typeof usePopover>;
} | null>(null);

export interface HelpBubbleTriggerProps extends UsePopoverProps {
  title: string;

  description?: string;

  children?: React.ReactNode;
}

export const HelpBubbleTrigger = forwardRef<
  HTMLButtonElement,
  HelpBubbleTriggerProps
>((props, ref) => {
  const {
    open,
    defaultOpen,
    onOpenChange,
    placement = "top",
    gutter = 4,
    overflowPadding = 16,
    arrowPadding = 14,
    flip,
    slide,
    strategy,
    title,
    description,
    ...otherProps
  } = props;

  const api = usePopover({
    open,
    defaultOpen,
    onOpenChange,
    placement,
    gutter,
    overflowPadding,
    arrowPadding,
    flip,
    slide,
    strategy,
  });
  const classNames = helpBubble();

  const arrowRect = api.rects.arrow;

  return (
    <>
      <Slot
        ref={mergeRefs(ref, api.refs.trigger)}
        {...api.triggerProps}
        {...otherProps}
      />
      {api.open && (
        <div
          ref={api.refs.positioner}
          {...api.positionerProps}
          className={classNames.positioner}
        >
          <div className={classNames.content}>
            <div
              ref={api.refs.arrow}
              {...api.arrowProps}
              className={classNames.arrow}
            >
              <HelpBubbleArrow
                width={arrowRect?.width ?? 0}
                height={arrowRect?.height ?? 0}
                tipRadius={1}
              />
            </div>
            <span className={classNames.title}>{props.title}</span>
            {props.description && (
              <span className={classNames.description}>
                {props.description}
              </span>
            )}
          </div>
        </div>
      )}
    </>
  );
});
