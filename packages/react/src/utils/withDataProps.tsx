import { forwardRef } from "react";

export function withDataProps<P, R>(
  Component: React.ComponentType<P & React.RefAttributes<R>>,
  ...useContexts: (() => { dataProps: Record<string, unknown> })[]
) {
  const Node = forwardRef<R, P>((props, ref) => {
    const dataProps = {};
    for (const useContext of useContexts) {
      Object.assign(dataProps, useContext().dataProps);
    }

    // @ts-ignore
    return <Component ref={ref} {...dataProps} {...props} />;
  });

  Node.displayName = Component.displayName || Component.name;

  return Node;
}
