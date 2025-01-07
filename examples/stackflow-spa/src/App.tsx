import type React from "react";

import { Stack } from "./stackflow";
import { PreferenceProvider } from "./hooks/usePreference";
import { Suspense } from "react";

const App: React.FC = () => (
  <div>
    <PreferenceProvider>
      <Suspense>
        <Stack />
      </Suspense>
    </PreferenceProvider>
  </div>
);

export default App;
