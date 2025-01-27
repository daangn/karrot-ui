import { useSize } from "@radix-ui/react-use-size";
import { elementProps } from "@seed-design/dom-utils";
import { useMemo, useState } from "react";
import { useAppScreenContext } from "../AppScreen";

// biome-ignore lint/suspicious/noEmptyInterface: intentionally empty for future extension
export interface UseAppBarProps {}

export type UseAppBarReturn = ReturnType<typeof useAppBar>;

export function useAppBar(_props: UseAppBarProps) {
  const { stateProps } = useAppScreenContext();

  const [root, rootRef] = useState<HTMLElement | null>(null);
  const [left, leftRef] = useState<HTMLElement | null>(null);
  const [right, rightRef] = useState<HTMLElement | null>(null);

  const rootSize = useSize(root);
  const leftSize = useSize(left);
  const rightSize = useSize(right);
  const centeredTitleMaxWidth = rootSize
    ? `${rootSize.width ?? 0 - Math.max(leftSize?.width ?? 0, rightSize?.width ?? 0)}px`
    : "initial";

  return useMemo(
    () => ({
      refs: {
        root: rootRef,
        left: leftRef,
        right: rightRef,
      },
      stateProps,
      rootProps: elementProps({
        "data-part": "appBar",
        ...stateProps,
        style: {
          "--centered-title-max-width": centeredTitleMaxWidth,
        } as React.CSSProperties,
      }),
    }),
    [stateProps, centeredTitleMaxWidth],
  );
}
