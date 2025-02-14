export interface IconProps {
  size?: string;
  color?: string;
}

export function prefixIcon(props: IconProps) {
  if (props.size && props.color) {
    return {
      "--seed-prefix-icon-size": props.size,
      "--seed-prefix-icon-color": props.color,
    };
  }

  if (props.size) {
    return {
      "--seed-prefix-icon-size": props.size,
    };
  }

  if (props.color) {
    return {
      "--seed-prefix-icon-color": props.color,
    };
  }

  return {};
}

export function suffixIcon(props: IconProps) {
  if (props.size && props.color) {
    return {
      "--seed-suffix-icon-size": props.size,
      "--seed-suffix-icon-color": props.color,
    };
  }

  if (props.size) {
    return {
      "--seed-suffix-icon-size": props.size,
    };
  }

  if (props.color) {
    return {
      "--seed-suffix-icon-color": props.color,
    };
  }

  return {};
}

export function onlyIcon(props: IconProps) {
  if (props.size && props.color) {
    return {
      "--seed-only-icon-size": props.size,
      "--seed-only-icon-color": props.color,
    };
  }

  if (props.size) {
    return {
      "--seed-only-icon-size": props.size,
    };
  }

  if (props.color) {
    return {
      "--seed-only-icon-color": props.color,
    };
  }

  return {};
}
