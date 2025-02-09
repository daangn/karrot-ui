import { useRef } from "react";

export interface UseRenderStrategyProps {
  /**
   * If `true`, the component will be mounted lazily.
   * @default false
   */
  lazyMount?: boolean;

  /**
   * If `true`, the component will be unmounted when it's not selected.
   * @default false
   * */
  unmountOnExit?: boolean;
}

export type UseRenderStrategyReturn = ReturnType<typeof useRenderStrategy>;

export function useRenderStrategy(props: UseRenderStrategyProps) {
  const wasEverPresent = useRef(false);

  function getUnmounted(isPresent: boolean) {
    if (isPresent) {
      wasEverPresent.current = true;
    }

    return (
      (!isPresent && !wasEverPresent.current && props.lazyMount) ||
      (props.unmountOnExit && !isPresent && wasEverPresent.current)
    );
  }

  return {
    getUnmounted,
  };
}
