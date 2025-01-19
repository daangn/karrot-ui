import type { StyleObject } from "@seed-design/qvism-core";

export interface AnimationProps {
  duration: string;
  timingFunction: string;

  /**
   * @default 1
   */
  opacity?: string;

  /**
   * @default 1
   */
  scale?: string;

  /**
   * @default 0
   */
  translateX?: string;

  /**
   * @default 0
   */
  translateY?: string;
}

export function enterAnimation(props: AnimationProps): StyleObject {
  return {
    animation: "seed-enter",
    animationTimingFunction: props.timingFunction,
    animationDuration: props.duration,
    "--seed-enter-translate-x": props.translateX ?? "0",
    "--seed-enter-translate-y": props.translateY ?? "0",
    "--seed-enter-opacity": props.opacity?.toString() ?? "1",
    "--seed-enter-scale": props.scale?.toString() ?? "1",
  };
}

export function exitAnimation(props: AnimationProps): StyleObject {
  return {
    animation: "seed-exit",
    animationTimingFunction: props.timingFunction,
    animationDuration: props.duration,
    animationFillMode: "forwards",
    "--seed-exit-translate-x": props.translateX ?? "0",
    "--seed-exit-translate-y": props.translateY ?? "0",
    "--seed-exit-opacity": props.opacity?.toString() ?? "1",
    "--seed-exit-scale": props.scale?.toString() ?? "1",
  };
}
