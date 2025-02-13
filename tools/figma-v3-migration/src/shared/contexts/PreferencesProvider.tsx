import { h } from "preact";
import { createContext, type PropsWithChildren } from "preact/compat";
import { useCallback, useContext, useEffect, useState } from "preact/hooks";
import type {
  SendPreferencesEventHandler,
  UpdatePreferencesEventHandler,
} from "@/features/design-system/types";
import { emit, on } from "@create-figma-plugin/utilities";

export const PREFERENCES = [
  {
    id: "inspect-v2-components-on-text-style-migration",
    title: "텍스트 스타일: V2 컴포넌트도 검사",
    description:
      "텍스트 스타일 마이그레이션 시 V2 컴포넌트도 검사하여 V2 컴포넌트에 V3 텍스트 스타일을 덮어씌울 수 있습니다. 모든 화면에 대해 파운데이션을 먼저 마이그레이션하는 경우 사용할 수 있습니다. (기본값: 끔)",
  },
  {
    id: "inspect-v2-components-on-color-migration",
    title: "색상: V2 컴포넌트도 검사",
    description:
      "색상 마이그레이션 시 V2 컴포넌트도 검사하여 V2 컴포넌트에 V3 컬러를 덮어씌울 수 있습니다. 모든 화면에 대해 파운데이션을 먼저 마이그레이션하는 경우 사용할 수 있습니다. (기본값: 끔)",
  },
] as const satisfies {
  id: string;
  title: string;
  description?: string;
}[];

type PreferenceKey = (typeof PREFERENCES)[number]["id"];

export type Preferences = Record<PreferenceKey, boolean>;

export const DEFAULT_PREFERENCES: Preferences = {
  "inspect-v2-components-on-color-migration": false,
  "inspect-v2-components-on-text-style-migration": false,
};

function usePreferencesState() {
  const [preferences, setPreferences] = useState<Preferences | null>(null);

  useEffect(() => {
    on<SendPreferencesEventHandler>("SEND_PREFERENCES", ({ preferences }) => {
      setPreferences(preferences);
    });
  }, []);

  const updatePreferences = useCallback((changes: Preferences) => {
    setPreferences((prev) => {
      const updatedPreferences = { ...prev, ...changes };
      emit<UpdatePreferencesEventHandler>("UPDATE_PREFERENCES", {
        preferences: updatedPreferences,
      });

      return updatedPreferences;
    });
  }, []);

  return { preferences, updatePreferences };
}

export const PreferencesContext = createContext<ReturnType<typeof usePreferencesState> | null>(
  null,
);

export const PreferencesProvider = ({ children }: PropsWithChildren) => {
  return (
    <PreferencesContext.Provider value={usePreferencesState()}>
      {children}
    </PreferencesContext.Provider>
  );
};

export function usePreferences() {
  const context = useContext(PreferencesContext);

  if (context === null) {
    throw new Error("usePreferences must be used within a PreferencesProvider");
  }

  return context;
}
