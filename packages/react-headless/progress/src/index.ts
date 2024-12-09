export interface UseProgressProps {
  /**
   * The current value of the progress. if undefined, it will be indeterminate.
   */
  value?: number;
  /**
   * The minimum value allowed of the progress.
   * @default 0
   */
  minValue?: number;
  /**
   * The maximum value allowed of the progress.
   * @default 100
   */
  maxValue?: number;
}

export function useProgress(props: UseProgressProps) {
  const { value, minValue = 0, maxValue = 100 } = props;
  const indeterminate = typeof value !== "number";

  const dataProps = {
    "data-state": value === maxValue ? "complete" : indeterminate ? "indeterminate" : "loading",
  };

  return {
    value,
    indeterminate,
    percent: indeterminate ? -1 : ((value - minValue) / (maxValue - minValue)) * 100,
    dataProps,
    progressProps: {
      role: "progressbar",
      "aria-valuenow": indeterminate ? undefined : value,
      "aria-valuemin": minValue,
      "aria-valuemax": maxValue,
    },
  };
}

export interface UseProgressCircleProps {
  value?: number;
  percent: number;
  indeterminate: boolean;
}

// referenced from zag-js/progress
export function useProgressCircle(props: UseProgressCircleProps) {
  const { indeterminate, percent, value } = props;

  const circleProps = {
    style: {
      "--radius": "calc(var(--size) / 2 - var(--thickness) / 2)",
      cx: "calc(var(--size) / 2)",
      cy: "calc(var(--size) / 2)",
      r: "var(--radius)",
      fill: "transparent",
      strokeWidth: "var(--thickness)",
    },
  };
  return {
    rootProps: {
      style: {
        width: "var(--size)",
        height: "var(--size)",
      },
    },
    trackProps: circleProps,
    rangeProps: {
      opacity: value === 0 ? 0 : undefined,
      style: {
        ...circleProps.style,
        "--percent": percent,
        "--circumference": "calc(2 * 3.14159 * var(--radius))",
        "--offset": "calc(var(--circumference) * (100 - var(--percent)) / 100)",
        strokeDashoffset: "calc(var(--circumference) * ((100 - var(--percent)) / 100))",
        strokeDasharray: indeterminate ? undefined : "var(--circumference)",
        transformOrigin: "center",
        transform: "rotate(-90deg)",
      },
    },
  };
}
