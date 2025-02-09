/* ID -----------------------------------------------------------------------
-------------------------------------------------------------------------------- */

export const getTriggerId = (value: string, id: string) => `tabs:${value}:${id}:trigger-root`;
export const getListId = (id: string) => `tabs:${id}:list`;
export const getContentId = (value: string, id: string) => `tabs:${value}:${id}:content`;

/* Query -----------------------------------------------------------------------
-------------------------------------------------------------------------------- */

export const getEnabledValues = (el: HTMLElement) => {
  if (!el) return [];
  return Array.from(el.children)
    .filter((child) => !child.hasAttribute("aria-disabled"))
    .map((child) => child.getAttribute("data-value"))
    .filter(Boolean);
};
