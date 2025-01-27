import { mergeProps } from "@seed-design/dom-utils";
import { Primitive, type PrimitiveProps } from "@seed-design/react-primitive";
import { forwardRef } from "react";
import { useAppScreen, type UseAppScreenProps } from "./useAppScreen";
import { AppScreenProvider, useAppScreenContext } from "./useAppScreenContext";

export interface AppScreenRootProps
  extends PrimitiveProps,
    UseAppScreenProps,
    React.HTMLAttributes<HTMLDivElement> {}

export const AppScreenRoot = forwardRef<HTMLDivElement, AppScreenRootProps>((props, ref) => {
  const {
    swipeBackDisplacementRatioThreshold,
    swipeBackVelocityThreshold,
    onSwipeBackEnd,
    onSwipeBackMove,
    onSwipeBackStart,
    ...otherProps
  } = props;
  const api = useAppScreen({
    swipeBackDisplacementRatioThreshold,
    swipeBackVelocityThreshold,
    onSwipeBackEnd,
    onSwipeBackMove,
    onSwipeBackStart,
  });

  return (
    <AppScreenProvider value={api}>
      <Primitive.div
        ref={ref}
        data-stackflow-component-name="AppScreen"
        {...mergeProps(api.activityProps, otherProps)}
      />
    </AppScreenProvider>
  );
});
AppScreenRoot.displayName = "AppScreenRoot";

export interface AppScreenDimProps extends PrimitiveProps, React.HTMLAttributes<HTMLDivElement> {}

export const AppScreenDim = forwardRef<HTMLDivElement, AppScreenDimProps>((props, ref) => {
  const { dimProps } = useAppScreenContext();

  return <Primitive.div ref={ref} {...mergeProps(dimProps, props)} />;
});
AppScreenDim.displayName = "AppScreenDim";

export interface AppScreenEdgeProps extends PrimitiveProps, React.HTMLAttributes<HTMLDivElement> {}

export const AppScreenEdge = forwardRef<HTMLDivElement, AppScreenEdgeProps>((props, ref) => {
  const { edgeProps } = useAppScreenContext();

  return <Primitive.div ref={ref} {...mergeProps(edgeProps, props)} />;
});
AppScreenEdge.displayName = "AppScreenEdge";

export interface AppScreenLayerProps extends PrimitiveProps, React.HTMLAttributes<HTMLDivElement> {}

export const AppScreenLayer = forwardRef<HTMLDivElement, AppScreenLayerProps>((props, ref) => {
  const { layerProps } = useAppScreenContext();

  return <Primitive.div ref={ref} {...mergeProps(layerProps, props)} />;
});
AppScreenLayer.displayName = "AppScreenLayer";
