import * as React from "react";

interface Preferences {
  showGrid: boolean;
}

type PreferenceProviderProps = { children: React.ReactNode };

function usePreferenceState() {
  const [preferences, setPreferences] = React.useState<Preferences>({
    showGrid: false,
  });

  function updatePreferences(preferences: Partial<Preferences>) {
    setPreferences((prev) => ({
      ...prev,
      ...preferences,
    }));
  }

  return {
    preferences,
    updatePreferences,
  };
}

const PreferenceStateContext = React.createContext<
  ReturnType<typeof usePreferenceState> | undefined
>(undefined);

function PreferenceProvider({ children }: PreferenceProviderProps) {
  const value = usePreferenceState();

  return (
    <PreferenceStateContext.Provider value={value}>{children}</PreferenceStateContext.Provider>
  );
}

function usePreference() {
  const context = React.useContext(PreferenceStateContext);
  if (context === undefined) {
    throw new Error("usePreference must be used within a PreferenceProvider");
  }
  return context;
}

export { PreferenceProvider, usePreference };
