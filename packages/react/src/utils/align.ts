export type Align = "left" | "center" | "right";
export type AlignY = "top" | "center" | "bottom";

const alignMap = {
  left: "flexStart",
  center: "center",
  right: "flexEnd",
} as const;

export const handleAlign = (align: Align | undefined) => (align ? alignMap[align] : undefined);

const alignYMap = {
  top: "flexStart",
  center: "center",
  bottom: "flexEnd",
} as const;

export const handleAlignY = (alignY: AlignY | undefined) =>
  alignY ? alignYMap[alignY] : undefined;
