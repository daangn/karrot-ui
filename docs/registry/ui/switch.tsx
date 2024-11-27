import { type UseSwitchProps, useSwitch } from "@seed-design/react-switch";
import {
  type SwitchVariantProps,
  switchStyle,
} from "@seed-design/recipe/switch";
import clsx from "clsx";
import * as React from "react";

import type { Assign } from "../util/types";
import { visuallyHidden } from "../util/visuallyHidden";

import "@seed-design/stylesheet/switch.css";

export interface SwitchProps extends SwitchVariantProps {}

interface ReactSwitchProps
  extends Assign<React.HTMLAttributes<HTMLInputElement>, UseSwitchProps>,
    SwitchProps {}

export const Switch = React.forwardRef<HTMLInputElement, ReactSwitchProps>(
  ({ className, size = "medium", ...otherProps }, ref) => {
    const { restProps, controlProps, hiddenInputProps, rootProps, thumbProps } =
      useSwitch(otherProps);
    const classNames = switchStyle({ size });

    return (
      <label className={clsx(classNames.root, className)} {...rootProps}>
        <div {...controlProps} className={classNames.control}>
          <div {...thumbProps} className={classNames.thumb} />
        </div>
        <input
          ref={ref}
          {...hiddenInputProps}
          {...restProps}
          style={visuallyHidden}
        />
      </label>
    );
  },
);
Switch.displayName = "Switch";
