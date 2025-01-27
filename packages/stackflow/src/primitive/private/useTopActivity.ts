import { useStack } from "@stackflow/react";
import { useEffect, useState } from "react";

export function useTopActivity() {
  const stack = useStack();
  if (!stack) {
    throw new Error(
      "useStack is not available in the context. Make sure you are using @stackflow/react >= 1.4.1. (https://github.com/daangn/stackflow/blob/main/integrations/react/CHANGELOG.md#141)",
    );
  }

  const topId = stack.activities.find((activity) => activity.isTop)?.id;
  const topActivity = stack.activities.find((activity) => activity.isTop);
  const transitionState = topActivity?.transitionState ?? "enter-done";

  // TODO: There should be a better way to handle this. We should not rely on the DOM element to get the activity type.
  const [topEl, setTopEl] = useState<HTMLElement | null>(null);
  const activityType = topEl?.dataset["activityType"];

  useEffect(() => {
    if (!topId) return;

    const el = document.getElementById(topId);
    if (!el) {
      throw new Error(`Cannot find the top activity element with id: ${topId}`);
    }

    setTopEl(el);
  }, [topId]);

  return {
    transitionState,
    activityType,
  };
}
