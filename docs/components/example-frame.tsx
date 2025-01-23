"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import type ReactDOM from "react-dom/client";

interface ExampleFrameProps {
  name: string;

  height?: number;
}

export default function ExampleFrame({ name, height }: ExampleFrameProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const rootRef = useRef<ReactDOM.Root | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!iframeRef.current) return;

    const iframe = iframeRef.current;
    const doc = iframe.contentDocument;
    if (!doc) return;

    const styles = Array.from(document.styleSheets)
      .map((sheet) => {
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
            display: flex;
            justify-content: center;
            align-items: center;
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
