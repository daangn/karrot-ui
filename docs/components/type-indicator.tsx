import { AST } from "@seed-design/rootage-core";
import {
  HourglassIcon,
  LayersIcon,
  PaintbrushIcon,
  RulerIcon,
  SigmaIcon,
  SplineIcon,
} from "lucide-react";

export function TypeIndicator(props: { value: AST.ValueLit }) {
  const { value } = props;

  if (value.kind === "ColorHexLit") {
    return <div className="w-4 h-4 rounded-full border" style={{ backgroundColor: value.value }} />;
  }

  if (value.kind === "DimensionLit") {
    return (
      <div>
        <RulerIcon className="w-4 h-4" />
      </div>
    );
  }

  if (value.kind === "DurationLit") {
    return (
      <div>
        <HourglassIcon className="w-4 h-4" />
      </div>
    );
  }

  if (value.kind === "NumberLit") {
    return (
      <div>
        <SigmaIcon className="w-4 h-4" />
      </div>
    );
  }

  if (value.kind === "ShadowLit") {
    return (
      <div>
        <LayersIcon className="w-4 h-4" />
      </div>
    );
  }

  if (value.kind === "CubicBezierLit") {
    return (
      <div>
        <SplineIcon className="w-4 h-4" />
      </div>
    );
  }

  if (value.kind === "GradientLit") {
    return (
      <div>
        <PaintbrushIcon className="w-4 h-4" />
      </div>
    );
  }

  return null;
}
