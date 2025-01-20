import { elementProps } from "@seed-design/dom-utils";
import { useRef, useState } from "react";

interface UsePullToRefreshStateProps {
  /**
   * The threshold value to trigger the refresh.
   * @default 80
   */
  threshold?: number;

  onReady?: () => void;

  onRefresh?: () => Promise<void>;
}

interface PullToRefreshContext {
  y0: number;

  displacement: number;

  displacementRatio: number;
}

export type PullToRefreshState = "idle" | "pulling" | "ready" | "loading";

function usePullToRefreshState(props: UsePullToRefreshStateProps) {
  const threshold = props.threshold ?? 80;

  const [state, setState] = useState("idle");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contextRef = useRef<PullToRefreshContext>({
    y0: 0,
    displacement: 0,
    displacementRatio: 0,
  });

  function setContext({ y0, displacement }: Omit<PullToRefreshContext, "displacementRatio">) {
    contextRef.current = {
      y0,
      displacement,
      displacementRatio: displacement / threshold,
    };
    containerRef.current?.style.setProperty("--ptr-displacement", `${displacement}px`);
  }

  const events = {
    start: ({ y0 }: { y0: number }) => {
      if (state !== "idle") {
        return;
      }
      setContext({ y0, displacement: 0 });
      setState("pulling");
    },
    move: ({ y }: { y: number }) => {
      if (state !== "pulling" && state !== "ready") {
        return;
      }

      const { y0 } = contextRef.current;
      const displacement = y - y0;
      setContext({ y0, displacement });

      if (displacement > threshold) {
        setState("ready");
        props.onReady?.();
      } else {
        setState("pulling");
      }
    },
    end: () => {
      if (state === "ready" && props.onRefresh) {
        setState("loading");
        props.onRefresh().then(() => {
          setState("idle");
          setContext({ y0: 0, displacement: 0 });
        });
      } else {
        setState("idle");
        setContext({ y0: 0, displacement: 0 });
      }
    },
  };

  return {
    state,
    refs: { containerRef },
    contextRef,
    events,
  };
}

export interface UsePullToRefreshProps extends UsePullToRefreshStateProps {}

export interface PullToRefreshIndicatorRenderProps {
  minValue: number;
  maxValue: number;
  value: number;
}

export type UsePullToRefreshReturn = ReturnType<typeof usePullToRefresh>;

export function usePullToRefresh(props: UsePullToRefreshProps) {
  const { state, contextRef, refs, events } = usePullToRefreshState(props);

  const stateProps = elementProps({
    "data-ptr-state": state,
  });

  return {
    state,

    refs,
    stateProps,
    getIndicatorRenderProps: () => {
      return {
        minValue: 0,
        maxValue: 100,
        value: contextRef.current.displacementRatio * 100,
      };
    },
    containerProps: elementProps({
      ...stateProps,
      onTouchStart: (e: React.TouchEvent) => {
        events.start({ y0: e.touches[0].clientY });
      },
      onTouchMove: (e: React.TouchEvent) => {
        events.move({ y: e.touches[0].clientY });
      },
      onTouchEnd: () => {
        events.end();
      },
      style: {
        transform: "translateY(var(--ptr-displacement, 0))",
      },
    }),
  };
}
