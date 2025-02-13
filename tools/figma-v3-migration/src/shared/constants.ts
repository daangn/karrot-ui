export const SETTINGS_KEY = "v3-migration-settings" as const;

export const SEED_V3_LIBRARY_NAME = "SEED V3" as const;
export const SEED_V3_LIBRARY_VARIABLE_COLLECTION_NAMES = {
  COLOR: "Color",
  UNIT: "Global",
  PREVIEW: "Preview",
} as const;

export const SEED_V3_LIBRARY_VARIABLE_PREFIXES = {
  UNIT: {
    DIMENSION: "dimension/",
    RADIUS: "radius/",
    STROKE_WIDTH: "stroke-width/",
  },
  COLOR: {
    FG: "fg/",
    BG: "bg/",
    PALETTE: "palette/",
    STROKE: "stroke/",
    MANNER_TEMP: "manner-temp/",
  },
} as const;
