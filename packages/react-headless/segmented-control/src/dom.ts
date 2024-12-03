/* ID -----------------------------------------------------------------------
-------------------------------------------------------------------------------- */

export const getRootId = (id: string) => `segmented-control:${id}:root`;

export const getLabelId = (id: string) => `segmented-control:${id}:label`;

export const getSegmentRootId = (value: string, id: string) =>
  `segmented-control:${value}:${id}:segment-root`;
export const getIndicatorId = (id: string) => `segmented-control:${id}:indicator`;

/* Element -----------------------------------------------------------------------
-------------------------------------------------------------------------------- */

const isClient = typeof window === "object";

export const getRootEl = (id: string) => (isClient ? document.getElementById(getRootId(id)) : null);

export const getSegmentRootEl = (value: string, id: string) =>
  isClient ? document.getElementById(getSegmentRootId(value, id)) : null;

/* Utils -----------------------------------------------------------------------
-------------------------------------------------------------------------------- */

export const getAllValues = (id: string) => {
  const el = getRootEl(id);

  if (!el) return [];

  return Array.from(el.children)
    .map((child) => child.getAttribute("data-value"))
    .filter(Boolean);
};
