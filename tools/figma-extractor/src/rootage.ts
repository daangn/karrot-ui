import * as YAML from "yaml";

function rgbaToHex(r: number, g: number, b: number, a: number) {
  // Convert r, g, b from range [0, 1] to [0, 255]
  const red = Math.round(r * 255);
  const green = Math.round(g * 255);
  const blue = Math.round(b * 255);

  // Convert to hex string with padding
  const hexRed = red.toString(16).padStart(2, "0");
  const hexGreen = green.toString(16).padStart(2, "0");
  const hexBlue = blue.toString(16).padStart(2, "0");

  if (a === 1) {
    // Return #RRGGBB if alpha is 1
    return `#${hexRed}${hexGreen}${hexBlue}`;
  }
  // Convert alpha from range [0, 1] to [0, 255]
  const alpha = Math.round(a * 255);
  const hexAlpha = alpha.toString(16).padStart(2, "0");
  // Return #RRGGBBAA
  return `#${hexRed}${hexGreen}${hexBlue}${hexAlpha}`;
}

export function getColorRootageTokens(): string {
  const variables = figma.variables.getLocalVariables().sort((a, b) => {
    const aParts = a.name.split("-");
    const bParts = b.name.split("-");
    const aName = aParts.slice(0, -1).join("-");
    const bName = bParts.slice(0, -1).join("-");
    const aIndex = Number(aParts[aParts.length - 1]);
    const bIndex = Number(bParts[bParts.length - 1]);
    if (aName === bName) {
      return aIndex - bIndex;
    }

    return aName.localeCompare(bName);
  });

  function transformName(str: string) {
    return `$color.${str.split("/").join(".")}`;
  }

  const palettes = variables.filter((variable) =>
    variable.name.startsWith("palette/"),
  ) as Variable[];

  const paletteMap = new Map<string, Variable>(palettes.map((palette) => [palette.id, palette]));

  const paletteColors = Object.fromEntries(
    palettes.map((palette) => {
      const lightValue = palette.valuesByMode["1928:7"] as RGBA;
      const darkValue = palette.valuesByMode["1928:8"] as RGBA;
      return [
        transformName(palette.name),
        {
          values: {
            "theme-light": rgbaToHex(lightValue.r, lightValue.g, lightValue.b, lightValue.a),
            "theme-dark": rgbaToHex(darkValue.r, darkValue.g, darkValue.b, darkValue.a),
          },
        },
      ];
    }),
  );

  const fgs = variables.filter((variable) => variable.name.startsWith("fg/"));

  const fgColors = Object.fromEntries(
    fgs.map((fg) => {
      const lightValue = fg.valuesByMode["1928:7"] as VariableAlias;
      const darkValue = fg.valuesByMode["1928:8"] as VariableAlias;
      return [
        `$color.${fg.name.split("/").join(".")}`,
        {
          values: {
            "theme-light": transformName(paletteMap.get(lightValue.id)!.name),
            "theme-dark": transformName(paletteMap.get(darkValue.id)!.name),
          },
        },
      ];
    }),
  );

  const bgs = variables.filter((variable) => variable.name.startsWith("bg/"));

  const bgColors = Object.fromEntries(
    bgs.map((bg) => {
      const lightValue = bg.valuesByMode["1928:7"] as VariableAlias;
      const darkValue = bg.valuesByMode["1928:8"] as VariableAlias;
      return [
        `$color.${bg.name.split("/").join(".")}`,
        {
          values: {
            "theme-light": transformName(paletteMap.get(lightValue.id)!.name),
            "theme-dark": transformName(paletteMap.get(darkValue.id)!.name),
          },
        },
      ];
    }),
  );

  const strokes = variables.filter((variable) => variable.name.startsWith("stroke/"));

  const strokeColors = Object.fromEntries(
    strokes.map((stroke) => {
      const lightValue = stroke.valuesByMode["1928:7"] as VariableAlias;
      const darkValue = stroke.valuesByMode["1928:8"] as VariableAlias;
      return [
        `$color.${stroke.name.split("/").join(".")}`,
        {
          values: {
            "theme-light": transformName(paletteMap.get(lightValue.id)!.name),
            "theme-dark": transformName(paletteMap.get(darkValue.id)!.name),
          },
        },
      ];
    }),
  );

  return YAML.stringify({
    tokens: {
      ...paletteColors,
      ...fgColors,
      ...bgColors,
      ...strokeColors,
    },
  });
}
