import { forwardRef } from "react";

export function withStateProps<P, R>(
  Component: React.ComponentType<P & React.RefAttributes<R>>,
  ...useContexts: (() => { stateProps: React.HTMLAttributes<HTMLElement> })[]
) {
  const Node = forwardRef<R, P>((props, ref) => {
    const stateProps = {};
    for (const useContext of useContexts) {
      Object.assign(stateProps, useContext().stateProps);
    }

    // @ts-ignore
    return <Component ref={ref} {...stateProps} {...props} />;
  });

  Node.displayName = Component.displayName || Component.name;

  return Node;
}
