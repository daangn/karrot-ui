import { elementProps } from "@seed-design/dom-utils";
import { useRef, useState, useSyncExternalStore } from "react";
import { Store } from "./store";

interface UsePullToRefreshStateProps {
  /**
   * The threshold value to trigger the refresh. (px)
   * @default 44
   */
  threshold?: number;

  /**
   * The multiplier to calculate displacement from the touch movement.
   * @default 0.5
   */
  displacementMultiplier?: number;

  onReady?: () => void;

  onRefresh?: () => Promise<void>;
}

interface PullToRefreshContext {
  y0: number;

  displacement: number;

  displacementRatio: number;
}

export type PullToRefreshState = "idle" | "pulling" | "ready" | "loading";

// We use useSyncExternalStore to only re-render indicator area on drag
const contextStore = new Store<PullToRefreshContext>({
  y0: 0,
  displacement: 0,
  displacementRatio: 0,
});

const useContextStore = () => {
  return useSyncExternalStore(
    (listener) => contextStore.subscribe(listener),
    () => contextStore.getState(),
  );
};

function usePullToRefreshState(props: UsePullToRefreshStateProps) {
  const threshold = props.threshold ?? 80;
  const displacementMultiplier = props.displacementMultiplier ?? 0.5;

  const [state, setState] = useState<PullToRefreshState>("idle");
  const containerRef = useRef<HTMLDivElement | null>(null);

  function setContext({ y0, displacement }: Omit<PullToRefreshContext, "displacementRatio">) {
    contextStore.setState({
      y0,
      displacement,
      displacementRatio: Math.min(displacement / threshold, 1),
    });
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

      const { y0 } = contextStore.getState();
      const displacement = (y - y0) * displacementMultiplier;
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
  const { state, refs, events } = usePullToRefreshState(props);

  const stateProps = elementProps({
    "data-ptr-state": state,
  });
  const isDragging = state === "pulling" || state === "ready";

  return {
    state,

    refs,
    stateProps,
    getIndicatorRenderProps: () => {
      const ctx = useContextStore();
      return {
        minValue: 0,
        maxValue: 100,
        value: ctx.displacementRatio * 100,
        style: {
          opacity: ctx.displacementRatio,
        },
      };
    },
    indicatorProps: elementProps({
      ...stateProps,
      style: {
        position: "relative",
        top: 0,
        left: 0,
        width: "100%",
        height: "var(--ptr-size, 44px)",
        marginBottom: "calc(var(--ptr-size, 44px) * -1)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    }),
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
        transition: isDragging ? "none" : "transform var(--ptr-transition-duration, 0.3s)",
        overscrollBehaviorY: "none",
        overflowY: "auto",
      },
    }),
  };
}
