import { forwardRef } from "react";

type AtLeastOne<T> = [T, ...T[]];

export function createWithStateProps(
  useContexts: AtLeastOne<
    (prop?: { strict?: boolean }) => { stateProps: React.HTMLAttributes<HTMLElement> } | null
  >,
  options?: { strict?: boolean },
) {
  const strict = options?.strict ?? true;

  return function withStateProps<P, R>(Component: React.ComponentType<P & React.RefAttributes<R>>) {
    const Node = forwardRef<R, P>((props, ref) => {
      const stateProps = {};
      for (const useContext of useContexts) {
        Object.assign(stateProps, useContext({ strict })?.stateProps);
      }

      // @ts-ignore
      return <Component ref={ref} {...stateProps} {...props} />;
    });

    Node.displayName = Component.displayName || Component.name;

    return Node;
  };
}
