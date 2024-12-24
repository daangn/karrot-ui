import { composeRefs } from "@radix-ui/react-compose-refs";
import { type ScreenVariantProps, screen } from "@seed-design/recipe/screen";
import { createContext, forwardRef, useContext, useMemo } from "react";
import { AppScreenProvider, useAppScreen, useAppScreenContext } from "./useAppScreen";

const StyleContext = createContext<ReturnType<typeof screen> | null>(null);

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
    const { refs, dimProps } = useAppScreenContext();
    const classNames = useStyleContext();

    return (
      <div
        ref={composeRefs(ref, refs.dim)}
        className={classNames.dim}
        {...dimProps}
        {...otherProps}
      />
    );
  },
);
AppScreenDim.displayName = "AppScreenDim";

export interface AppScreenEdgeProps extends React.HTMLAttributes<HTMLDivElement> {}

export const AppScreenEdge = forwardRef<HTMLDivElement, AppScreenEdgeProps>(
  ({ className, ...otherProps }, ref) => {
    const { refs, edgeProps } = useAppScreenContext();
    const classNames = useStyleContext();

    return (
      <div
        ref={composeRefs(ref, refs.edge)}
        className={classNames.edge}
        {...edgeProps}
        {...otherProps}
      />
    );
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
  extends React.HTMLAttributes<HTMLDivElement>,
    Omit<ScreenVariantProps, "hasAppBar"> {
  preventSwipeBack?: boolean;
  appBar?: React.ReactNode;
}

export const AppScreenRoot = forwardRef<HTMLDivElement, AppScreenProps>(
  ({ preventSwipeBack, appBar, theme, children }, ref) => {
    const hasAppBar = !!appBar;
    const api = useAppScreen({
      theme,
      preventSwipeBack,
      activityEnterStyle: undefined, // TODO: Implement activityEnterStyle
      modalPresentationStyle: undefined, // TODO: Implement modalPresentationStyle
      hasAppBar,
    });
    const { refs, rootProps } = api;
    const classNames = useMemo(() => screen({ theme, hasAppBar }), [theme, hasAppBar]);

    return (
      <div
        ref={composeRefs(ref, refs.appScreen)}
        className={classNames.root}
        data-stackflow-component-name="AppScreen"
        {...rootProps}
      >
        <AppScreenProvider value={api}>
          <StyleContext.Provider value={classNames}>
            {appBar}
            {children}
          </StyleContext.Provider>
        </AppScreenProvider>
      </div>
    );
  },
);
AppScreenRoot.displayName = "AppScreenRoot";
