import { createContext, useContext, useMemo } from "react";

type Recipe<
  Props extends Record<string, string | undefined>,
  Classnames extends Record<string, string>,
> = (props: Props) => Classnames;

export function createStyleContext<
  Props extends Record<string, string | undefined>,
  Classnames extends Record<string, string>,
>(recipe: Recipe<Props, Classnames>) {
  const StyleContext = createContext<{ classNames: Classnames; props: Props } | null>(null);

  function rootSlot(props: Props) {
    const classNames = useMemo(() => recipe(props), [recipe, props]);
    const StyleProvider = ({ children }: { children: React.ReactNode }) => {
      return (
        <StyleContext.Provider value={{ classNames, props }}>{children}</StyleContext.Provider>
      );
    };

    return {
      classNames,
      StyleProvider,
    };
  }

  function childSlot() {
    const context = useContext(StyleContext);
    if (context === null) {
      throw new Error("StyleProvider is missing");
    }

    return { classNames: context.classNames, props: context.props };
  }

  return {
    rootSlot,
    childSlot,
  };
}
