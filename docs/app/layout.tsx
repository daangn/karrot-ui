"use client";

import "@seed-design/stylesheet/global.css";
import "@seed-design/stylesheet/token.css";
import "@stackflow/plugin-basic-ui/index.css";
import "simple-reveal/index.css";
import "./global.css";

import { useThemeSync } from "@/hooks/useThemeSync";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  useThemeSync();

  return (
    <html
      lang="ko"
      className={inter.className}
      data-seed
      data-seed-scale-color="light"
      suppressHydrationWarning
    >
      <head>
        <meta name="color-scheme" content="light dark" />
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body>
        <RootProvider
          search={{
            options: {
              type: "static",
            },
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
