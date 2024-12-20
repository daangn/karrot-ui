import { createContext, useContext } from "react";

type Recipe<
  Props extends Record<string, string>,
  Classnames extends Record<string, string>,
> = (props: Props) => Classnames;

export function createStyleContext<
  Props extends Record<string, string>,
  Classnames extends Record<string, string>,
>(recipe: Recipe<Props, Classnames>) {
  const StyleContext = createContext<{ classNames: Classnames } | null>(null);

  function rootSlot(props: Props) {
    const classNames = recipe(props);
    const StyleProvider = ({ children }: { children: React.ReactNode }) => {
      return (
        <StyleContext.Provider value={{ classNames }}>
          {children}
        </StyleContext.Provider>
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

    return { classNames: context.classNames };
  }

  return {
    rootSlot,
    childSlot,
  };
}
