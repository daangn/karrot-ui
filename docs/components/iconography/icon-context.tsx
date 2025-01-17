"use client";

import * as React from "react";
import { type Options, useQueryState } from "nuqs";

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
  iconData: {
    monochrome: Record<string, IconData>;
    multicolor: Record<string, IconData>;
  };
  iconComponents: {
    monochrome: Record<string, React.ComponentType>;
    multicolor: Record<string, React.ComponentType>;
  };

  search: string;
  setSearch: (
    value: string | ((old: string) => string | null) | null,
    options?: Options,
  ) => Promise<URLSearchParams>;

  selectedIcon?: IconData;
  setSelectedIconName: (
    value: string | ((old: string) => string | null) | null,
    options?: Options,
  ) => Promise<URLSearchParams>;

  iconStyle: "monochrome" | "multicolor";
  setIconStyle: (
    value:
      | "monochrome"
      | "multicolor"
      | ((old: "monochrome" | "multicolor") => "monochrome" | "multicolor" | null)
      | null,
    options?: Options,
  ) => Promise<URLSearchParams>;
}

const context = React.createContext<State | null>(null);

export const IconProvider = ({
  children,
  iconData,
  iconComponents,
}: React.PropsWithChildren<{
  iconData: {
    monochrome: Record<string, IconData>;
    multicolor: Record<string, IconData>;
  };
  iconComponents: {
    monochrome: Record<string, React.ComponentType>;
    multicolor: Record<string, React.ComponentType>;
  };
}>) => {
  const [search, setSearch] = useQueryState("search", { defaultValue: "" });
  const [selectedIconName, setSelectedIconName] = useQueryState("icon", { defaultValue: "" });
  const [iconStyle, setIconStyle] = useQueryState<"monochrome" | "multicolor">("style", {
    defaultValue: "monochrome",
    parse: (value) => value as "monochrome" | "multicolor",
  });

  // 선택된 아이콘 상태 관리
  const selectedIcon = React.useMemo(() => {
    if (!selectedIconName) return undefined;
    return iconData[iconStyle][selectedIconName];
  }, [selectedIconName, iconStyle, iconData]);

  // 컨텍스트 값 메모이제이션
  const contextValue = React.useMemo(
    () => ({
      search,
      iconStyle,
      iconData,
      iconComponents,
      selectedIcon,
      setSearch,
      setIconStyle,
      setSelectedIconName,
    }),
    [
      search,
      iconStyle,
      iconData,
      iconComponents,
      selectedIcon,
      setSearch,
      setIconStyle,
      setSelectedIconName,
    ],
  );

  return <context.Provider value={contextValue}>{children}</context.Provider>;
};

export const useIcon = () => {
  const data = React.useContext(context);

  if (!data) {
    throw new Error("IconProvider not found");
  }

  return data;
};
