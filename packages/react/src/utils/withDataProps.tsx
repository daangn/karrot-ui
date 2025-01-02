import { forwardRef } from "react";

export function withDataProps<P, R>(
  Component: React.ComponentType<P & React.RefAttributes<R>>,
  useContext: () => { dataProps: Record<string, unknown> },
) {
  const Node = forwardRef<R, P>((props, ref) => {
    const { dataProps } = useContext();

    // @ts-ignore
    return <Component ref={ref} {...dataProps} {...props} />;
  });

  Node.displayName = Component.displayName || Component.name;

  return Node;
}
