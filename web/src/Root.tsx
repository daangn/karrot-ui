import React from "react";

import Header from "./components/Header";
import { ThemeProvider } from "./contexts/ThemeContext";

interface RootProps {
  children: React.ReactNode;
}

const Root: React.FC<RootProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <Header />
      {children}
    </ThemeProvider>
  );
};

export default Root;
