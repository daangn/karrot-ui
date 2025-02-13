import { h } from "preact";
import type { PropsWithChildren } from "preact/compat";

export function H1({ children }: PropsWithChildren) {
  return <h1 className="text-xl font-bold text-neutral-900 line-clamp-1">{children}</h1>;
}

export function H2({ children }: PropsWithChildren) {
  return <h2 className="text-base font-medium text-neutral-600">{children}</h2>;
}
