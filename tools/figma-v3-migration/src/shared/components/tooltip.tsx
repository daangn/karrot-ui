import { h } from "preact";
import { useRef, useEffect, useState } from "preact/hooks";
import { computePosition, shift, offset, flip } from "@floating-ui/dom";
import type { PropsWithChildren, ReactNode } from "preact/compat";

interface TooltipProps extends PropsWithChildren {
  label: ReactNode;
  className?: string;
}

export function Tooltip({ children, className, label }: TooltipProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);

  const timeoutRef = useRef<number>();

  useEffect(() => {
    if (!isVisible || !divRef.current || !tooltipRef.current) return;

    computePosition(divRef.current, tooltipRef.current, {
      middleware: [offset(3), flip(), shift({ padding: 5 })],
    }).then(({ x, y }) => {
      if (!tooltipRef.current) return;

      tooltipRef.current.style.left = `${x}px`;
      tooltipRef.current.style.top = `${y}px`;
    });
  }, [isVisible]);

  const show = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setIsVisible(true), 100);
  };

  const hide = () => {
    clearTimeout(timeoutRef.current);
    setIsVisible(false);
  };

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  return (
    <div ref={divRef} onMouseEnter={show} onMouseLeave={hide} className={className}>
      {children}
      {isVisible && (
        <div
          ref={tooltipRef}
          className="absolute bg-neutral-900/80 backdrop-blur-md text-white px-2.5 py-2 rounded-md text-xs z-40 opacity-0 animate-fadein max-w-64"
        >
          {label}
        </div>
      )}
    </div>
  );
}
