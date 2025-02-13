import { IconLayerInstance16 } from "@create-figma-plugin/ui";
import { h } from "preact";

export function InstanceBadge({ label }: { label?: string }) {
  if (label)
    return (
      <div className="text-violet-800 font-semibold flex gap-0.5">
        <IconLayerInstance16 />
        <span>{label}</span>
      </div>
    );

  return (
    <div className="text-violet-800">
      <IconLayerInstance16 />
    </div>
  );
}
