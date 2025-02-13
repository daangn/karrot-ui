import { h } from "preact";
import type { JSX } from "preact/compat";

type SwitchProps = JSX.HTMLAttributes<HTMLInputElement> & {
  label: string;
  description?: string;
  disabled?: boolean;
  checked?: boolean;
};

export function Switch({ label, description, ...rest }: SwitchProps) {
  return (
    <label
      className={`flex items-start justify-between gap-2 ${rest.disabled ? "cursor-not-allowed opacity-20" : "cursor-pointer"}`}
    >
      <div className="flex flex-col gap-0.5">
        <div className="text-gray-900 dark:text-gray-100 font-medium">{label}</div>
        {description && <p className="text-xxs text-neutral-500">{description}</p>}
      </div>
      <div className="pt-0.5">
        <input {...rest} type="checkbox" className="size-0 opacity-0 peer" />
        <div className="h-3 w-[1.375rem] rounded-full border border-gray-900 after:block after:-translate-x-px after:-translate-y-px after:size-3 after:rounded-full after:border after:border-gray-900 transition-all after:transition-all peer-checked:after:translate-x-2.5 dark:border-gray-100 dark:after:border-gray-100 peer-checked:bg-gray-900 dark:peer-checked:bg-gray-100 peer-checked:after:bg-white dark:peer-checked:after:bg-gray-900 peer-focus-visible:ring-2 ring-offset-2 ring-primary-500 ring-offset-figma-body dark:ring-offset-figma-body-dark" />
      </div>
    </label>
  );
}
