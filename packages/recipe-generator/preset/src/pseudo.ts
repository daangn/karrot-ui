export const focus = ":is(:focus, [data-focus])";

export const focusVisible = ":is(:focus-visible, [data-focus-visible])";

export const active = ":is(:active, [data-active])";

export const disabled = ":is(:disabled, [disabled], [data-disabled])";

export const readOnly = ":is([data-readonly])";

export const checked = ":is(:checked, [data-checked])";

export const selected = ":is(:selected, [data-selected])";

export const open = ':is([data-state="open"], [data-open])';

export const invalid = ":is(:invalid, [data-invalid])";

type JoinRest<Rest extends string[]> = Rest extends []
  ? ""
  : Rest extends [string, ...string[]]
    ? `${Rest[0]}${Rest extends [string, ...infer R extends string[]] ? R[0] : ""}`
    : "";

type JoinSelectors<T extends string[]> = T extends [string, string, ...infer Rest extends string[]]
  ? `&${T[0]}${T[1]}${JoinRest<Rest>}`
  : never;

export function pseudo<T extends string>(selectorA: T): `&${T}`;
export function pseudo<T extends string, U extends string>(selectorA: T, selectorB: U): `&${T}${U}`;
export function pseudo<T extends string[]>(...selectors: [...T]): JoinSelectors<T>;
export function pseudo(...selectors: string[]) {
  return `&${selectors.join("")}`;
}

export function not<T extends string>(selector: T): `:not(${T})` {
  return `:not(${selector})`;
}
