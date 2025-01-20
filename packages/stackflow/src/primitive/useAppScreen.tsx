import { buttonProps, dataAttr, elementProps } from "@seed-design/dom-utils";
import { useStack } from "@stackflow/react";
import { useNullableActivity, useZIndexBase } from "@stackflow/react-ui-core";
import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import { type UseSwipeBackProps, useSwipeBack } from "./useSwipeBack";

export interface UseAppScreenProps extends UseSwipeBackProps {}

export type UseAppScreenReturn = ReturnType<typeof useAppScreen>;

export function useAppScreen(props: UseAppScreenProps) {
  const activity = useNullableActivity();

  const layerRef = useRef<HTMLDivElement>(null);
  const appBarRef = useRef<HTMLDivElement>(null);

  const transitionState = activity?.transitionState ?? "enter-done";

  const { activityProps, layerProps, edgeProps } = useSwipeBack(props);

  const zIndexBase = useZIndexBase();
  const zIndexStyle = useMemo(
    () =>
      ({
        "--z-index-base": zIndexBase.toString(),
      }) as React.CSSProperties,
    [zIndexBase],
  );

  // FIXME: ugly hack for top activity type; extract to global provider if stackflow supports provider between stack and activities.
  const stack = useStack();
  const [topEl, setTopEl] = useState<HTMLElement | null>(null);
  const topActivityType = topEl?.dataset["activityType"];
  const topId = stack.activities.find((activity) => activity.isTop)?.id;
  useEffect(() => {
    if (!topId) return;

    setTopEl(document.getElementById(topId));
  }, [topId]);

  const stateProps = useMemo(
    () => ({
      "data-activity-is-top": dataAttr(activity?.isTop),
      "data-activity-is-active": dataAttr(activity?.isActive),
      "data-transition-state": transitionState,
      "data-top-activity-type": topActivityType,
    }),
    [transitionState, activity?.isActive, activity?.isTop, topActivityType],
  );

  return useMemo(
    () => ({
      activity,
      scroll: ({ top }: { top: number }) => {
        layerRef.current?.scroll({
          top,
          behavior: "smooth",
        });
      },
      refs: {
        layer: layerRef,
        appBar: appBarRef,
      },
      stateProps,
      activityProps: elementProps({
        id: activity?.id,
        "data-part": "activity",
        "data-activity-type": "full-screen",
        ...activityProps,
        ...stateProps,
        "data-activity-id": activity?.id,
        style: zIndexStyle,
      }),
      dimProps: elementProps({
        "data-part": "dim",
        ...stateProps,
      }),
      layerProps: elementProps({
        "data-part": "layer",
        ...stateProps,
        ...layerProps,
      }),
      edgeProps: elementProps({
        "data-part": "edge",
        ...edgeProps,
        ...stateProps,
      }),
      appBarEdgeProps: buttonProps({
        ...stateProps,
        onClick: (e) => {
          if (!e.defaultPrevented) {
            layerRef.current?.scroll({
              top: 0,
              behavior: "smooth",
            });
          }
        },
      }),
    }),
    [activity, zIndexStyle, stateProps, activityProps, edgeProps, layerProps],
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
