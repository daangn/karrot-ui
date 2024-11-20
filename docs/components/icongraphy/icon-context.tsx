"use client";

import * as React from "react";

interface IconData {
  name: string;
  metadatas: string[];
  svg: string;
  png: {
    "1x"?: string;
    "2x"?: string;
    "3x"?: string;
    "4x"?: string;
  };
}

interface State {
  iconData: Record<string, IconData>;
  iconComponents: Record<string, React.ComponentType>;

  iconStyle: "monochrome" | "multicolor";

  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;

  selectedIcon?: IconData;
  setSelectedIcon: React.Dispatch<React.SetStateAction<IconData | undefined>>;
}

const context = React.createContext<State>({
  search: "",
  iconData: {},
  setSearch: () => {},
  iconStyle: "monochrome",
  iconComponents: {},
  selectedIcon: undefined,
  setSelectedIcon: () => {},
});

export const IconProvider = ({
  children,
  iconData,
  iconComponents,
  iconStyle,
}: React.PropsWithChildren<{
  iconData: Record<string, IconData>;
  iconComponents: Record<string, React.ComponentType>;
  iconStyle: "monochrome" | "multicolor";
}>) => {
  const [search, setSearch] = React.useState("");
  const [selectedIcon, setSelectedIcon] = React.useState<IconData | undefined>(undefined);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  React.useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const iconName = searchParams.get("icon");
    if (iconName) {
      setSelectedIcon(iconData[iconName]);
    }
  }, []);

  React.useEffect(() => {
    const checkSearchParams = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const iconName = searchParams.get("icon");
      if (iconName) {
        setSelectedIcon(iconData[iconName]);
      }
    };

    window.addEventListener("popstate", checkSearchParams);
    window.addEventListener("pushstate", checkSearchParams);

    return () => {
      window.removeEventListener("popstate", checkSearchParams);
      window.removeEventListener("pushstate", checkSearchParams);
    };
  }, [iconData]);

  return (
    <context.Provider
      value={{
        search,
        iconStyle,
        iconData,
        setSearch,
        iconComponents,
        selectedIcon,
        setSelectedIcon,
      }}
    >
      {children}
    </context.Provider>
  );
};

export const useIcon = () => {
  const data = React.useContext(context);

  if (!data) {
    throw new Error("IconProvider not found");
  }

  return data;
};
