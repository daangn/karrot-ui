import * as React from "react";

const useLayoutEffect = typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

export function useElementOffset(element: HTMLElement | null) {
  const [offset, setOffset] = React.useState<{ fromLeft: number; fromRight: number } | undefined>(
    undefined,
  );

  useLayoutEffect(() => {
    if (!element) {
      setOffset(undefined);
      return;
    }

    if (element) {
      // provide as early as possible
      setOffset({
        fromLeft: element.offsetLeft + element.offsetWidth,
        fromRight: (element.offsetParent ?? document.body).clientWidth - element.offsetLeft,
      });

      const resizeObserver = new ResizeObserver(() => {
        const fromLeft = element.offsetLeft + element.offsetWidth;
        const fromRight = (element.offsetParent ?? document.body).clientWidth - element.offsetLeft;

        setOffset({ fromLeft, fromRight });
      });

      resizeObserver.observe(element);

      return () => resizeObserver.unobserve(element);
    }
  }, [element]);

  return offset;
}
