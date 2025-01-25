import type * as React from "react";

export interface CelciusProps {
  value: number;
}

export const Celcius: React.FC<CelciusProps> = (props) => {
  return `${props.value}°C`;
};
