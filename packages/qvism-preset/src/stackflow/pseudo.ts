export const push = "[data-global-transition-state=enter-active] &[data-activity-is-top]";
export const pop = "[data-global-transition-state=exit-active] &[data-activity-is-top]";
export const idle = "[data-global-transition-state=enter-done] &[data-activity-is-top]";
export const pushBehind =
  '[data-global-transition-state=enter-active][data-top-activity-type="full-screen"] &:not([data-activity-is-top])';
export const popBehind =
  '[data-global-transition-state=exit-active][data-top-activity-type="full-screen"] &:not([data-activity-is-top])';
export const idleBehind =
  '[data-global-transition-state=enter-done][data-top-activity-type="full-screen"] &:not([data-activity-is-top])';

// :not(#\\#) is used to force increasing specificity
export const swipeBackSwiping = "[data-swipe-back-state=swiping] &[data-activity-is-top]:not(#\\#)";
export const swipeBackSwipingBehind =
  "[data-swipe-back-state=swiping] &:not([data-activity-is-top]):not(#\\#)";
