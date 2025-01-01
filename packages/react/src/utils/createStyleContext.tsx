import clsx from "clsx";
import { createContext, forwardRef, useContext } from "react";

type Recipe<
  Props extends Record<string, string | undefined>,
  Classnames extends Record<string, string>,
> = (props?: Props) => Classnames;

export function createStyleContext<
  Props extends Record<string, string | undefined>,
  Classnames extends Record<string, string>,
>(recipe: Recipe<Props, Classnames>) {
  const ClassNamesContext = createContext<Classnames | null>(null);
  const PropsContext = createContext<Props | null>(null);

  const ClassNamesProvider = ({
    children,
    value,
  }: { children: React.ReactNode; value: Classnames }) => {
    return <ClassNamesContext.Provider value={value}>{children}</ClassNamesContext.Provider>;
  };

  const PropsProvider = ({ children, value }: { children: React.ReactNode; value: Props }) => {
    return <PropsContext.Provider value={value}>{children}</PropsContext.Provider>;
  };

  function useClassNames() {
    const context = useContext(ClassNamesContext);
    if (context === null) {
      throw new Error(
        "useClassNames must be used within a ClassNamesProvider. Did you forget to wrap your component in a ClassNamesProvider?",
      );
    }

    return context;
  }

  function useProps() {
    return useContext(PropsContext);
  }

  const withProvider = <T, P>(
    Component: React.ElementType<any>,
    slot: keyof Classnames,
    options?: {
      defaultProps?: Partial<P>;
    },
  ): React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<T>> => {
    const { defaultProps } = options ?? {};

    const StyledComponent = forwardRef<any, any>((innerProps, ref) => {
      const props = { ...(defaultProps ?? {}), ...useProps(), ...innerProps } as any; // TODO: use Props type instead of any after implementing splitRecipeProps()
      const classNames = recipe(props); // TODO: classNames are generated on all props; we have to split recipeProps and others. should be resolved in qvism.
      const className = classNames[slot as keyof typeof classNames];

      return (
        <ClassNamesProvider value={classNames}>
          {/* TODO: implement splitRecipeProps() method and spread splitted props */}
          {/* @ts-ignore */}
          <Component ref={ref} {...props} className={clsx(className, props.className)} />
        </ClassNamesProvider>
      );
    });

    // @ts-ignore
    StyledComponent.displayName = Component.displayName || Component.name;

    return StyledComponent as any;
  };

  const withContext = <T, P>(
    Component: React.ElementType<any>,
    slot?: keyof Classnames,
  ): React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<T>> => {
    const StyledComponent = forwardRef<any, React.HTMLAttributes<HTMLElement>>((props, ref) => {
      const classNames = useClassNames();
      const className = classNames?.[slot as keyof typeof classNames];

      return <Component ref={ref} {...props} className={clsx(className, props.className)} />;
    });

    // @ts-ignore
    StyledComponent.displayName = Component.displayName || Component.name;
    return StyledComponent as any;
  };

  return {
    ClassNamesProvider,
    PropsProvider,
    useClassNames,
    useProps,
    withProvider,
    withContext,
  };
}
