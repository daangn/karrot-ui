export const focus = ":is(:focus, [data-focus])";

export const focusVisible = ":is(:focus-visible, [data-focus-visible])";

export const active = ":is(:active, [data-active])";

export const disabled = ":is(:disabled, [disabled], [data-disabled])";

export const readOnly = ":is([data-readonly])";

export const checked = ":is(:checked, [data-checked])";

export const checkedOrIndeterminate =
  ":is(:checked, :indeterminate, [data-checked], [data-indeterminate])";

export const pressed = ":is([aria-pressed=true], [data-pressed])";

export const selected = ":is(:selected, [data-selected])";

export const open = ':is([data-state="open"], [data-open])';

export const hidden = ":is(:hidden, [hidden], [data-hidden])";

export const invalid = ":is(:invalid, [data-invalid])";

export const loading = "[data-loading]";

type ConcatStrings<T extends string[]> = T extends [
  infer First extends string,
  ...infer Rest extends string[],
]
  ? `${First}${ConcatStrings<Rest>}`
  : "";

export function pseudo<T extends string>(selectorA: T): `&${T}`;
export function pseudo<T extends string, U extends string>(selectorA: T, selectorB: U): `&${T}${U}`;
export function pseudo<T extends string[]>(...selectors: [...T]): `&${ConcatStrings<T>}`;
export function pseudo(...selectors: string[]) {
  return `&${selectors.join("")}`;
}

export function not<T extends string>(selector: T): `:not(${T})` {
  return `:not(${selector})`;
}
