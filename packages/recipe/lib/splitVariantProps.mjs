export function splitVariantProps(props, variantMap) {
  const variantProps = {};
  const otherProps = {};
  for (const key in props) {
    if (variantMap[key] != null) {
      variantProps[key] = props[key];
    } else {
      otherProps[key] = props[key];
    }
  }
  return [variantProps, otherProps];
}