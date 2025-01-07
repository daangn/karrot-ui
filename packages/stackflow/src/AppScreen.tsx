import { composeRefs } from "@radix-ui/react-compose-refs";
import { appScreen, type AppScreenVariantProps } from "@seed-design/recipe/appScreen";
import { createContext, forwardRef, useContext, useMemo } from "react";
import { PropsProvider } from "./AppBar";
import {
  AppScreenProvider,
  useAppScreen,
  useAppScreenContext,
  type UseAppScreenProps,
} from "./primitive/useAppScreen";

const StyleContext = createContext<ReturnType<typeof appScreen> | null>(null);

function useStyleContext() {
  const context = useContext(StyleContext);
  if (!context) {
    throw new Error("useStyleContext must be used within a AppScreen");
  }

  return context;
}

export interface AppScreenDimProps extends React.HTMLAttributes<HTMLDivElement> {}

export const AppScreenDim = forwardRef<HTMLDivElement, AppScreenDimProps>(
  ({ className, ...otherProps }, ref) => {
    const { dimProps } = useAppScreenContext();
    const classNames = useStyleContext();

    return <div ref={ref} className={classNames.dim} {...dimProps} {...otherProps} />;
  },
);
AppScreenDim.displayName = "AppScreenDim";

export interface AppScreenEdgeProps extends React.HTMLAttributes<HTMLDivElement> {}

export const AppScreenEdge = forwardRef<HTMLDivElement, AppScreenEdgeProps>(
  ({ className, ...otherProps }, ref) => {
    const { edgeProps } = useAppScreenContext();
    const classNames = useStyleContext();

    return <div aria-hidden ref={ref} className={classNames.edge} {...edgeProps} {...otherProps} />;
  },
);
AppScreenEdge.displayName = "AppScreenEdge";

export interface AppScreenLayerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const AppScreenLayer = forwardRef<HTMLDivElement, AppScreenLayerProps>(
  ({ className, ...otherProps }, ref) => {
    const { refs, layerProps } = useAppScreenContext();
    const classNames = useStyleContext();

    return (
      <div
        ref={composeRefs(ref, refs.layer)}
        className={classNames.layer}
        {...layerProps}
        {...otherProps}
      />
    );
  },
);
AppScreenLayer.displayName = "AppScreenLayer";

export interface AppScreenProps
  extends Omit<AppScreenVariantProps, "hasAppBar">,
    UseAppScreenProps,
    React.HTMLAttributes<HTMLDivElement> {
  appBar?: React.ReactNode;
}

export const AppScreenRoot = forwardRef<HTMLDivElement, AppScreenProps>(
  ({ appBar, theme, children, ...otherProps }, ref) => {
    const hasAppBar = !!appBar;
    const api = useAppScreen(otherProps);
    const classNames = useMemo(() => appScreen({ theme, hasAppBar }), [theme, hasAppBar]);

    return (
      <div
        ref={ref}
        className={classNames.root}
        data-stackflow-component-name="AppScreen"
        {...api.activityProps}
      >
        <AppScreenProvider value={api}>
          <StyleContext.Provider value={classNames}>
            <PropsProvider value={useMemo(() => ({ theme }), [theme])}>{appBar}</PropsProvider>
            {children}
          </StyleContext.Provider>
        </AppScreenProvider>
      </div>
    );
  },
);
AppScreenRoot.displayName = "AppScreenRoot";
