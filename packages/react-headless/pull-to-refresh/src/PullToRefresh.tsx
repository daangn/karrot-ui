import { mergeProps } from "@seed-design/dom-utils";
import { Primitive, type PrimitiveProps } from "@seed-design/react-primitive";
import { forwardRef } from "react";
import {
  usePullToRefresh,
  type PullToRefreshIndicatorRenderProps,
  type UsePullToRefreshProps,
} from "./usePullToRefresh";
import { PullToRefreshProvider, usePullToRefreshContext } from "./usePullToRefreshContext";
import { composeRefs } from "@radix-ui/react-compose-refs";

export interface PullToRefreshRootProps extends UsePullToRefreshProps {
  children?: React.ReactNode;
}

export const PullToRefreshRoot = ({ children, ...otherProps }: PullToRefreshRootProps) => {
  const api = usePullToRefresh(otherProps);

  return <PullToRefreshProvider value={api}>{children}</PullToRefreshProvider>;
};

export interface PullToRefreshIndicatorProps {
  render: (props: PullToRefreshIndicatorRenderProps) => React.ReactNode;
}

export const PullToRefreshIndicator = ({ render }: PullToRefreshIndicatorProps) => {
  const { getIndicatorRenderProps } = usePullToRefreshContext();
  return render(getIndicatorRenderProps());
};

export interface PullToRefreshContainerProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLDivElement> {}

export const PullToRefreshContainer = forwardRef<HTMLDivElement, PullToRefreshContainerProps>(
  (props, ref) => {
    const { refs, containerProps } = usePullToRefreshContext();
    const mergedProps = mergeProps(containerProps, props);
    return <Primitive.div ref={composeRefs(refs.containerRef, ref)} {...mergedProps} />;
  },
);
PullToRefreshContainer.displayName = "PullToRefreshContainer";
