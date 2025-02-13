import { h } from "preact";
import type { ChangeEventHandler, ReactNode } from "preact/compat";

interface SelectBoxCheckProps {
  title: string;
  titleSuffix?: ReactNode;
  message?: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export function SelectBoxCheck({
  title,
  titleSuffix,
  message,
  checked,
  onCheckedChange,
}: SelectBoxCheckProps) {
  return (
    <label className="flex items-center justify-between gap-1 px-3 py-2.5 has-[:checked]:bg-blue-200 rounded-lg relative border border-400 bg-neutral-100 hover:bg-neutral-200 has-[:checked]:border-blue-500 cursor-pointer">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="text-base font-bold text-neutral-800 line-clamp-1">{title}</span>
          {titleSuffix && <div className="flex gap-0.5 flex-none">{titleSuffix}</div>}
        </div>
        {message && <div className="font-medium text-indigo-700">{message}</div>}
      </div>
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onCheckedChange(event.currentTarget.checked)}
        className="hidden peer"
      />
      {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="peer-checked:text-blue-500 text-neutral-400 flex-none"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </label>
  );
}
