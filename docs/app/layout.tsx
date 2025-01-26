import "@seed-design/stylesheet/base.css";
import "@seed-design/stylesheet/global.css";
import "@seed-design/stylesheet/token.css";
import "@seed-design/stylesheet/component.min.css";
import "@stackflow/plugin-basic-ui/index.css";
import "simple-reveal/index.css";
import "./global.css";

import GoogleAnalytics from "@/components/google-analytics";
import ThemeSync from "@/components/theme-sync";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
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
        <GoogleAnalytics GA_MEASUREMENT_ID="G-02SS22W02G" />
      </head>
      <body>
        <RootProvider
          search={{
            options: {
              type: "static",
              defaultTag: "design",
              tags: [
                {
                  name: "Design",
                  value: "design",
                },
                {
                  name: "React",
                  value: "react",
                },
              ],
            },
          }}
        >
          <ThemeSync />
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
