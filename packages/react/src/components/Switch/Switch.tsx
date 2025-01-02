import { Switch as SwitchPrimitive } from "@seed-design/react-switch";
import { switchStyle, type SwitchVariantProps } from "@seed-design/recipe/switch";
import { createStyleContext } from "../../utils/createStyleContext";

const { withProvider, withContext } = createStyleContext(switchStyle);

////////////////////////////////////////////////////////////////////////////////////

export interface SwitchRootProps extends SwitchVariantProps, SwitchPrimitive.RootProps {}

export const SwitchRoot = withProvider<HTMLLabelElement, SwitchRootProps>(
  SwitchPrimitive.Root,
  "root",
);

////////////////////////////////////////////////////////////////////////////////////

export interface SwitchControlProps extends SwitchPrimitive.ControlProps {}

export const SwitchControl = withContext<HTMLDivElement, SwitchControlProps>(
  SwitchPrimitive.Control,
  "control",
);

////////////////////////////////////////////////////////////////////////////////////

export interface SwitchThumbProps extends SwitchPrimitive.ThumbProps {}

export const SwitchThumb = withContext<HTMLDivElement, SwitchThumbProps>(
  SwitchPrimitive.Thumb,
  "thumb",
);

////////////////////////////////////////////////////////////////////////////////////

export interface SwitchHiddenInputProps extends SwitchPrimitive.HiddenInputProps {}

export const SwitchHiddenInput = SwitchPrimitive.HiddenInput;
