import "@seed-design/stylesheet/screen.css";

import { useActions, useStack } from "@stackflow/react";
import { createContext, useContext, useMemo, useRef } from "react";

import { type ScreenVariantProps, screen } from "@seed-design/recipe/screen";
import {
  useLazy,
  useMounted,
  useNullableActivity,
  useStyleEffectHide,
  useStyleEffectOffset,
  useStyleEffectSwipeBack,
  useZIndexBase,
} from "@stackflow/react-ui-core";
import type { ActivityTransitionState } from "@stackflow/core";

export const OFFSET_PX_ANDROID = 32;
export const OFFSET_PX_CUPERTINO = 80;

function getZIndexStyle(props: {
  base: number;
  theme: ScreenVariantProps["theme"];
  hasAppBar: boolean;
  modalPresentationStyle?: "fullScreen" | undefined;
  activityEnterStyle?: "slideInLeft" | undefined;
}) {
  const { base, theme, hasAppBar, modalPresentationStyle, activityEnterStyle } = props;

  if (theme === "cupertino") {
    return {
      "--z-index-dim": base + (modalPresentationStyle === "fullScreen" ? 2 : 0),
      "--z-index-layer": base + (hasAppBar && modalPresentationStyle !== "fullScreen" ? 2 : 3), // FIXME: transparent backswipe에서 appBar 순서로 인해 2로 설정. 1로 되돌려야 함.
      "--z-index-edge": base + 4,
      "--z-index-app-bar": base + 7,
    } as React.CSSProperties;
  }

  return {
    "--z-index-dim": base,
    "--z-index-layer": base + (activityEnterStyle === "slideInLeft" ? 1 : 3),
    "--z-index-edge": base + 4,
    "--z-index-app-bar": base + (activityEnterStyle === "slideInLeft" ? 7 : 4),
  } as React.CSSProperties;
}

function useAppScreen(props: {
  theme: ScreenVariantProps["theme"];
  modalPresentationStyle?: "fullScreen" | undefined;
  activityEnterStyle?: "slideInLeft" | undefined;
  preventSwipeBack?: boolean;
  hasAppBar: boolean;
}) {
  const { theme, preventSwipeBack, hasAppBar } = props;

  const stack = useStack();
  const activity = useNullableActivity();
  const mounted = useMounted();

  const { pop } = useActions();

  const appScreenRef = useRef<HTMLDivElement>(null);
  const dimRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const edgeRef = useRef<HTMLDivElement>(null);
  const appBarRef = useRef<HTMLDivElement>(null);

  const modalPresentationStyle = theme === "cupertino" ? props.modalPresentationStyle : undefined;
  const activityEnterStyle = theme === "android" ? props.activityEnterStyle : undefined;
  const isSwipeBackPrevented = preventSwipeBack || modalPresentationStyle === "fullScreen";

  const transitionState = activity?.transitionState ?? "enter-done";
  const lazyTransitionState = useLazy(transitionState);
  const transitionDuration = `${stack.transitionDuration}ms`;
  const computedTransitionDuration =
    stack.globalTransitionState === "loading" ? `${stack.transitionDuration}ms` : "0ms";

  useStyleEffectHide({
    refs: [appScreenRef],
  });
  useStyleEffectOffset({
    refs:
      theme === "cupertino" || activityEnterStyle === "slideInLeft"
        ? [layerRef]
        : [layerRef, appBarRef],
    offsetStyles:
      theme === "cupertino"
        ? {
            transform: `translate3d(-${OFFSET_PX_CUPERTINO / 16}rem, 0, 0)`,
            opacity: "1",
          }
        : activityEnterStyle === "slideInLeft"
          ? {
              transform: "translate3d(-50%, 0, 0)",
              opacity: "0",
            }
          : {
              transform: `translate3d(0, -${OFFSET_PX_ANDROID / 16}rem, 0)`,
              opacity: "1",
            },
    transitionDuration: computedTransitionDuration,
    hasEffect: modalPresentationStyle !== "fullScreen",
  });
  useStyleEffectSwipeBack({
    dimRef,
    edgeRef,
    paperRef: layerRef,
    offset: OFFSET_PX_CUPERTINO,
    transitionDuration: transitionDuration,
    preventSwipeBack: isSwipeBackPrevented || theme !== "cupertino",
    getActivityTransitionState() {
      const $layer = layerRef.current;
      const $appScreen = $layer?.parentElement;

      if (!$appScreen) {
        return null;
      }

      const transitionState = $appScreen.dataset["transition-state"];

      if (transitionState) {
        return transitionState as ActivityTransitionState;
      }

      return null;
    },
    onSwiped() {
      pop();
    },
  });

  const dataProps = useMemo(
    () => ({
      "data-transition-state":
        transitionState === "enter-done" || transitionState === "exit-done"
          ? transitionState
          : lazyTransitionState,
    }),
    [transitionState, lazyTransitionState],
  );

  return {
    theme,
    activity,
    scroll: ({ top }: { top: number }) => {
      layerRef.current?.scroll({
        top,
        behavior: "smooth",
      });
    },
    refs: {
      appScreen: appScreenRef,
      dim: dimRef,
      layer: layerRef,
      edge: edgeRef,
      appBar: appBarRef,
    },
    dataProps,
    rootProps: {
      ...dataProps,
      "data-stackflow-component-name": "AppScreen",
      "data-stackflow-activity-id": mounted ? activity?.id : undefined,
      "data-stackflow-activity-is-active": mounted ? activity?.isActive : undefined,
      style: getZIndexStyle({
        base: useZIndexBase(),
        theme,
        hasAppBar,
        modalPresentationStyle,
        activityEnterStyle,
      }),
    } as React.HTMLAttributes<HTMLDivElement>,
    dimProps: {
      ...dataProps,
      style: {
        display: activityEnterStyle !== "slideInLeft" ? undefined : "none",
      },
    } as React.HTMLAttributes<HTMLDivElement>,
    layerProps: {
      ...dataProps,
    } as React.HTMLAttributes<HTMLDivElement>,
    edgeProps: {
      ...dataProps,
      style: {
        display:
          !activity?.isRoot && theme === "cupertino" && !isSwipeBackPrevented ? undefined : "none",
      },
    } as React.HTMLAttributes<HTMLDivElement>,
    appBarEdgeProps: {
      ...dataProps,
      onClick: (e) => {
        if (!e.defaultPrevented) {
          layerRef.current?.scroll({
            top: 0,
            behavior: "smooth",
          });
        }
      },
    } as React.HTMLAttributes<HTMLButtonElement>,
  };
}

const AppScreenContext = createContext<ReturnType<typeof useAppScreen> | null>(null);

export function useAppScreenContext() {
  const context = useContext(AppScreenContext);
  if (!context) {
    throw new Error("useAppScreen must be used within a AppScreen");
  }

  return context;
}

export type AppScreenProps = {
  preventSwipeBack?: boolean;
  appBar?: React.ReactNode;
  theme: ScreenVariantProps["theme"];
  children: React.ReactNode;
};
export const AppScreen: React.FC<AppScreenProps> = ({
  preventSwipeBack,
  appBar,
  theme,
  children,
}) => {
  const hasAppBar = !!appBar;
  const api = useAppScreen({
    theme,
    preventSwipeBack,
    activityEnterStyle: undefined, // TODO: Implement activityEnterStyle
    modalPresentationStyle: undefined, // TODO: Implement modalPresentationStyle
    hasAppBar,
  });
  const { activity, refs, rootProps, dimProps, layerProps, edgeProps } = api;
  const classNames = screen({ theme, hasAppBar });

  return (
    <AppScreenContext.Provider value={api}>
      <div ref={refs.appScreen} className={classNames.root} {...rootProps}>
        <div className={classNames.dim} ref={refs.dim} {...dimProps} />
        {appBar}
        <div ref={refs.layer} key={activity?.id} className={classNames.layer} {...layerProps}>
          {children}
        </div>
        <div ref={refs.edge} className={classNames.edge} {...edgeProps} />
      </div>
    </AppScreenContext.Provider>
  );
};
