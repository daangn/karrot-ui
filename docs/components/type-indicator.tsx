import { ValueExpression } from "@seed-design/rootage-core";
import {
  HourglassIcon,
  LayersIcon,
  PaintbrushIcon,
  RulerIcon,
  SigmaIcon,
  SplineIcon,
} from "lucide-react";

export function TypeIndicator(props: { value: ValueExpression }) {
  const { value } = props;

  if (value.type === "color") {
    return <div className="w-4 h-4 rounded-full border" style={{ backgroundColor: value.value }} />;
  }

  if (value.type === "dimension") {
    return (
      <div>
        <RulerIcon className="w-4 h-4" />
      </div>
    );
  }

  if (value.type === "duration") {
    return (
      <div>
        <HourglassIcon className="w-4 h-4" />
      </div>
    );
  }

  if (value.type === "number") {
    return (
      <div>
        <SigmaIcon className="w-4 h-4" />
      </div>
    );
  }

  if (value.type === "shadow") {
    return (
      <div>
        <LayersIcon className="w-4 h-4" />
      </div>
    );
  }

  if (value.type === "cubicBezier") {
    return (
      <div>
        <SplineIcon className="w-4 h-4" />
      </div>
    );
  }

  if (value.type === "gradient") {
    return (
      <div>
        <PaintbrushIcon className="w-4 h-4" />
      </div>
    );
  }

  return null;
}
