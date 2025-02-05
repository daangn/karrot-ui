/* Utils -----------------------------------------------------------------------
-------------------------------------------------------------------------------- */

export const getAllValues = (el: HTMLElement) => {
  return Array.from(el.children)
    .map((child) => child.getAttribute("data-value"))
    .filter(Boolean) as string[];
};

export const getSegmentIndex = (value: string, el: HTMLElement) => {
  const values = getAllValues(el);

  return values.indexOf(value);
};
