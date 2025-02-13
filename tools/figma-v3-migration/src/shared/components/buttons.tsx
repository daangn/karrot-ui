import { h } from "preact";
import type { MouseEventHandler, ReactNode } from "preact/compat";

interface SuggestionCardProps {
  isSelected?: boolean;
  isDisabled?: boolean;
  onButtonClick: MouseEventHandler<HTMLButtonElement>;
  title: string;
  description?: ReactNode;
  badges?: ReactNode;
}

export function SuggestionCard({
  isSelected,
  onButtonClick,
  isDisabled,
  title,
  description,
}: SuggestionCardProps) {
  return (
    <div
      className={`flex gap-2 rounded-lg shadow px-3 py-2.5 items-center justify-between w-full relative disabled:opacity-40 bg-white ${isDisabled ? "opacity-40" : ""}`}
    >
      <div>
        <div className="font-semibold text-base">{title}</div>
        {description && <div className="text-sm">{description}</div>}
      </div>
      <button
        type="button"
        onClick={onButtonClick}
        disabled={isSelected || isDisabled}
        className="bg-neutral-600 text-white px-2 py-1.5 rounded font-semibold text-sm disabled:opacity-40 enabled:hover:bg-neutral-500"
      >
        {isSelected ? "설정됨" : "설정"}
      </button>
    </div>
  );
}

interface ButtonProps {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      className="px-1.5 py-1 rounded-md bg-neutral-200 hover:bg-neutral-300 font-semibold"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
