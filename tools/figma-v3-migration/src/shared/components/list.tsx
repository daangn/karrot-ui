import { IconMenuCheckmarkChecked16 } from "@create-figma-plugin/ui";
import clsx from "clsx";
import { h } from "preact";
import {
  forwardRef,
  type MouseEventHandler,
  type PropsWithChildren,
  type ReactNode,
} from "preact/compat";

export function List({ children }: PropsWithChildren) {
  return <ul className="overflow-y-auto flex flex-col grow bg-neutral-100">{children}</ul>;
}

export const ListGroupButton = forwardRef<
  HTMLLIElement,
  {
    onClick: MouseEventHandler<HTMLButtonElement>;
    isFocused: boolean;
    isDimmed: boolean;
    title: string;
    startElement?: ReactNode;
    endElement?: ReactNode;
  }
>(({ onClick, isFocused, isDimmed, title, startElement, endElement }, ref) => (
  <li className="mt-2 border-b border-neutral-100 scroll-mb-64 sticky top-0" ref={ref}>
    <button
      type="button"
      onClick={onClick}
      className={`p-1.5 flex gap-1 items-center justify-between w-full ${
        isFocused ? "bg-indigo-50 hover:bg-indigo-100" : "bg-white hover:bg-neutral-50"
      }`}
    >
      <div className="flex items-center gap-1.5">
        {startElement && <div className="flex-none">{startElement}</div>}
        <div
          className={`text-neutral-900 text-start line-clamp-1 break-all font-bold ${isDimmed ? "text-opacity-40 line-through" : ""}`}
        >
          {title}
        </div>
      </div>
      <div className="flex-none flex items-center gap-0.5">
        {endElement}
        <IconMenuCheckmarkChecked16
          className={isFocused ? "text-indigo-700" : "text-neutral-200"}
        />
      </div>
    </button>
  </li>
));

export const ListItemButton = forwardRef<
  HTMLLIElement,
  {
    onClick: MouseEventHandler<HTMLButtonElement>;
    isFocused: boolean;
    isDimmed: boolean;
    title: string;
    endElement?: ReactNode;
    className?: string;
  }
>(({ onClick, isFocused, isDimmed, title, endElement, className }, ref) => (
  <li
    ref={ref}
    className={clsx("border-b border-neutral-100 scroll-mb-64 last-of-type:border-b-8", className)}
  >
    <button
      type="button"
      onClick={onClick}
      className={`p-1.5 pl-2.5 flex gap-1 items-center justify-between w-full ${
        isFocused
          ? "bg-indigo-50 hover:bg-indigo-100 ring-inset ring-1 ring-indigo-700"
          : "bg-white hover:bg-neutral-50"
      }`}
    >
      <div
        className={`text-neutral-700 text-start line-clamp-1 break-all ${isDimmed ? "text-opacity-40 line-through" : ""}`}
      >
        {title}
      </div>
      <div className="flex-none flex items-center gap-1">
        {endElement}
        <IconMenuCheckmarkChecked16
          className={isFocused ? "text-indigo-700" : "text-neutral-200"}
        />
      </div>
    </button>
  </li>
));
