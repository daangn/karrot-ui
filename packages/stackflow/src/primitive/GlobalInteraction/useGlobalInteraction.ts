import { useCallbackRef } from "@radix-ui/react-use-callback-ref";
import { useStack } from "@stackflow/react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export type SwipeBackState = "idle" | "swiping" | "transitioning";

export type UseGlobalInteractionReturn = ReturnType<typeof useGlobalInteraction>;

export interface SwipeBackContext {
  x0: number;
  t0: number;
  displacement: number;
  displacementRatio: number;
  velocity: number;
}

export interface SwipeBackProps {
  /**
   * The threshold to determine whether the swipe back is intentional.
   * @default 0.4
   */
  displacementRatioThreshold?: number;

  /**
   * The threshold to determine whether the swipe back is intentional.
   * @default 1
   */
  velocityThreshold?: number;

  onSwipeStart?: () => void;
  onSwipeMove?: (props: { displacement: number; displacementRatio: number }) => void;
  onSwipeEnd?: (props: { swiped: boolean }) => void;
}

export interface StartSwipeBackProps {
  x0: number;
  t0: number;
}

export interface MoveSwipeBackProps {
  x: number;
  t: number;
}

// biome-ignore lint/suspicious/noEmptyInterface: intentionally empty for future extension
export interface EndSwipeBackProps {}

export function useGlobalInteraction() {
  const [swipeBackState, setSwipeBackState] = useState<SwipeBackState>("idle");

  const swipeBackContextRef = useRef<SwipeBackContext>({
    x0: 0,
    t0: 0,
    displacement: 0,
    displacementRatio: 0,
    velocity: 0,
  });
  const stackRef = useRef<HTMLDivElement>(null);

  const setSwipeBackContext = useCallback((ctx: SwipeBackContext) => {
    swipeBackContextRef.current = ctx;
    stackRef.current?.style.setProperty(
      "--swipe-back-displacement",
      `${ctx.displacement.toString()}px`,
    );
    stackRef.current?.style.setProperty(
      "--swipe-back-displacement-ratio",
      ctx.displacementRatio.toString(),
    );
  }, []);

  const getSwipeBackEvents = useCallback(
    (props: SwipeBackProps) => {
      const { displacementRatioThreshold = 0.4, velocityThreshold = 1 } = props;
      const onSwipeStart = useCallbackRef(props.onSwipeStart);
      const onSwipeMove = useCallbackRef(props.onSwipeMove);
      const onSwipeEnd = useCallbackRef(props.onSwipeEnd);

      const startSwipeBack = useCallback(
        ({ x0, t0 }: StartSwipeBackProps) => {
          setSwipeBackContext({
            x0,
            t0,
            displacement: 0,
            displacementRatio: 0,
            velocity: 0,
          });
          setSwipeBackState("swiping");

          onSwipeStart?.();
        },
        [onSwipeStart],
      );

      const moveSwipeBack = useCallback(
        ({ x, t }: MoveSwipeBackProps) => {
          const displacement = x - swipeBackContextRef.current.x0;
          const displacementRatio = displacement / window.innerWidth;
          const velocity = displacement / (t - swipeBackContextRef.current.t0);
          setSwipeBackContext({
            ...swipeBackContextRef.current,
            displacement,
            displacementRatio,
            velocity,
          });
          setSwipeBackState("swiping");

          onSwipeMove?.({ displacement, displacementRatio });
        },
        [onSwipeMove],
      );

      const endSwipeBack = useCallback(
        (_: EndSwipeBackProps) => {
          const swiped =
            swipeBackContextRef.current.displacementRatio > displacementRatioThreshold ||
            swipeBackContextRef.current.velocity > velocityThreshold;

          // we intentionally do not reset context here, so that the displacement can be used for exit animation
          setSwipeBackState("transitioning");

          onSwipeEnd?.({ swiped });
        },
        [onSwipeEnd, displacementRatioThreshold, velocityThreshold],
      );

      const reset = useCallback(() => {
        setSwipeBackContext({
          x0: 0,
          t0: 0,
          displacement: 0,
          displacementRatio: 0,
          velocity: 0,
        });
        setSwipeBackState("idle");
      }, []);

      return useMemo(
        () => ({
          startSwipeBack,
          moveSwipeBack,
          endSwipeBack,
          reset,
        }),
        [startSwipeBack, moveSwipeBack, endSwipeBack, reset],
      );
    },
    [setSwipeBackContext],
  );

  const stack = useStack();
  const [topEl, setTopEl] = useState<HTMLElement | null>(null);
  const topId = stack.activities.find((activity) => activity.isTop)?.id;
  const topActivity = stack.activities.find((activity) => activity.isTop);
  const globalTransitionState = topActivity?.transitionState ?? "enter-done";
  const topActivityType = topEl?.dataset["activityType"];

  useEffect(() => {
    if (!topId) return;

    setTopEl(document.getElementById(topId));
  }, [topId]);

  const stackProps = useMemo(
    () => ({
      "data-swipe-back-state": swipeBackState,
      "data-global-transition-state": globalTransitionState,
      "data-top-activity-type": topActivityType,
    }),
    [swipeBackState, globalTransitionState, topActivityType],
  ) as React.HTMLAttributes<HTMLElement>;

  return useMemo(
    () => ({
      stackRef,
      swipeBackContextRef,
      swipeBackState,
      setSwipeBackState,
      setSwipeBackContext,
      getSwipeBackEvents,

      stackProps,
    }),
    [swipeBackState, setSwipeBackContext, getSwipeBackEvents, stackProps],
  );
}
