import { h } from "preact";
import type { HTMLAttributes } from "preact/compat";

interface ProgressProps {
  label: string;
  value: number;
  max: number;
}

export function Progress({ value, max, label }: ProgressProps) {
  return (
    <div className="w-full h-5 flex-none relative">
      <progress
        value={value}
        max={max}
        className="size-full flex-none [&::-webkit-progress-value]:bg-indigo-400 [&::-webkit-progress-bar]:bg-neutral-100"
      />
      <div className="text-xs text-neutral-800 font-semibold absolute text-right inset-0 flex items-center justify-end pr-1">
        {label}
      </div>
    </div>
  );
}
