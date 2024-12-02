import type React from "react";

import { Stack } from "./stackflow";
import { PreferenceProvider } from "./hooks/usePreference";

const App: React.FC = () => (
  <div>
    <PreferenceProvider>
      <Stack />
    </PreferenceProvider>
  </div>
);

export default App;
