import { Switch } from "@/shared/components/switch";
import { PREFERENCES, usePreferences } from "@/shared/contexts/PreferencesProvider";
import { Button } from "@create-figma-plugin/ui";
import { h } from "preact";
import type { ChangeEvent, PropsWithChildren } from "preact/compat";
import { useState } from "preact/hooks";

export function LeftPanel({ children }: PropsWithChildren) {
  return <div className="flex flex-col w-2/5 h-full border-r border-neutral-200">{children}</div>;
}

export function RightPanel({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col w-3/5 h-full bg-neutral-100 flex-none overflow-y-auto">
      {children}
    </div>
  );
}

export function Footer({ children }: PropsWithChildren) {
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);

  return (
    <footer className="p-2 flex-none flex gap-2">
      {children}
      {isPreferencesOpen && <PreferencesPanel />}
      <Button secondary onClick={() => setIsPreferencesOpen((prev) => !prev)}>
        옵션
      </Button>
    </footer>
  );
}

export function PreferencesPanel() {
  const { preferences, updatePreferences } = usePreferences();

  if (!preferences) return null;

  return (
    <div className="fixed z-50 bottom-11 right-1 bg-neutral-100/85 border border-neutral-300 backdrop-blur-md rounded-lg shadow-lg max-w-96 animate-fadein divide-y divide-neutral-300">
      <div className="text-neutral-600 font-medium p-3.5 text-xxs">
        옵션을 바꾼 뒤 결과를 확인하려면 새로고침을 눌러주세요.
        <br />
        옵션은 Figma 계정별로 저장되므로 플러그인을 꺼도 유지됩니다.
      </div>
      <div className="flex flex-col gap-4 p-3.5">
        {PREFERENCES.map(({ id, title, description }) => (
          <div key={id} className="flex flex-col gap-0.5">
            <Switch
              label={title}
              description={description}
              checked={preferences[id] as boolean}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                updatePreferences({ ...preferences, [id]: event.currentTarget.checked });
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
