import { useActions, useStack } from "@stackflow/react";
import { createContext, useContext, useMemo, useRef } from "react";

import type { ActivityTransitionState } from "@stackflow/core";
import {
  useLazy,
  useNullableActivity,
  useStyleEffectHide,
  useStyleEffectOffset,
  useStyleEffectSwipeBack,
  useZIndexBase,
} from "@stackflow/react-ui-core";

const OFFSET_PX_ANDROID = 32;
const OFFSET_PX_CUPERTINO = 80;

function getZIndexStyle(props: {
  base: number;
  theme?: "android" | "cupertino";
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

export function useAppScreen(props: {
  theme?: "android" | "cupertino";
  modalPresentationStyle?: "fullScreen" | undefined;
  activityEnterStyle?: "slideInLeft" | undefined;
  preventSwipeBack?: boolean;
  hasAppBar: boolean;
}) {
  const { theme, preventSwipeBack, hasAppBar } = props;

  const stack = useStack();
  const activity = useNullableActivity();

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
            transform: `translate3d(-${OFFSET_PX_CUPERTINO}px, 0, 0)`,
            opacity: "1",
          }
        : activityEnterStyle === "slideInLeft"
          ? {
              transform: "translate3d(-50%, 0, 0)",
              opacity: "0",
            }
          : {
              transform: `translate3d(0, -${OFFSET_PX_ANDROID}px, 0)`,
              opacity: "1",
            },
    transitionDuration: computedTransitionDuration,
    hasEffect: modalPresentationStyle !== "fullScreen",
  });
  useStyleEffectSwipeBack({
    dimRef,
    edgeRef,
    paperRef: layerRef,
    appBarRef,
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
    onSwipeEnd({ swiped }) {
      if (swiped) {
        pop();
      }
    },
  });

  const zIndexBase = useZIndexBase();
  const zIndexStyle = useMemo(
    () =>
      getZIndexStyle({
        base: zIndexBase,
        theme,
        hasAppBar,
        modalPresentationStyle,
        activityEnterStyle,
      }),
    [zIndexBase, theme, hasAppBar, modalPresentationStyle, activityEnterStyle],
  );

  const dataProps = useMemo(
    () => ({
      "data-transition-state":
        transitionState === "enter-done" || transitionState === "exit-done"
          ? transitionState
          : lazyTransitionState,
    }),
    [transitionState, lazyTransitionState],
  );

  return useMemo(
    () => ({
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
        style: zIndexStyle,
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
            !activity?.isRoot && theme === "cupertino" && !isSwipeBackPrevented
              ? undefined
              : "none",
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
    }),
    [theme, activity, zIndexStyle, isSwipeBackPrevented, activityEnterStyle, dataProps],
  );
}

const AppScreenContext = createContext<ReturnType<typeof useAppScreen> | null>(null);

export const AppScreenProvider = AppScreenContext.Provider;

export function useAppScreenContext() {
  const context = useContext(AppScreenContext);
  if (!context) {
    throw new Error("useAppScreen must be used within a AppScreen");
  }

  return context;
}
