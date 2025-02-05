"use client";

import "@seed-design/stylesheet/base.css";
import "@seed-design/stylesheet/global.css";
import "@seed-design/stylesheet/token.css";
import "@seed-design/stylesheet/component.min.css";
import "@stackflow/plugin-basic-ui/index.css";
import "simple-reveal/index.css";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import type ReactDOM from "react-dom/client";

interface ExampleFrameProps {
  name: string;
}

const MIN_HEIGHT = 300;

export default function ExampleFrame({ name }: ExampleFrameProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const rootRef = useRef<ReactDOM.Root | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [height, setHeight] = useState(MIN_HEIGHT);

  useEffect(() => {
    if (!iframeRef.current) return;

    const iframe = iframeRef.current;
    const doc = iframe.contentDocument;
    if (!doc) return;

    const styles = Array.from(document.styleSheets)
      .map((sheet) => {
        // FIXME: ugly hack to filter out example-frame styles; should be improved to separately bundle example styles
        if (!sheet.href?.includes("page.css")) return "";
        try {
          return Array.from(sheet.cssRules)
            .map((rule) => rule.cssText)
            .join("\n");
        } catch {
          return "";
        }
      })
      .join("\n");

    const initialContent = `
    <!DOCTYPE html>
    <html data-seed data-seed-scale-color="light">
      <head>
        <style>
          ${styles}
          #root {
            width: 100vw;
            height: 100vh;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;

            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
          }
          body {
            margin: 0;
            padding: 0;
          }
        </style>
      </head>
      <body>
        <div id="root"></div>
      </body>
    </html>
  `;

    // iframe 초기 콘텐츠 설정
    doc.open();
    doc.write(initialContent);
    doc.close();

    const root = doc.getElementById("root");
    if (root && !rootRef.current) {
      const ReactDOM = require("react-dom/client");
      rootRef.current = ReactDOM.createRoot(root);
    }

    // 컴포넌트 로드 및 렌더링
    import(`./example/${name}.tsx`).then((module) => {
      const Component = module.default;
      if (rootRef.current) {
        rootRef.current.render(<Component />);
        setIsLoaded(true);
      }
    });

    return () => {
      if (rootRef.current) {
        rootRef.current.unmount();
        rootRef.current = null;
      }
    };
  }, [name]);

  useEffect(() => {
    if (isLoaded) {
      const iframe = iframeRef.current;
      const doc = iframe?.contentDocument;
      const root = doc?.getElementById("root");

      if (root) {
        const contentHeight = root.children[0]?.scrollHeight;
        if (contentHeight && contentHeight > MIN_HEIGHT) {
          const padding = 48;
          setHeight(contentHeight + padding);
        }
      }
    }
  }, [isLoaded]);

  return (
    <iframe
      ref={iframeRef}
      title="example-frame"
      className={clsx(
        "w-full bg-seed-bg-layer-default transition-opacity duration-200",
        isLoaded ? "opacity-100" : "opacity-0",
      )}
      style={{ height: height ? `${height}px` : "300px" }}
    />
  );
}
