import { getHexString, isVariableAlias } from "utils.mjs";
import {
  FILLS,
  FONT_FAMILIES,
  FONT_SIZES,
  VARIABLE_NAMES,
  SIZES,
  VARIABLE_TABLE_HEADER_TITLE,
  VARIABLE_TABLE_NAME_HYPERLINKS,
} from "./constants.mjs";
import { drawAutoLayout, drawMainFrame, drawTableCell, drawTextNode } from "./draw-layer.mjs";
import type { VariableTable } from "create-variable-tables.mjs";

interface DrawVariableTablesParams {
  variableTables: VariableTable[];
  possibleSuffixes: string[];
  drawCombinations?: boolean;
}

export async function drawVariableTables(
  { variableTables, possibleSuffixes, drawCombinations = true }: DrawVariableTablesParams,
  parent?: FrameNode,
) {
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });

  const colorVariables = await figma.variables.getLocalVariablesAsync("COLOR");

  const tableMetadataForegroundVariable = colorVariables.find(
    (variable) => variable.name === VARIABLE_NAMES.TABLE_METADATA_FOREGROUND,
  );

  const previewStrokeVariable = colorVariables.find(
    (variable) => variable.name === VARIABLE_NAMES.PREVIEW_STROKE,
  );

  for (const key in FONT_FAMILIES) {
    await figma.loadFontAsync(FONT_FAMILIES[key as keyof typeof FONT_FAMILIES]);
  }

  for (const variableTable of variableTables) {
    const table = drawMainFrame({ name: variableTable.name }, parent);

    for (const collection of variableTable.collections) {
      const collectionFrame = drawAutoLayout(
        {
          name: collection.name,
          layoutMode: "VERTICAL",
          layoutSizingHorizontal: "HUG",
          layoutSizingVertical: "HUG",
          itemSpacing: 60,
        },
        table,
      );

      drawTextNode(
        {
          characters: VARIABLE_TABLE_HEADER_TITLE,
          fontName: FONT_FAMILIES.SF_PRO_TEXT_BOLD,
          fontSize: 14,
          fills: tableMetadataForegroundVariable
            ? [
                figma.variables.setBoundVariableForPaint(
                  FILLS.NOOP,
                  "color",
                  tableMetadataForegroundVariable,
                ),
              ]
            : [],
        },
        collectionFrame,
      );

      const variableTableNameFrame = drawAutoLayout(
        {
          name: variableTable.name,
          layoutMode: "HORIZONTAL",
          layoutSizingHorizontal: "HUG",
          layoutSizingVertical: "HUG",
          itemSpacing: 16,
        },
        collectionFrame,
      );
      variableTableNameFrame.counterAxisAlignItems = "CENTER";

      const variableTableName = drawTextNode(
        {
          characters: `${variableTable.name} ↗`,
          fontName: FONT_FAMILIES.SF_PRO_BOLD,
          fontSize: FONT_SIZES.XXL,
          fills: tableMetadataForegroundVariable
            ? [
                figma.variables.setBoundVariableForPaint(
                  FILLS.NOOP,
                  "color",
                  tableMetadataForegroundVariable,
                ),
              ]
            : [],
        },
        variableTableNameFrame,
      );

      if (variableTable.name in VARIABLE_TABLE_NAME_HYPERLINKS) {
        const value =
          VARIABLE_TABLE_NAME_HYPERLINKS[
            variableTable.name as keyof typeof VARIABLE_TABLE_NAME_HYPERLINKS
          ];

        variableTableName.setRangeHyperlink(
          variableTableName.characters.length - 1,
          variableTableName.characters.length,
          { type: "URL", value },
        );
      }

      const modesFrame = drawAutoLayout(
        {
          name: "Modes",
          layoutMode: variableTable.type === "palette" ? "VERTICAL" : "HORIZONTAL",
          layoutSizingHorizontal: "HUG",
          layoutSizingVertical: "HUG",
          itemSpacing: 32,
        },
        collectionFrame,
      );

      for (const mode of collection.modes) {
        const frameFills = [mode.isDark ? FILLS.DARK : FILLS.LIGHT];
        const textFills = [mode.isDark ? FILLS.LIGHT : FILLS.DARK];
        const fadedFills = [mode.isDark ? FILLS.DARK_FADED : FILLS.LIGHT_FADED];

        const modeFrame = drawAutoLayout(
          {
            name: mode.name,
            layoutMode: "VERTICAL",
            layoutSizingHorizontal: "HUG",
            layoutSizingVertical: "HUG",
            itemSpacing: 24,
            paddingX: 32,
            paddingY: 32,
          },
          modesFrame,
        );
        modeFrame.cornerRadius = 16;
        modeFrame.fills = frameFills;

        const collectionFound = await figma.variables.getVariableCollectionByIdAsync(collection.id);
        if (collectionFound) {
          modeFrame.setExplicitVariableModeForCollection(collectionFound, mode.id);
        }

        drawTextNode(
          {
            characters: mode.name,
            fontName: FONT_FAMILIES.FIGMA_TEXT_BOLD,
            fontSize: FONT_SIZES.XL,
            fills: textFills,
            opacity: 0.9,
          },
          modeFrame,
        );

        const prefixesFrame = drawAutoLayout(
          {
            name: "Prefixes",
            layoutMode: "VERTICAL",
            layoutSizingHorizontal: "HUG",
            layoutSizingVertical: "HUG",
            itemSpacing: 16,
          },
          modeFrame,
        );

        for (const { prefix, variableInfos } of mode.variablesByPrefix) {
          const prefixFrame = drawAutoLayout(
            {
              name: prefix,
              layoutMode: "VERTICAL",
              layoutSizingHorizontal: "HUG",
              layoutSizingVertical: "HUG",
              itemSpacing: 8,
            },
            prefixesFrame,
          );

          if (variableTable.type !== "palette") {
            const prefixTitleContainer = drawAutoLayout(
              {
                name: prefix,
                layoutMode: "HORIZONTAL",
                layoutSizingHorizontal: "HUG",
                layoutSizingVertical: "HUG",
                paddingX: 12,
              },
              prefixFrame,
            );

            drawTextNode(
              {
                characters: prefix,
                fontName: FONT_FAMILIES.FIGMA_TEXT_BOLD,
                fontSize: FONT_SIZES.LG,
                fills: textFills,
                opacity: 0.8,
              },
              prefixTitleContainer,
            );
          }

          const prefixTable = drawAutoLayout(
            {
              name: prefix,
              layoutMode: variableTable.type === "palette" ? "HORIZONTAL" : "VERTICAL",
              layoutSizingHorizontal: "HUG",
              layoutSizingVertical: "HUG",
            },
            prefixFrame,
          );
          prefixTable.clipsContent = true;
          prefixTable.cornerRadius = 8;
          prefixTable.strokes = fadedFills;
          prefixTable.strokeWeight = 2;

          switch (variableTable.type) {
            case "token": {
              for (const { variable, matchedSwatches, previewType } of variableInfos) {
                const variableRow = drawAutoLayout(
                  {
                    name: variable.name,
                    layoutMode: "HORIZONTAL",
                    layoutSizingHorizontal: "FILL",
                    height: SIZES.CELL_HEIGHT,
                  },
                  prefixTable,
                );

                // Cell #1: Variable Name

                const titleCell = drawTableCell(
                  {
                    name: variable.name,
                    width: SIZES.CELL_WIDTH,
                    layoutSizingVertical: "FILL",
                  },
                  variableRow,
                );
                titleCell.fills = fadedFills;

                const hasSuffix = possibleSuffixes.some((suffix) => variable.name.endsWith(suffix));

                drawTextNode(
                  {
                    characters: hasSuffix ? `┗ ${variable.name}` : variable.name,
                    fontName: FONT_FAMILIES.FIGMA_TEXT_REGULAR,
                    fontSize: FONT_SIZES.BASE,
                    fills: textFills,
                  },
                  titleCell,
                );

                // Cell #2: Preview

                const previewCell = drawTableCell(
                  {
                    name: "Preview",
                    width: SIZES.CELL_WIDTH,
                    layoutSizingVertical: "FILL",
                  },
                  variableRow,
                );

                switch (previewType) {
                  case "foreground": {
                    drawTextNode(
                      {
                        characters: "Aa",
                        fontName: FONT_FAMILIES.FIGMA_TEXT_BOLD,
                        fontSize: 16,
                        fills: [
                          figma.variables.setBoundVariableForPaint(FILLS.NOOP, "color", variable),
                        ],
                      },
                      previewCell,
                    );

                    break;
                  }
                  case "background": {
                    const color = figma.createRectangle();
                    color.cornerRadius = 4;
                    color.resize(16, 16);
                    color.fills = [
                      figma.variables.setBoundVariableForPaint(FILLS.NOOP, "color", variable),
                    ];

                    if (previewStrokeVariable) {
                      color.strokes = [
                        figma.variables.setBoundVariableForPaint(
                          FILLS.NOOP,
                          "color",
                          previewStrokeVariable,
                        ),
                      ];
                      color.strokeWeight = 1;
                    }

                    previewCell.appendChild(color);

                    break;
                  }
                  case "stroke": {
                    const color = figma.createRectangle();
                    color.cornerRadius = 4;
                    color.resize(16, 16);
                    color.fills = [];
                    color.strokes = [
                      figma.variables.setBoundVariableForPaint(FILLS.NOOP, "color", variable),
                    ];
                    color.strokeWeight = 2;

                    previewCell.appendChild(color);

                    break;
                  }
                }

                const variableValue = variable.valuesByMode[mode.id];

                const characters = isVariableAlias(variableValue)
                  ? ((await figma.variables.getVariableByIdAsync(variableValue.id))?.name ??
                    "Unknown")
                  : typeof variableValue === "object"
                    ? getHexString(variableValue)
                    : "Unknown";

                drawTextNode(
                  {
                    characters,
                    fontName: FONT_FAMILIES.FIGMA_TEXT_REGULAR,
                    fontSize: FONT_SIZES.BASE,
                    fills: textFills,
                  },
                  previewCell,
                );

                // Cell #3: Combinations

                if (!drawCombinations || matchedSwatches.length === 0) continue;

                const combinationsCell = drawTableCell(
                  {
                    name: "Combinations",
                    layoutSizingHorizontal: "HUG",
                    layoutSizingVertical: "FILL",
                  },
                  variableRow,
                );

                for (const matchedSwatch of matchedSwatches) {
                  combinationsCell.appendChild(matchedSwatch.clone());
                }
              }

              break;
            }
            case "palette": {
              const paletteByShade = variableInfos.reduce(
                (acc, { variable }) => {
                  const hue = variable.name.split("/")[1].split("-")[0];
                  if (!acc[hue]) acc[hue] = [];

                  acc[hue].push(variable);
                  return acc;
                },
                {} as Record<string, Variable[]>,
              );

              for (const hue in paletteByShade) {
                const hueTable = drawAutoLayout(
                  {
                    name: hue,
                    layoutMode: "VERTICAL",
                    layoutSizingHorizontal: "HUG",
                    layoutSizingVertical: "HUG",
                  },
                  prefixTable,
                );

                for (const scale of paletteByShade[hue]) {
                  const scaleRow = drawAutoLayout(
                    {
                      name: scale.name,
                      layoutMode: "HORIZONTAL",
                      layoutSizingHorizontal: "FILL",
                      height: SIZES.CELL_HEIGHT,
                    },
                    hueTable,
                  );

                  const titleCell = drawTableCell(
                    {
                      name: scale.name,
                      width: hue === "static" ? 240 : 170,
                      layoutSizingVertical: "FILL",
                    },
                    scaleRow,
                  );
                  titleCell.fills = fadedFills;

                  drawTextNode(
                    {
                      characters: scale.name.replace(`${prefix}/`, ""),
                      fontName: FONT_FAMILIES.FIGMA_TEXT_REGULAR,
                      fontSize: FONT_SIZES.BASE,
                      fills: textFills,
                    },
                    titleCell,
                  );

                  const previewCell = drawTableCell(
                    {
                      name: "Preview",
                      width: 150,
                      layoutSizingVertical: "FILL",
                    },
                    scaleRow,
                  );

                  const color = figma.createRectangle();
                  color.cornerRadius = 4;
                  color.resize(16, 16);
                  color.fills = [
                    figma.variables.setBoundVariableForPaint(FILLS.NOOP, "color", scale),
                  ];

                  if (previewStrokeVariable) {
                    color.strokes = fadedFills;
                    color.strokes = [
                      figma.variables.setBoundVariableForPaint(
                        FILLS.NOOP,
                        "color",
                        previewStrokeVariable,
                      ),
                    ];
                    color.strokeWeight = 1;
                  }

                  previewCell.appendChild(color);

                  const scaleValue = scale.valuesByMode[mode.id];

                  const characters = isVariableAlias(scaleValue)
                    ? ((await figma.variables.getVariableByIdAsync(scaleValue.id))?.name ??
                      "Unknown")
                    : typeof scaleValue === "object"
                      ? getHexString(scaleValue)
                      : "Unknown";

                  drawTextNode(
                    {
                      characters,
                      fontName: FONT_FAMILIES.FIGMA_TEXT_REGULAR,
                      fontSize: FONT_SIZES.BASE,
                      fills: textFills,
                    },
                    previewCell,
                  );
                }
              }

              break;
            }
          }
        }
      }
    }
  }
}
