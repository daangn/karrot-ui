export interface CountProps {
  fontSize?: string;
  lineHeight?: string | number;
  fontWeight?: string;
  color?: string;
}

export function count(props: CountProps) {
  const result: Record<`--${string}`, string | number> = {};

  if (props.fontSize) {
    result["--seed-count-font-size"] = props.fontSize;
  }

  if (props.lineHeight) {
    result["--seed-count-line-height"] = props.lineHeight;
  }

  if (props.fontWeight) {
    result["--seed-count-font-weight"] = props.fontWeight;
  }

  if (props.color) {
    result["--seed-count-color"] = props.color;
  }

  return result;
}
