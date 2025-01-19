/* ID -----------------------------------------------------------------------
-------------------------------------------------------------------------------- */

export const getRootId = (id: string) => `segmented-control:${id}:root`;

/* Element -----------------------------------------------------------------------
-------------------------------------------------------------------------------- */

const isClient = typeof window === "object";

export const getRootEl = (id: string) => (isClient ? document.getElementById(getRootId(id)) : null);

/* Utils -----------------------------------------------------------------------
-------------------------------------------------------------------------------- */

export const getAllValues = (id: string) => {
  const el = getRootEl(id);

  if (!el) return [];

  return Array.from(el.children)
    .map((child) => child.getAttribute("data-value"))
    .filter(Boolean) as string[];
};

export const getSegmentIndex = (value: string, id: string) => {
  const values = getAllValues(id);

  return values.indexOf(value);
};
