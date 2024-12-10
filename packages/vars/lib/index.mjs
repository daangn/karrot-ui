var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/color/index.ts
var color_exports = {};
__export(color_exports, {
  bg: () => bg_vars_exports,
  fg: () => fg_vars_exports,
  palette: () => palette_vars_exports,
  stroke: () => stroke_vars_exports
});

// src/color/bg.vars.ts
var bg_vars_exports = {};
__export(bg_vars_exports, {
  brandSolid: () => brandSolid,
  brandSolidPressed: () => brandSolidPressed,
  brandWeak: () => brandWeak,
  brandWeakPressed: () => brandWeakPressed,
  dangerSolid: () => dangerSolid,
  dangerSolidPressed: () => dangerSolidPressed,
  dangerWeak: () => dangerWeak,
  dangerWeakPressed: () => dangerWeakPressed,
  disabled: () => disabled,
  floatingSolid: () => floatingSolid,
  informativeSolid: () => informativeSolid,
  informativeSolidPressed: () => informativeSolidPressed,
  informativeWeak: () => informativeWeak,
  informativeWeakPressed: () => informativeWeakPressed,
  layerBasement: () => layerBasement,
  layerDefault: () => layerDefault,
  layerDefaultPressed: () => layerDefaultPressed,
  layerFill: () => layerFill,
  layerFloating: () => layerFloating,
  layerFloatingPressed: () => layerFloatingPressed,
  magicSolid: () => magicSolid,
  magicSolidPressed: () => magicSolidPressed,
  magicWeak: () => magicWeak,
  magicWeakPressed: () => magicWeakPressed,
  neutralMuted: () => neutralMuted,
  neutralMutedPressed: () => neutralMutedPressed,
  neutralSolid: () => neutralSolid,
  neutralSolidPressed: () => neutralSolidPressed,
  neutralWeak: () => neutralWeak,
  neutralWeakPressed: () => neutralWeakPressed,
  overlay: () => overlay,
  overlayMuted: () => overlayMuted,
  positiveSolid: () => positiveSolid,
  positiveSolidPressed: () => positiveSolidPressed,
  positiveWeak: () => positiveWeak,
  positiveWeakPressed: () => positiveWeakPressed,
  staticWhite: () => staticWhite,
  textSelection: () => textSelection,
  warningSolid: () => warningSolid,
  warningWeak: () => warningWeak,
  warningWeakPressed: () => warningWeakPressed
});
var positiveWeak = "var(--seed-v3-color-bg-positive-weak)";
var positiveSolid = "var(--seed-v3-color-bg-positive-solid)";
var warningSolid = "var(--seed-v3-color-bg-warning-solid)";
var warningWeak = "var(--seed-v3-color-bg-warning-weak)";
var dangerWeak = "var(--seed-v3-color-bg-danger-weak)";
var dangerSolid = "var(--seed-v3-color-bg-danger-solid)";
var dangerSolidPressed = "var(--seed-v3-color-bg-danger-solid-pressed)";
var brandWeak = "var(--seed-v3-color-bg-brand-weak)";
var brandSolid = "var(--seed-v3-color-bg-brand-solid)";
var brandSolidPressed = "var(--seed-v3-color-bg-brand-solid-pressed)";
var brandWeakPressed = "var(--seed-v3-color-bg-brand-weak-pressed)";
var layerDefault = "var(--seed-v3-color-bg-layer-default)";
var layerDefaultPressed = "var(--seed-v3-color-bg-layer-default-pressed)";
var layerFill = "var(--seed-v3-color-bg-layer-fill)";
var neutralWeak = "var(--seed-v3-color-bg-neutral-weak)";
var neutralSolid = "var(--seed-v3-color-bg-neutral-solid)";
var neutralWeakPressed = "var(--seed-v3-color-bg-neutral-weak-pressed)";
var informativeWeak = "var(--seed-v3-color-bg-informative-weak)";
var overlay = "var(--seed-v3-color-bg-overlay)";
var overlayMuted = "var(--seed-v3-color-bg-overlay-muted)";
var textSelection = "var(--seed-v3-color-bg-text-selection)";
var layerBasement = "var(--seed-v3-color-bg-layer-basement)";
var layerFloating = "var(--seed-v3-color-bg-layer-floating)";
var neutralSolidPressed = "var(--seed-v3-color-bg-neutral-solid-pressed)";
var disabled = "var(--seed-v3-color-bg-disabled)";
var layerFloatingPressed = "var(--seed-v3-color-bg-layer-floating-pressed)";
var informativeWeakPressed = "var(--seed-v3-color-bg-informative-weak-pressed)";
var staticWhite = "var(--seed-v3-color-bg-static-white)";
var warningWeakPressed = "var(--seed-v3-color-bg-warning-weak-pressed)";
var dangerWeakPressed = "var(--seed-v3-color-bg-danger-weak-pressed)";
var informativeSolid = "var(--seed-v3-color-bg-informative-solid)";
var positiveWeakPressed = "var(--seed-v3-color-bg-positive-weak-pressed)";
var informativeSolidPressed = "var(--seed-v3-color-bg-informative-solid-pressed)";
var positiveSolidPressed = "var(--seed-v3-color-bg-positive-solid-pressed)";
var magicSolid = "var(--seed-v3-color-bg-magic-solid)";
var magicSolidPressed = "var(--seed-v3-color-bg-magic-solid-pressed)";
var magicWeak = "var(--seed-v3-color-bg-magic-weak)";
var magicWeakPressed = "var(--seed-v3-color-bg-magic-weak-pressed)";
var neutralMuted = "var(--seed-v3-color-bg-neutral-muted)";
var floatingSolid = "var(--seed-v3-color-bg-floating-solid)";
var neutralMutedPressed = "var(--seed-v3-color-bg-neutral-muted-pressed)";

// src/color/fg.vars.ts
var fg_vars_exports = {};
__export(fg_vars_exports, {
  brand: () => brand,
  brandContrast: () => brandContrast,
  danger: () => danger,
  dangerContrast: () => dangerContrast,
  disabled: () => disabled2,
  informative: () => informative,
  informativeContrast: () => informativeContrast,
  magic: () => magic,
  magicContrast: () => magicContrast,
  neutral: () => neutral,
  neutralInverted: () => neutralInverted,
  neutralMuted: () => neutralMuted2,
  neutralSubtle: () => neutralSubtle,
  placeholder: () => placeholder,
  positive: () => positive,
  positiveContrast: () => positiveContrast,
  staticBlack: () => staticBlack,
  staticWhite: () => staticWhite2,
  warningContrast: () => warningContrast
});
var staticWhite2 = "var(--seed-v3-color-fg-static-white)";
var neutral = "var(--seed-v3-color-fg-neutral)";
var neutralMuted2 = "var(--seed-v3-color-fg-neutral-muted)";
var neutralSubtle = "var(--seed-v3-color-fg-neutral-subtle)";
var neutralInverted = "var(--seed-v3-color-fg-neutral-inverted)";
var brandContrast = "var(--seed-v3-color-fg-brand-contrast)";
var danger = "var(--seed-v3-color-fg-danger)";
var dangerContrast = "var(--seed-v3-color-fg-danger-contrast)";
var positive = "var(--seed-v3-color-fg-positive)";
var positiveContrast = "var(--seed-v3-color-fg-positive-contrast)";
var warningContrast = "var(--seed-v3-color-fg-warning-contrast)";
var informative = "var(--seed-v3-color-fg-informative)";
var informativeContrast = "var(--seed-v3-color-fg-informative-contrast)";
var placeholder = "var(--seed-v3-color-fg-placeholder)";
var disabled2 = "var(--seed-v3-color-fg-disabled)";
var staticBlack = "var(--seed-v3-color-fg-static-black)";
var brand = "var(--seed-v3-color-fg-brand)";
var magic = "var(--seed-v3-color-fg-magic)";
var magicContrast = "var(--seed-v3-color-fg-magic-contrast)";

// src/color/stroke.vars.ts
var stroke_vars_exports = {};
__export(stroke_vars_exports, {
  brand: () => brand2,
  control: () => control,
  danger: () => danger2,
  field: () => field,
  fieldFocused: () => fieldFocused,
  neutral: () => neutral2,
  neutralMuted: () => neutralMuted3,
  positive: () => positive2
});
var neutral2 = "var(--seed-v3-color-stroke-neutral)";
var brand2 = "var(--seed-v3-color-stroke-brand)";
var field = "var(--seed-v3-color-stroke-field)";
var fieldFocused = "var(--seed-v3-color-stroke-field-focused)";
var control = "var(--seed-v3-color-stroke-control)";
var neutralMuted3 = "var(--seed-v3-color-stroke-neutral-muted)";
var danger2 = "var(--seed-v3-color-stroke-danger)";
var positive2 = "var(--seed-v3-color-stroke-positive)";

// src/color/palette.vars.ts
var palette_vars_exports = {};
__export(palette_vars_exports, {
  blue100: () => blue100,
  blue1000: () => blue1000,
  blue200: () => blue200,
  blue300: () => blue300,
  blue400: () => blue400,
  blue500: () => blue500,
  blue600: () => blue600,
  blue700: () => blue700,
  blue800: () => blue800,
  blue900: () => blue900,
  carrot100: () => carrot100,
  carrot1000: () => carrot1000,
  carrot200: () => carrot200,
  carrot300: () => carrot300,
  carrot400: () => carrot400,
  carrot500: () => carrot500,
  carrot600: () => carrot600,
  carrot700: () => carrot700,
  carrot800: () => carrot800,
  carrot900: () => carrot900,
  gray00: () => gray00,
  gray100: () => gray100,
  gray200: () => gray200,
  gray300: () => gray300,
  gray400: () => gray400,
  gray500: () => gray500,
  gray600: () => gray600,
  gray700: () => gray700,
  gray800: () => gray800,
  gray900: () => gray900,
  green100: () => green100,
  green1000: () => green1000,
  green200: () => green200,
  green300: () => green300,
  green400: () => green400,
  green500: () => green500,
  green600: () => green600,
  green700: () => green700,
  green800: () => green800,
  green900: () => green900,
  purple100: () => purple100,
  purple1000: () => purple1000,
  purple200: () => purple200,
  purple300: () => purple300,
  purple400: () => purple400,
  purple500: () => purple500,
  purple600: () => purple600,
  purple700: () => purple700,
  purple800: () => purple800,
  purple900: () => purple900,
  red100: () => red100,
  red1000: () => red1000,
  red200: () => red200,
  red300: () => red300,
  red400: () => red400,
  red500: () => red500,
  red600: () => red600,
  red700: () => red700,
  red800: () => red800,
  red900: () => red900,
  slate800: () => slate800,
  slate900: () => slate900,
  staticBlack: () => staticBlack2,
  staticBlackAlpha200: () => staticBlackAlpha200,
  staticBlackAlpha50: () => staticBlackAlpha50,
  staticBlackAlpha500: () => staticBlackAlpha500,
  staticWhite: () => staticWhite3,
  staticWhiteAlpha800: () => staticWhiteAlpha800,
  yellow100: () => yellow100,
  yellow1000: () => yellow1000,
  yellow200: () => yellow200,
  yellow300: () => yellow300,
  yellow400: () => yellow400,
  yellow500: () => yellow500,
  yellow600: () => yellow600,
  yellow700: () => yellow700,
  yellow800: () => yellow800,
  yellow900: () => yellow900
});
var gray00 = "var(--seed-v3-color-palette-gray-00)";
var gray100 = "var(--seed-v3-color-palette-gray-100)";
var gray200 = "var(--seed-v3-color-palette-gray-200)";
var gray300 = "var(--seed-v3-color-palette-gray-300)";
var gray400 = "var(--seed-v3-color-palette-gray-400)";
var gray500 = "var(--seed-v3-color-palette-gray-500)";
var gray600 = "var(--seed-v3-color-palette-gray-600)";
var gray700 = "var(--seed-v3-color-palette-gray-700)";
var gray800 = "var(--seed-v3-color-palette-gray-800)";
var gray900 = "var(--seed-v3-color-palette-gray-900)";
var carrot100 = "var(--seed-v3-color-palette-carrot-100)";
var carrot200 = "var(--seed-v3-color-palette-carrot-200)";
var carrot300 = "var(--seed-v3-color-palette-carrot-300)";
var carrot400 = "var(--seed-v3-color-palette-carrot-400)";
var carrot500 = "var(--seed-v3-color-palette-carrot-500)";
var carrot600 = "var(--seed-v3-color-palette-carrot-600)";
var carrot700 = "var(--seed-v3-color-palette-carrot-700)";
var carrot800 = "var(--seed-v3-color-palette-carrot-800)";
var carrot900 = "var(--seed-v3-color-palette-carrot-900)";
var carrot1000 = "var(--seed-v3-color-palette-carrot-1000)";
var blue100 = "var(--seed-v3-color-palette-blue-100)";
var blue200 = "var(--seed-v3-color-palette-blue-200)";
var blue300 = "var(--seed-v3-color-palette-blue-300)";
var blue400 = "var(--seed-v3-color-palette-blue-400)";
var blue500 = "var(--seed-v3-color-palette-blue-500)";
var blue600 = "var(--seed-v3-color-palette-blue-600)";
var blue700 = "var(--seed-v3-color-palette-blue-700)";
var blue800 = "var(--seed-v3-color-palette-blue-800)";
var blue900 = "var(--seed-v3-color-palette-blue-900)";
var blue1000 = "var(--seed-v3-color-palette-blue-1000)";
var red100 = "var(--seed-v3-color-palette-red-100)";
var red200 = "var(--seed-v3-color-palette-red-200)";
var red300 = "var(--seed-v3-color-palette-red-300)";
var red400 = "var(--seed-v3-color-palette-red-400)";
var red500 = "var(--seed-v3-color-palette-red-500)";
var red600 = "var(--seed-v3-color-palette-red-600)";
var red700 = "var(--seed-v3-color-palette-red-700)";
var red800 = "var(--seed-v3-color-palette-red-800)";
var red900 = "var(--seed-v3-color-palette-red-900)";
var red1000 = "var(--seed-v3-color-palette-red-1000)";
var green100 = "var(--seed-v3-color-palette-green-100)";
var green200 = "var(--seed-v3-color-palette-green-200)";
var green300 = "var(--seed-v3-color-palette-green-300)";
var green400 = "var(--seed-v3-color-palette-green-400)";
var green500 = "var(--seed-v3-color-palette-green-500)";
var green600 = "var(--seed-v3-color-palette-green-600)";
var green700 = "var(--seed-v3-color-palette-green-700)";
var green800 = "var(--seed-v3-color-palette-green-800)";
var green900 = "var(--seed-v3-color-palette-green-900)";
var green1000 = "var(--seed-v3-color-palette-green-1000)";
var yellow100 = "var(--seed-v3-color-palette-yellow-100)";
var yellow200 = "var(--seed-v3-color-palette-yellow-200)";
var yellow300 = "var(--seed-v3-color-palette-yellow-300)";
var yellow400 = "var(--seed-v3-color-palette-yellow-400)";
var yellow500 = "var(--seed-v3-color-palette-yellow-500)";
var yellow600 = "var(--seed-v3-color-palette-yellow-600)";
var yellow700 = "var(--seed-v3-color-palette-yellow-700)";
var yellow800 = "var(--seed-v3-color-palette-yellow-800)";
var yellow900 = "var(--seed-v3-color-palette-yellow-900)";
var yellow1000 = "var(--seed-v3-color-palette-yellow-1000)";
var staticBlack2 = "var(--seed-v3-color-palette-static-black)";
var staticWhite3 = "var(--seed-v3-color-palette-static-white)";
var staticBlackAlpha200 = "var(--seed-v3-color-palette-static-black-alpha-200)";
var staticBlackAlpha500 = "var(--seed-v3-color-palette-static-black-alpha-500)";
var staticBlackAlpha50 = "var(--seed-v3-color-palette-static-black-alpha-50)";
var purple100 = "var(--seed-v3-color-palette-purple-100)";
var purple200 = "var(--seed-v3-color-palette-purple-200)";
var purple300 = "var(--seed-v3-color-palette-purple-300)";
var purple400 = "var(--seed-v3-color-palette-purple-400)";
var purple500 = "var(--seed-v3-color-palette-purple-500)";
var purple600 = "var(--seed-v3-color-palette-purple-600)";
var purple700 = "var(--seed-v3-color-palette-purple-700)";
var purple800 = "var(--seed-v3-color-palette-purple-800)";
var purple900 = "var(--seed-v3-color-palette-purple-900)";
var purple1000 = "var(--seed-v3-color-palette-purple-1000)";
var staticWhiteAlpha800 = "var(--seed-v3-color-palette-static-white-alpha-800)";
var slate900 = "var(--seed-v3-color-palette-slate-900)";
var slate800 = "var(--seed-v3-color-palette-slate-800)";

// src/component/index.ts
var component_exports = {};
__export(component_exports, {
  actionButton: () => vars,
  actionChip: () => vars2,
  avatar: () => vars3,
  badge: () => vars4,
  callout: () => vars5,
  checkbox: () => vars6,
  chipTab: () => vars7,
  chipTablist: () => vars8,
  controlChip: () => vars9,
  dialog: () => vars10,
  expandButton: () => vars11,
  fab: () => vars12,
  helpBubble: () => vars13,
  inlineBanner: () => vars14,
  progressCircle: () => vars15,
  radio: () => vars16,
  segmentedControl: () => vars18,
  selectBox: () => vars17,
  switch: () => vars19,
  tab: () => vars20,
  tablist: () => vars21,
  textButton: () => vars22
});

// src/component/action-button.vars.ts
var vars = {
  "base": {
    "enabled": {
      "label": {
        "fontWeight": "var(--seed-v3-font-weight-bold)"
      }
    }
  },
  "variantBrandSolid": {
    "enabled": {
      "root": {
        "color": "var(--seed-v3-color-bg-brand-solid)"
      },
      "label": {
        "color": "var(--seed-v3-color-fg-static-white)"
      },
      "icon": {
        "color": "var(--seed-v3-color-fg-static-white)"
      },
      "prefixIcon": {
        "color": "var(--seed-v3-color-fg-static-white)"
      },
      "suffixIcon": {
        "color": "var(--seed-v3-color-fg-static-white)"
      }
    },
    "pressed": {
      "root": {
        "color": "var(--seed-v3-color-bg-brand-solid-pressed)"
      }
    },
    "disabled": {
      "root": {
        "color": "var(--seed-v3-color-bg-disabled)"
      }
    },
    "loading": {
      "root": {
        "color": "var(--seed-v3-color-bg-brand-solid-pressed)"
      }
    }
  },
  "variantBrandWeak": {
    "enabled": {
      "root": {
        "color": "var(--seed-v3-color-bg-brand-weak)"
      },
      "label": {
        "color": "var(--seed-v3-color-fg-brand)"
      },
      "icon": {
        "color": "var(--seed-v3-color-fg-brand)"
      },
      "prefixIcon": {
        "color": "var(--seed-v3-color-fg-brand)"
      },
      "suffixIcon": {
        "color": "var(--seed-v3-color-fg-brand)"
      }
    },
    "pressed": {
      "root": {
        "color": "var(--seed-v3-color-bg-brand-weak-pressed)"
      }
    },
    "disabled": {
      "root": {
        "color": "var(--seed-v3-color-bg-disabled)"
      }
    },
    "loading": {
      "root": {
        "color": "var(--seed-v3-color-bg-brand-weak-pressed)"
      }
    }
  },
  "variantNeutralSolid": {
    "enabled": {
      "root": {
        "color": "var(--seed-v3-color-bg-neutral-solid)"
      },
      "label": {
        "color": "var(--seed-v3-color-fg-neutral-inverted)"
      },
      "icon": {
        "color": "var(--seed-v3-color-fg-neutral-inverted)"
      },
      "prefixIcon": {
        "color": "var(--seed-v3-color-fg-neutral-inverted)"
      },
      "suffixIcon": {
        "color": "var(--seed-v3-color-fg-neutral-inverted)"
      }
    },
    "pressed": {
      "root": {
        "color": "var(--seed-v3-color-bg-neutral-solid-pressed)"
      }
    },
    "disabled": {
      "root": {
        "color": "var(--seed-v3-color-bg-disabled)"
      }
    },
    "loading": {
      "root": {
        "color": "var(--seed-v3-color-bg-neutral-solid-pressed)"
      }
    }
  },
  "variantNeutralWeak": {
    "enabled": {
      "root": {
        "color": "var(--seed-v3-color-bg-neutral-weak)"
      },
      "label": {
        "color": "var(--seed-v3-color-fg-neutral)"
      },
      "icon": {
        "color": "var(--seed-v3-color-fg-neutral)"
      },
      "prefixIcon": {
        "color": "var(--seed-v3-color-fg-neutral)"
      },
      "suffixIcon": {
        "color": "var(--seed-v3-color-fg-neutral)"
      }
    },
    "pressed": {
      "root": {
        "color": "var(--seed-v3-color-bg-neutral-weak-pressed)"
      }
    },
    "disabled": {
      "root": {
        "color": "var(--seed-v3-color-bg-disabled)"
      }
    },
    "loading": {
      "root": {
        "color": "var(--seed-v3-color-bg-neutral-weak-pressed)"
      }
    }
  },
  "variantDangerSolid": {
    "enabled": {
      "root": {
        "color": "var(--seed-v3-color-bg-danger-solid)"
      },
      "label": {
        "color": "var(--seed-v3-color-fg-static-white)"
      },
      "icon": {
        "color": "var(--seed-v3-color-fg-static-white)"
      },
      "prefixIcon": {
        "color": "var(--seed-v3-color-fg-static-white)"
      },
      "suffixIcon": {
        "color": "var(--seed-v3-color-fg-static-white)"
      }
    },
    "pressed": {
      "root": {
        "color": "var(--seed-v3-color-bg-danger-solid-pressed)"
      }
    },
    "disabled": {
      "root": {
        "color": "var(--seed-v3-color-bg-disabled)"
      }
    },
    "loading": {
      "root": {
        "color": "var(--seed-v3-color-bg-danger-solid-pressed)"
      }
    }
  },
  "sizeXsmall": {
    "enabled": {
      "root": {
        "minHeight": "var(--seed-v3-unit-x8)",
        "cornerRadius": "var(--seed-v3-radius-full)"
      }
    }
  },
  "sizeXsmallLayoutWithText": {
    "enabled": {
      "root": {
        "gap": "var(--seed-v3-unit-x1)",
        "paddingX": "var(--seed-v3-unit-x3_5)",
        "paddingY": "var(--seed-v3-unit-x1_5)"
      },
      "prefixIcon": {
        "size": "var(--seed-v3-unit-x3_5)"
      },
      "suffixIcon": {
        "size": "var(--seed-v3-unit-x3_5)"
      },
      "label": {
        "fontSize": "var(--seed-v3-font-size-t4)"
      }
    }
  },
  "sizeXsmallLayoutIconOnly": {
    "enabled": {
      "root": {
        "minWidth": "var(--seed-v3-unit-x8)",
        "paddingX": "var(--seed-v3-unit-x1_5)",
        "paddingY": "var(--seed-v3-unit-x1_5)"
      },
      "icon": {
        "size": "var(--seed-v3-unit-x3_5)"
      }
    }
  },
  "sizeSmall": {
    "enabled": {
      "root": {
        "minHeight": "var(--seed-v3-unit-x9)",
        "cornerRadius": "var(--seed-v3-radius-x2)"
      }
    }
  },
  "sizeSmallLayoutWithText": {
    "enabled": {
      "root": {
        "gap": "var(--seed-v3-unit-x1)",
        "paddingX": "var(--seed-v3-unit-x3_5)",
        "paddingY": "var(--seed-v3-unit-x2)"
      },
      "prefixIcon": {
        "size": "var(--seed-v3-unit-x3_5)"
      },
      "suffixIcon": {
        "size": "var(--seed-v3-unit-x3_5)"
      },
      "label": {
        "fontSize": "var(--seed-v3-font-size-t4)"
      }
    }
  },
  "sizeSmallLayoutIconOnly": {
    "enabled": {
      "root": {
        "minWidth": "var(--seed-v3-unit-x9)",
        "paddingX": "var(--seed-v3-unit-x2)",
        "paddingY": "var(--seed-v3-unit-x2)"
      },
      "icon": {
        "size": "var(--seed-v3-unit-x4)"
      }
    }
  },
  "sizeMedium": {
    "enabled": {
      "root": {
        "minHeight": "var(--seed-v3-unit-x10)",
        "cornerRadius": "var(--seed-v3-radius-x2)"
      }
    }
  },
  "sizeMediumLayoutWithText": {
    "enabled": {
      "root": {
        "gap": "var(--seed-v3-unit-x1)",
        "paddingX": "var(--seed-v3-unit-x4)",
        "paddingY": "var(--seed-v3-unit-x2_5)"
      },
      "prefixIcon": {
        "size": "var(--seed-v3-unit-x4)"
      },
      "suffixIcon": {
        "size": "var(--seed-v3-unit-x4)"
      },
      "label": {
        "fontSize": "var(--seed-v3-font-size-t4)"
      }
    }
  },
  "sizeMediumLayoutIconOnly": {
    "enabled": {
      "root": {
        "minWidth": "var(--seed-v3-unit-x10)",
        "paddingX": "var(--seed-v3-unit-x2_5)",
        "paddingY": "var(--seed-v3-unit-x2_5)"
      },
      "icon": {
        "size": "18px"
      }
    }
  },
  "sizeLarge": {
    "enabled": {
      "root": {
        "minHeight": "var(--seed-v3-unit-x13)",
        "cornerRadius": "var(--seed-v3-radius-x3)"
      }
    }
  },
  "sizeLargeLayoutWithText": {
    "enabled": {
      "root": {
        "gap": "var(--seed-v3-unit-x2)",
        "paddingX": "var(--seed-v3-unit-x5)",
        "paddingY": "var(--seed-v3-unit-x3_5)"
      },
      "prefixIcon": {
        "size": "22px"
      },
      "suffixIcon": {
        "size": "22px"
      },
      "label": {
        "fontSize": "var(--seed-v3-font-size-t6)"
      }
    }
  },
  "sizeLargeLayoutIconOnly": {
    "enabled": {
      "root": {
        "minWidth": "var(--seed-v3-unit-x13)",
        "paddingX": "var(--seed-v3-unit-x3_5)",
        "paddingY": "var(--seed-v3-unit-x3_5)"
      },
      "icon": {
        "size": "22px"
      }
    }
  }
};

// src/component/action-chip.vars.ts
var vars2 = {
  "base": {
    "enabled": {
      "root": {
        "color": "var(--seed-v3-color-bg-neutral-weak)",
        "cornerRadius": "var(--seed-v3-radius-full)"
      },
      "label": {
        "color": "var(--seed-v3-color-fg-neutral)",
        "fontWeight": "var(--seed-v3-font-weight-medium)"
      },
      "prefixIcon": {
        "color": "var(--seed-v3-color-fg-neutral)"
      },
      "suffixIcon": {
        "color": "var(--seed-v3-color-fg-neutral)"
      },
      "count": {
        "color": "var(--seed-v3-color-fg-neutral-muted)"
      }
    },
    "pressed": {
      "root": {
        "color": "var(--seed-v3-color-bg-neutral-weak-pressed)"
      }
    },
    "disabled": {
      "root": {
        "color": "var(--seed-v3-color-bg-disabled)"
      },
      "label": {
        "color": "var(--seed-v3-color-fg-disabled)"
      },
      "prefixIcon": {
        "color": "var(--seed-v3-color-fg-disabled)"
      },
      "suffixIcon": {
        "color": "var(--seed-v3-color-fg-disabled)"
      },
      "count": {
        "color": "var(--seed-v3-color-fg-disabled)"
      }
    }
  },
  "sizeSmall": {
    "enabled": {
      "root": {
        "minHeight": "var(--seed-v3-unit-x8)",
        "paddingY": "var(--seed-v3-unit-x1_5)",
        "gap": "var(--seed-v3-unit-x1)"
      },
      "label": {
        "fontSize": "var(--seed-v3-font-size-t4)"
      },
      "prefixIcon": {
        "size": "var(--seed-v3-unit-x4)"
      },
      "suffixIcon": {
        "size": "var(--seed-v3-unit-x3_5)"
      }
    }
  },
  "sizeMedium": {
    "enabled": {
      "root": {
        "minHeight": "var(--seed-v3-unit-x9)",
        "paddingY": "var(--seed-v3-unit-x2)",
        "gap": "var(--seed-v3-unit-x1)"
      },
      "label": {
        "fontSize": "var(--seed-v3-font-size-t4)"
      },
      "prefixIcon": {
        "size": "var(--seed-v3-unit-x4)"
      },
      "suffixIcon": {
        "size": "var(--seed-v3-unit-x3_5)"
      }
    }
  },
  "sizeSmallLayoutWithText": {
    "enabled": {
      "root": {
        "paddingX": "var(--seed-v3-unit-x3)"
      }
    }
  },
  "sizeSmallLayoutIconOnly": {
    "enabled": {
      "root": {
        "minWidth": "var(--seed-v3-unit-x8)"
      },
      "icon": {
        "size": "var(--seed-v3-unit-x4)"
      }
    }
  },
  "sizeMediumLayoutWithText": {
    "enabled": {
      "root": {
        "paddingX": "var(--seed-v3-unit-x3_5)"
      }
    }
  },
  "sizeMediumLayoutIconOnly": {
    "enabled": {
      "root": {
        "minWidth": "var(--seed-v3-unit-x9)"
      },
      "icon": {
        "size": "var(--seed-v3-unit-x4)"
      }
    }
  }
};

// src/component/avatar.vars.ts
var vars3 = {
  "base": {
    "enabled": {
      "root": {
        "cornerRadius": "var(--seed-v3-radius-full)"
      },
      "badge": {
        "cornerRadius": "var(--seed-v3-radius-full)",
        "color": "var(--seed-v3-color-bg-layer-default)"
      }
    }
  },
  "size20": {
    "enabled": {
      "root": {
        "size": "var(--seed-v3-unit-x5)"
      },
      "badge": {
        "size": "var(--seed-v3-unit-x2_5)"
      }
    }
  },
  "size24": {
    "enabled": {
      "root": {
        "size": "var(--seed-v3-unit-x6)"
      },
      "badge": {
        "size": "var(--seed-v3-unit-x3)"
      }
    }
  },
  "size36": {
    "enabled": {
      "root": {
        "size": "var(--seed-v3-unit-x9)"
      },
      "badge": {
        "size": "var(--seed-v3-unit-x4)"
      }
    }
  },
  "size48": {
    "enabled": {
      "root": {
        "size": "var(--seed-v3-unit-x12)"
      },
      "badge": {
        "size": "var(--seed-v3-unit-x6)"
      }
    }
  },
  "size64": {
    "enabled": {
      "root": {
        "size": "var(--seed-v3-unit-x16)"
      },
      "badge": {
        "size": "var(--seed-v3-unit-x6)"
      }
    }
  },
  "size80": {
    "enabled": {
      "root": {
        "size": "80px"
      },
      "badge": {
        "size": "var(--seed-v3-unit-x6)"
      }
    }
  },
  "size96": {
    "enabled": {
      "root": {
        "size": "96px"
      },
      "badge": {
        "size": "var(--seed-v3-unit-x8)"
      }
    }
  }
};

// src/component/badge.vars.ts
var vars4 = {
  "sizeMedium": {
    "enabled": {
      "root": {
        "minHeight": "var(--seed-v3-unit-x5)",
        "paddingX": "var(--seed-v3-unit-x2)",
        "paddingY": "var(--seed-v3-unit-x1)",
        "fontSize": "var(--seed-v3-font-size-t2)"
      }
    }
  },
  "sizeSmall": {
    "enabled": {
      "root": {
        "minHeight": "var(--seed-v3-unit-x4)",
        "paddingX": "var(--seed-v3-unit-x1_5)",
        "paddingY": "var(--seed-v3-unit-x0_5)",
        "fontSize": "var(--seed-v3-font-size-t1)"
      }
    }
  },
  "shapePill": {
    "enabled": {
      "root": {
        "borderRadius": "var(--seed-v3-radius-full)"
      }
    }
  },
  "shapeRectangleSizeMedium": {
    "enabled": {
      "root": {
        "borderRadius": "var(--seed-v3-radius-x1)"
      }
    }
  },
  "shapeRectangleSizeSmall": {
    "enabled": {
      "root": {
        "borderRadius": "var(--seed-v3-radius-x0_5)"
      }
    }
  },
  "variantSoft": {
    "enabled": {
      "label": {
        "fontWeight": "var(--seed-v3-font-weight-medium)"
      }
    }
  },
  "variantSolid": {
    "enabled": {
      "label": {
        "fontWeight": "var(--seed-v3-font-weight-bold)"
      }
    }
  },
  "variantOutlined": {
    "enabled": {
      "root": {
        "borderWidth": "1px"
      },
      "label": {
        "fontWeight": "var(--seed-v3-font-weight-bold)"
      }
    }
  },
  "toneNeutralVariantSoft": {
    "enabled": {
      "root": {
        "color": "var(--seed-v3-color-bg-neutral-weak)"
      },
      "label": {
        "color": "var(--seed-v3-color-fg-neutral)"
      }
    }
  },
  "toneNeutralVariantSolid": {
    "enabled": {
      "root": {
        "color": "var(--seed-v3-color-bg-neutral-solid)"
      },
      "label": {
        "color": "var(--seed-v3-color-fg-static-white)"
      }
    }
  },
  "toneNeutralVariantOutlined": {
    "enabled": {
      "root": {
        "strokeColor": "var(--seed-v3-color-stroke-neutral)"
      },
      "label": {
        "color": "var(--seed-v3-color-fg-neutral)"
      }
    }
  },
  "toneBrandVariantSoft": {
    "enabled": {
      "root": {
        "color": "var(--seed-v3-color-bg-brand-weak)"
      },
      "label": {
        "color": "var(--seed-v3-color-fg-brand)"
      }
    }
  },
  "toneBrandVariantSolid": {
    "enabled": {
      "root": {
        "color": "var(--seed-v3-color-bg-brand-solid)"
      },
      "label": {
        "color": "var(--seed-v3-color-fg-static-white)"
      }
    }
  },
  "toneBrandVariantOutlined": {
    "enabled": {
      "root": {
        "strokeColor": "var(--seed-v3-color-stroke-brand)"
      },
      "label": {
        "color": "var(--seed-v3-color-fg-brand)"
      }
    }
  },
  "toneInformativeVariantSoft": {
    "enabled": {
      "root": {
        "color": "var(--seed-v3-color-bg-informative-weak)"
      },
      "label": {
        "color": "var(--seed-v3-color-fg-informative)"
      }
    }
  },
  "toneInformativeVariantSolid": {
    "enabled": {
      "root": {
        "color": "var(--seed-v3-color-bg-informative-solid)"
      },
      "label": {
        "color": "var(--seed-v3-color-fg-static-white)"
      }
    }
  },
  "toneInformativeVariantOutlined": {
    "enabled": {
      "root": {
        "strokeColor": "var(--seed-v3-color-fg-informative)"
      },
      "label": {
        "color": "var(--seed-v3-color-fg-informative)"
      }
    }
  },
  "tonePositiveVariantSoft": {
    "enabled": {
      "root": {
        "color": "var(--seed-v3-color-bg-positive-weak)"
      },
      "label": {
        "color": "var(--seed-v3-color-fg-positive)"
      }
    }
  },
  "tonePositiveVariantSolid": {
    "enabled": {
      "root": {
        "color": "var(--seed-v3-color-bg-positive-solid)"
      },
      "label": {
        "color": "var(--seed-v3-color-fg-static-white)"
      }
    }
  },
  "tonePositiveVariantOutlined": {
    "enabled": {
      "root": {
        "strokeColor": "var(--seed-v3-color-stroke-positive)"
      },
      "label": {
        "color": "var(--seed-v3-color-fg-positive)"
      }
    }
  },
  "toneDangerVariantSoft": {
    "enabled": {
      "root": {
        "color": "var(--seed-v3-color-bg-danger-weak)"
      },
      "label": {
        "color": "var(--seed-v3-color-fg-danger)"
      }
    }
  },
  "toneDangerVariantSolid": {
    "enabled": {
      "root": {
        "color": "var(--seed-v3-color-bg-danger-solid)"
      },
      "label": {
        "color": "var(--seed-v3-color-fg-static-white)"
      }
    }
  },
  "toneDangerVariantOutlined": {
    "enabled": {
      "root": {
        "strokeColor": "var(--seed-v3-color-stroke-danger)"
      },
      "label": {
        "color": "var(--seed-v3-color-fg-danger)"
      }
    }
  }
};

// src/component/callout.vars.ts
var vars5 = {
  "base": {
    "enabled": {
      "root": {
        "paddingXStart": "var(--seed-v3-unit-x3_5)",
        "paddingXEnd": "var(--seed-v3-unit-x0_5)",
        "paddingY": "5px",
        "cornerRadius": "var(--seed-v3-radius-x2_5)"
      },
      "content": {
        "gap": "var(--seed-v3-unit-x3)",
        "paddingY": "9.5px",
        "fontSize": "var(--seed-v3-font-size-t4)",
        "lineHeight": "var(--seed-v3-line-height-t5)"
      },
      "icon": {
        "size": "var(--seed-v3-unit-x4)"
      },
      "title": {
        "fontWeight": "var(--seed-v3-font-weight-bold)"
      },
      "label": {
        "fontWeight": "var(--seed-v3-font-weight-regular)"
      },
      "dismissButton": {
        "size": "var(--seed-v3-unit-x10)"
      },
      "dismissIcon": {
        "size": "var(--seed-v3-unit-x4)"
      },
      "actionableIcon": {
        "size": "var(--seed-v3-unit-x4)",
        "margin": "var(--seed-v3-unit-x3)"
      }
    }
  },
  "typeContentOnly": {
    "enabled": {
      "content": {
        "paddingXEnd": "var(--seed-v3-unit-x3)"
      }
    }
  },
  "variantNeutral": {
    "enabled": {
      "root": {
        "color": "var(--seed-v3-color-bg-neutral-weak)"
      },
      "icon": {
        "color": "var(--seed-v3-color-fg-neutral)"
      },
      "title": {
        "color": "var(--seed-v3-color-fg-neutral)"
      },
      "label": {
        "color": "var(--seed-v3-color-fg-neutral)"
      },
      "linkLabel": {
        "color": "var(--seed-v3-color-fg-neutral)"
      },
      "dismissIcon": {
        "color": "var(--seed-v3-color-fg-neutral)"
      },
      "actionableIcon": {
        "color": "var(--seed-v3-color-fg-neutral)"
      }
    },
    "pressed": {
      "root": {
        "color": "var(--seed-v3-color-bg-neutral-weak-pressed)"
      }
    }
  },
  "variantInformative": {
    "enabled": {
      "root": {
        "color": "var(--seed-v3-color-bg-informative-weak)"
      },
      "icon": {
        "color": "var(--seed-v3-color-fg-informative-contrast)"
      },
      "title": {
        "color": "var(--seed-v3-color-fg-informative-contrast)"
      },
      "label": {
        "color": "var(--seed-v3-color-fg-informative-contrast)"
      },
      "linkLabel": {
        "color": "var(--seed-v3-color-fg-informative-contrast)"
      },
      "dismissIcon": {
        "color": "var(--seed-v3-color-fg-informative-contrast)"
      },
      "actionableIcon": {
        "color": "var(--seed-v3-color-fg-informative-contrast)"
      }
    },
    "pressed": {
      "root": {
        "color": "var(--seed-v3-color-bg-informative-weak-pressed)"
      }
    }
  },
  "variantWarning": {
    "enabled": {
      "root": {
        "color": "var(--seed-v3-color-bg-warning-weak)"
      },
      "icon": {
        "color": "var(--seed-v3-color-fg-warning-contrast)"
      },
      "title": {
        "color": "var(--seed-v3-color-fg-warning-contrast)"
      },
      "label": {
        "color": "var(--seed-v3-color-fg-warning-contrast)"
      },
      "linkLabel": {
        "color": "var(--seed-v3-color-fg-warning-contrast)"
      },
      "dismissIcon": {
        "color": "var(--seed-v3-color-fg-warning-contrast)"
      },
      "actionableIcon": {
        "color": "var(--seed-v3-color-fg-warning-contrast)"
      }
    },
    "pressed": {
      "root": {
        "color": "var(--seed-v3-color-bg-warning-weak-pressed)"
      }
    }
  },
  "variantDanger": {
    "enabled": {
      "root": {
        "color": "var(--seed-v3-color-bg-danger-weak)"
      },
      "icon": {
        "color": "var(--seed-v3-color-fg-danger-contrast)"
      },
      "title": {
        "color": "var(--seed-v3-color-fg-danger-contrast)"
      },
      "label": {
        "color": "var(--seed-v3-color-fg-danger-contrast)"
      },
      "linkLabel": {
        "color": "var(--seed-v3-color-fg-danger-contrast)"
      },
      "dismissIcon": {
        "color": "var(--seed-v3-color-fg-danger-contrast)"
      },
      "actionableIcon": {
        "color": "var(--seed-v3-color-fg-danger-contrast)"
      }
    },
    "pressed": {
      "root": {
        "color": "var(--seed-v3-color-bg-danger-weak-pressed)"
      }
    }
  },
  "variantMagic": {
    "enabled": {
      "root": {
        "color": "var(--seed-v3-color-bg-magic-weak)"
      },
      "icon": {
        "color": "var(--seed-v3-color-fg-magic-contrast)"
      },
      "title": {
        "color": "var(--seed-v3-color-fg-magic-contrast)"
      },
      "label": {
        "color": "var(--seed-v3-color-fg-magic-contrast)"
      },
      "linkLabel": {
        "color": "var(--seed-v3-color-fg-magic-contrast)"
      },
      "dismissIcon": {
        "color": "var(--seed-v3-color-fg-magic-contrast)"
      },
      "actionableIcon": {
        "color": "var(--seed-v3-color-fg-magic-contrast)"
      }
    },
    "pressed": {
      "root": {
        "color": "var(--seed-v3-color-bg-magic-weak-pressed)"
      }
    }
  }
};

// src/component/checkbox.vars.ts
var vars6 = {
  "base": {
    "enabled": {
      "label": {
        "color": "var(--seed-v3-color-fg-neutral)",
        "lineHeight": "var(--seed-v3-line-height-t5)"
      },
      "root": {
        "gap": "var(--seed-v3-unit-x2)"
      }
    },
    "bold": {
      "label": {
        "fontWeight": "var(--seed-v3-font-weight-bold)"
      }
    }
  },
  "variantSquare": {
    "enabled": {
      "control": {
        "strokeColor": "var(--seed-v3-color-stroke-control)",
        "strokeWidth": "1.25px"
      }
    },
    "enabledSelected": {
      "control": {
        "color": "var(--seed-v3-color-bg-brand-solid)"
      },
      "icon": {
        "color": "var(--seed-v3-color-fg-static-white)"
      }
    },
    "pressed": {
      "control": {
        "color": "var(--seed-v3-color-bg-layer-default-pressed)"
      }
    },
    "pressedSelected": {
      "control": {
        "color": "var(--seed-v3-color-bg-brand-solid-pressed)"
      },
      "icon": {
        "color": "var(--seed-v3-color-fg-static-white)"
      }
    },
    "disabled": {
      "control": {
        "color": "var(--seed-v3-color-bg-disabled)",
        "strokeColor": "var(--seed-v3-color-stroke-neutral)"
      },
      "label": {
        "color": "var(--seed-v3-color-fg-disabled)"
      },
      "icon": {
        "color": "var(--seed-v3-color-fg-disabled)"
      }
    },
    "disabledSelected": {
      "label": {
        "color": "var(--seed-v3-color-fg-disabled)"
      },
      "icon": {
        "color": "var(--seed-v3-color-fg-disabled)"
      }
    }
  },
  "variantGhost": {
    "enabled": {
      "icon": {
        "color": "var(--seed-v3-color-fg-placeholder)"
      }
    },
    "enabledSelected": {
      "icon": {
        "color": "var(--seed-v3-color-fg-brand)"
      }
    },
    "pressed": {
      "control": {
        "color": "var(--seed-v3-color-bg-layer-default-pressed)"
      }
    },
    "pressedSelected": {
      "control": {
        "color": "var(--seed-v3-color-bg-brand-weak-pressed)"
      }
    },
    "disabled": {
      "label": {
        "color": "var(--seed-v3-color-fg-disabled)"
      },
      "icon": {
        "color": "var(--seed-v3-color-fg-disabled)"
      }
    },
    "disabledSelected": {
      "label": {
        "color": "var(--seed-v3-color-fg-disabled)"
      },
      "icon": {
        "color": "var(--seed-v3-color-fg-disabled)"
      }
    }
  },
  "sizeSmall": {
    "enabled": {
      "root": {
        "minHeight": "var(--seed-v3-unit-x8)"
      },
      "label": {
        "fontSize": "var(--seed-v3-font-size-t3)",
        "lineHeight": "var(--seed-v3-line-height-t3)"
      },
      "control": {
        "size": "var(--seed-v3-unit-x4)",
        "cornerRadius": "var(--seed-v3-radius-x1)"
      }
    }
  },
  "sizeMedium": {
    "enabled": {
      "root": {
        "minHeight": "var(--seed-v3-unit-x8)"
      },
      "label": {
        "fontSize": "var(--seed-v3-font-size-t4)",
        "lineHeight": "var(--seed-v3-line-height-t4)"
      },
      "control": {
        "size": "var(--seed-v3-unit-x5)",
        "cornerRadius": "var(--seed-v3-radius-x1)"
      }
    }
  },
  "sizeLarge": {
    "enabled": {
      "root": {
        "minHeight": "var(--seed-v3-unit-x9)"
      },
      "label": {
        "fontSize": "var(--seed-v3-font-size-t5)",
        "lineHeight": "var(--seed-v3-line-height-t5)"
      },
      "control": {
        "size": "var(--seed-v3-unit-x6)",
        "cornerRadius": "var(--seed-v3-radius-x1_5)"
      }
    }
  },
  "variantGhostSizeSmall": {
    "enabled": {
      "icon": {
        "size": "13.5px"
      }
    }
  },
  "variantGhostSizeMedium": {
    "enabled": {
      "icon": {
        "size": "15px"
      }
    }
  },
  "variantGhostSizeLarge": {
    "enabled": {
      "icon": {
        "size": "18px"
      }
    }
  },
  "variantSquareSizeSmall": {
    "enabled": {
      "icon": {
        "size": "10.5px"
      }
    }
  },
  "variantSquareSizeMedium": {
    "enabled": {
      "icon": {
        "size": "11.67px"
      }
    }
  },
  "variantSquareSizeLarge": {
    "enabled": {
      "icon": {
        "size": "14px"
      }
    }
  }
};

// src/component/chip-tab.vars.ts
var vars7 = {
  "base": {
    "enabled": {
      "root": {
        "paddingX": "var(--seed-v3-unit-x3_5)",
        "paddingY": "var(--seed-v3-unit-x2)",
        "cornerRadius": "var(--seed-v3-radius-full)",
        "minHeight": "36px"
      },
      "label": {
        "fontSize": "var(--seed-v3-font-size-t4)",
        "fontWeight": "var(--seed-v3-font-weight-bold)"
      }
    }
  },
  "variantNeutralSolid": {
    "enabled": {
      "label": {
        "color": "var(--seed-v3-color-fg-neutral)",
        "fontWeight": "var(--seed-v3-font-weight-bold)"
      }
    },
    "enabledPressed": {
      "root": {
        "color": "var(--seed-v3-color-bg-layer-default-pressed)"
      }
    },
    "selected": {
      "root": {
        "color": "var(--seed-v3-color-bg-neutral-solid)"
      },
      "label": {
        "color": "var(--seed-v3-color-fg-neutral-inverted)"
      }
    },
    "selectedPressed": {
      "root": {
        "color": "var(--seed-v3-color-bg-neutral-solid-pressed)"
      }
    },
    "disabled": {
      "label": {
        "color": "var(--seed-v3-color-fg-disabled)"
      }
    },
    "selectedDisabled": {
      "root": {
        "color": "var(--seed-v3-color-bg-disabled)"
      },
      "label": {
        "color": "var(--seed-v3-color-fg-disabled)"
      }
    }
  },
  "variantBrandSolid": {
    "enabled": {
      "root": {
        "color": "var(--seed-v3-color-bg-neutral-weak)"
      },
      "label": {
        "color": "var(--seed-v3-color-fg-neutral-muted)",
        "fontWeight": "var(--seed-v3-font-weight-medium)"
      }
    },
    "enabledPressed": {
      "root": {
        "color": "var(--seed-v3-color-bg-neutral-weak-pressed)"
      }
    },
    "selected": {
      "root": {
        "color": "var(--seed-v3-color-bg-brand-solid)"
      },
      "label": {
        "color": "var(--seed-v3-color-fg-static-white)",
        "fontWeight": "var(--seed-v3-font-weight-bold)"
      }
    },
    "selectedPressed": {
      "root": {
        "color": "var(--seed-v3-color-bg-brand-solid-pressed)"
      }
    },
    "disabled": {
      "root": {
        "color": "var(--seed-v3-color-bg-disabled)"
      },
      "label": {
        "color": "var(--seed-v3-color-fg-disabled)"
      }
    },
    "selectedDisabled": {
      "root": {
        "color": "var(--seed-v3-color-bg-disabled)"
      }
    }
  }
};

// src/component/chip-tablist.vars.ts
var vars8 = {
  "base": {
    "enabled": {
      "root": {
        "paddingX": "var(--seed-v3-unit-x4)"
      }
    }
  },
  "variantNeutralSolid": {
    "enabled": {
      "triggerList": {
        "gap": "0px"
      }
    }
  },
  "variantBrandSolid": {
    "enabled": {
      "triggerList": {
        "gap": "8px"
      }
    }
  }
};

// src/component/control-chip.vars.ts
var vars9 = {
  "base": {
    "enabled": {
      "root": {
        "strokeColor": "var(--seed-v3-color-stroke-neutral)",
        "strokeWidth": "1px",
        "cornerRadius": "var(--seed-v3-radius-full)"
      },
      "label": {
        "color": "var(--seed-v3-color-fg-neutral)",
        "fontWeight": "var(--seed-v3-font-weight-medium)"
      },
      "prefixIcon": {
        "color": "var(--seed-v3-color-fg-neutral)"
      },
      "suffixIcon": {
        "color": "var(--seed-v3-color-fg-neutral)"
      },
      "icon": {
        "color": "var(--seed-v3-color-fg-neutral)"
      },
      "count": {
        "color": "var(--seed-v3-color-fg-neutral-muted)"
      }
    },
    "pressed": {
      "root": {
        "color": "var(--seed-v3-color-bg-layer-default-pressed)"
      }
    },
    "selected": {
      "root": {
        "strokeWidth": "0",
        "color": "var(--seed-v3-color-bg-brand-weak)"
      },
      "label": {
        "color": "var(--seed-v3-color-fg-brand)"
      },
      "prefixIcon": {
        "color": "var(--seed-v3-color-fg-brand)"
      },
      "suffixIcon": {
        "color": "var(--seed-v3-color-fg-brand)"
      },
      "icon": {
        "color": "var(--seed-v3-color-fg-brand)"
      },
      "count": {
        "color": "var(--seed-v3-color-fg-brand)"
      }
    },
    "selectedPressed": {
      "root": {
        "color": "var(--seed-v3-color-bg-brand-weak-pressed)"
      }
    },
    "disabled": {
      "root": {
        "color": "var(--seed-v3-color-bg-disabled)"
      },
      "label": {
        "color": "var(--seed-v3-color-fg-disabled)"
      },
      "prefixIcon": {
        "color": "var(--seed-v3-color-fg-disabled)"
      },
      "suffixIcon": {
        "color": "var(--seed-v3-color-fg-disabled)"
      },
      "icon": {
        "color": "var(--seed-v3-color-fg-disabled)"
      },
      "count": {
        "color": "var(--seed-v3-color-fg-disabled)"
      }
    }
  },
  "sizeSmall": {
    "enabled": {
      "root": {
        "minHeight": "var(--seed-v3-unit-x8)",
        "paddingY": "var(--seed-v3-unit-x1_5)",
        "gap": "var(--seed-v3-unit-x1)"
      },
      "label": {
        "fontSize": "var(--seed-v3-font-size-t4)"
      },
      "prefixIcon": {
        "size": "var(--seed-v3-unit-x4)"
      },
      "suffixIcon": {
        "size": "var(--seed-v3-unit-x3_5)"
      }
    }
  },
  "sizeMedium": {
    "enabled": {
      "root": {
        "minHeight": "var(--seed-v3-unit-x9)",
        "paddingY": "var(--seed-v3-unit-x2)",
        "gap": "var(--seed-v3-unit-x1)"
      },
      "label": {
        "fontSize": "var(--seed-v3-font-size-t4)"
      },
      "prefixIcon": {
        "size": "var(--seed-v3-unit-x4)"
      },
      "suffixIcon": {
        "size": "var(--seed-v3-unit-x3_5)"
      }
    }
  },
  "sizeSmallLayoutWithText": {
    "enabled": {
      "root": {
        "paddingX": "var(--seed-v3-unit-x3)"
      }
    }
  },
  "sizeSmallLayoutIconOnly": {
    "enabled": {
      "root": {
        "minWidth": "var(--seed-v3-unit-x8)"
      },
      "icon": {
        "size": "var(--seed-v3-unit-x4)"
      }
    }
  },
  "sizeMediumLayoutWithText": {
    "enabled": {
      "root": {
        "paddingX": "var(--seed-v3-unit-x3_5)"
      }
    }
  },
  "sizeMediumLayoutIconOnly": {
    "enabled": {
      "root": {
        "minWidth": "var(--seed-v3-unit-x9)"
      },
      "icon": {
        "size": "var(--seed-v3-unit-x4)"
      }
    }
  }
};

// src/component/dialog.vars.ts
var vars10 = {
  "base": {
    "enabled": {
      "backdrop": {
        "background": "var(--seed-v3-color-bg-overlay)"
      },
      "content": {
        "background": "var(--seed-v3-color-bg-layer-default)",
        "borderRadius": "var(--seed-v3-radius-x4)",
        "marginX": "var(--seed-v3-unit-x8)",
        "paddingX": "var(--seed-v3-unit-x5)",
        "paddingY": "var(--seed-v3-unit-x5)",
        "maxWidth": "272px"
      },
      "header": {
        "gap": "var(--seed-v3-unit-x1_5)"
      },
      "footer": {
        "paddingTop": "var(--seed-v3-unit-x4)",
        "gap": "var(--seed-v3-unit-x2)"
      },
      "title": {
        "color": "var(--seed-v3-color-fg-neutral)",
        "fontSize": "var(--seed-v3-font-size-t7)",
        "fontWeight": "var(--seed-v3-font-weight-bold)"
      },
      "description": {
        "color": "var(--seed-v3-color-fg-neutral)",
        "fontSize": "var(--seed-v3-font-size-t5)",
        "fontWeight": "var(--seed-v3-font-weight-regular)"
      }
    }
  }
};

// src/component/expand-button.vars.ts
var vars11 = {
  "base": {
    "enabled": {
      "root": {
        "color": "var(--seed-v3-color-bg-layer-default)",
        "minHeight": "var(--seed-v3-unit-x10)",
        "cornerRadius": "var(--seed-v3-radius-x2)",
        "gap": "var(--seed-v3-unit-x1)",
        "paddingX": "var(--seed-v3-unit-x5)",
        "paddingY": "var(--seed-v3-unit-x2_5)",
        "strokeColor": "var(--seed-v3-color-palette-gray-400)",
        "strokeWidth": "1px"
      },
      "label": {
        "color": "var(--seed-v3-color-fg-neutral)",
        "fontWeight": "var(--seed-v3-font-weight-bold)",
        "fontSize": "var(--seed-v3-font-size-t4)"
      },
      "suffixIcon": {
        "color": "var(--seed-v3-color-fg-neutral)",
        "size": "var(--seed-v3-unit-x3_5)"
      }
    },
    "pressed": {
      "root": {
        "color": "var(--seed-v3-color-bg-layer-default-pressed)"
      }
    },
    "disabled": {
      "root": {
        "color": "var(--seed-v3-color-bg-disabled)"
      },
      "label": {
        "color": "var(--seed-v3-color-fg-disabled)"
      },
      "suffixIcon": {
        "color": "var(--seed-v3-color-fg-disabled)"
      }
    }
  }
};

// src/component/fab.vars.ts
var vars12 = {
  "base": {
    "enabled": {
      "root": {
        "color": "var(--seed-v3-color-bg-layer-floating)",
        "borderRadius": "var(--seed-v3-radius-full)"
      },
      "icon": {
        "color": "var(--seed-v3-color-fg-neutral)"
      }
    },
    "pressed": {
      "root": {
        "color": "var(--seed-v3-color-bg-layer-floating-pressed)"
      }
    }
  },
  "sizeSmall": {
    "enabled": {
      "root": {
        "size": "var(--seed-v3-unit-x10)"
      },
      "icon": {
        "size": "var(--seed-v3-unit-x5)"
      }
    }
  },
  "sizeMedium": {
    "enabled": {
      "root": {
        "size": "var(--seed-v3-unit-x12)"
      },
      "icon": {
        "size": "var(--seed-v3-unit-x6)"
      }
    }
  }
};

// src/component/help-bubble.vars.ts
var vars13 = {
  "base": {
    "enabled": {
      "root": {
        "cornerRadius": "var(--seed-v3-radius-x1_5)",
        "paddingX": "var(--seed-v3-unit-x3)",
        "paddingY": "var(--seed-v3-unit-x2)"
      },
      "arrow": {
        "size": "var(--seed-v3-unit-x2_5)"
      },
      "title": {
        "fontSize": "var(--seed-v3-font-size-t3)",
        "fontWeight": "var(--seed-v3-font-weight-bold)"
      },
      "description": {
        "fontSize": "var(--seed-v3-font-size-t3)",
        "fontWeight": "var(--seed-v3-font-weight-regular)"
      }
    }
  },
  "variantNonModal": {
    "enabled": {
      "root": {
        "color": "var(--seed-v3-color-bg-neutral-solid)"
      },
      "arrow": {
        "color": "var(--seed-v3-color-bg-neutral-solid)"
      },
      "title": {
        "color": "var(--seed-v3-color-fg-neutral-inverted)"
      },
      "description": {
        "color": "var(--seed-v3-color-fg-neutral-inverted)"
      }
    }
  },
  "variantModal": {
    "enabled": {
      "root": {
        "color": "var(--seed-v3-color-bg-static-white)"
      },
      "arrow": {
        "color": "var(--seed-v3-color-bg-static-white)"
      },
      "title": {
        "color": "var(--seed-v3-color-fg-static-black)"
      },
      "description": {
        "color": "var(--seed-v3-color-fg-static-black)"
      },
      "backdrop": {
        "color": "var(--seed-v3-color-bg-overlay)"
      }
    }
  }
};

// src/component/inline-banner.vars.ts
var vars14 = {
  "base": {
    "enabled": {
      "root": {
        "gap": "var(--seed-v3-unit-x1)",
        "paddingXStart": "var(--seed-v3-unit-x4)",
        "paddingXEnd": "var(--seed-v3-unit-x1)"
      },
      "content": {
        "gap": "var(--seed-v3-unit-x2)",
        "paddingY": "10.5px",
        "fontSize": "var(--seed-v3-font-size-t4)",
        "lineHeight": "var(--seed-v3-line-height-t4)"
      },
      "icon": {
        "size": "var(--seed-v3-unit-x4)",
        "marginY": "1.5px"
      },
      "title": {
        "fontWeight": "var(--seed-v3-font-weight-bold)"
      },
      "label": {
        "fontWeight": "var(--seed-v3-font-weight-medium)"
      },
      "linkLabel": {
        "size": "var(--seed-v3-unit-x10)",
        "paddingX": "var(--seed-v3-unit-x3)",
        "fontWeight": "var(--seed-v3-font-weight-regular)",
        "fontSize": "var(--seed-v3-font-size-t2)",
        "lineHeight": "var(--seed-v3-line-height-t2)"
      },
      "dismissButton": {
        "size": "var(--seed-v3-unit-x10)"
      },
      "dismissIcon": {
        "size": "var(--seed-v3-unit-x4)"
      },
      "actionableIcon": {
        "size": "var(--seed-v3-unit-x4)",
        "margin": "var(--seed-v3-unit-x3)"
      }
    }
  },
  "typeContentOnly": {
    "enabled": {
      "content": {
        "paddingXEnd": "var(--seed-v3-unit-x3)"
      }
    }
  },
  "variantNeutralWeak": {
    "enabled": {
      "root": {
        "color": "var(--seed-v3-color-bg-neutral-weak)"
      },
      "icon": {
        "color": "var(--seed-v3-color-fg-neutral)"
      },
      "title": {
        "color": "var(--seed-v3-color-fg-neutral)"
      },
      "label": {
        "color": "var(--seed-v3-color-fg-neutral)"
      },
      "linkLabel": {
        "color": "var(--seed-v3-color-fg-neutral)"
      },
      "dismissIcon": {
        "color": "var(--seed-v3-color-fg-neutral)"
      },
      "actionableIcon": {
        "color": "var(--seed-v3-color-fg-neutral)"
      }
    }
  },
  "variantPositiveWeak": {
    "enabled": {
      "root": {
        "color": "var(--seed-v3-color-bg-positive-weak)"
      },
      "icon": {
        "color": "var(--seed-v3-color-fg-positive-contrast)"
      },
      "title": {
        "color": "var(--seed-v3-color-fg-positive-contrast)"
      },
      "label": {
        "color": "var(--seed-v3-color-fg-positive-contrast)"
      },
      "linkLabel": {
        "color": "var(--seed-v3-color-fg-positive-contrast)"
      },
      "dismissIcon": {
        "color": "var(--seed-v3-color-fg-positive-contrast)"
      },
      "actionableIcon": {
        "color": "var(--seed-v3-color-fg-positive-contrast)"
      }
    }
  },
  "variantInformativeWeak": {
    "enabled": {
      "root": {
        "color": "var(--seed-v3-color-bg-informative-weak)"
      },
      "icon": {
        "color": "var(--seed-v3-color-fg-informative-contrast)"
      },
      "title": {
        "color": "var(--seed-v3-color-fg-informative-contrast)"
      },
      "label": {
        "color": "var(--seed-v3-color-fg-informative-contrast)"
      },
      "linkLabel": {
        "color": "var(--seed-v3-color-fg-informative-contrast)"
      },
      "dismissIcon": {
        "color": "var(--seed-v3-color-fg-informative-contrast)"
      },
      "actionableIcon": {
        "color": "var(--seed-v3-color-fg-informative-contrast)"
      }
    }
  },
  "variantWarningWeak": {
    "enabled": {
      "root": {
        "color": "var(--seed-v3-color-bg-warning-weak)"
      },
      "icon": {
        "color": "var(--seed-v3-color-fg-warning-contrast)"
      },
      "title": {
        "color": "var(--seed-v3-color-fg-warning-contrast)"
      },
      "label": {
        "color": "var(--seed-v3-color-fg-warning-contrast)"
      },
      "linkLabel": {
        "color": "var(--seed-v3-color-fg-warning-contrast)"
      },
      "dismissIcon": {
        "color": "var(--seed-v3-color-fg-warning-contrast)"
      },
      "actionableIcon": {
        "color": "var(--seed-v3-color-fg-warning-contrast)"
      }
    }
  },
  "variantWarningSolid": {
    "enabled": {
      "root": {
        "color": "var(--seed-v3-color-bg-warning-solid)"
      },
      "icon": {
        "color": "var(--seed-v3-color-fg-neutral)"
      },
      "title": {
        "color": "var(--seed-v3-color-fg-neutral)"
      },
      "label": {
        "color": "var(--seed-v3-color-fg-neutral)"
      },
      "linkLabel": {
        "color": "var(--seed-v3-color-fg-neutral)"
      },
      "dismissIcon": {
        "color": "var(--seed-v3-color-fg-neutral)"
      },
      "actionableIcon": {
        "color": "var(--seed-v3-color-fg-neutral)"
      }
    }
  },
  "variantDangerWeak": {
    "enabled": {
      "root": {
        "color": "var(--seed-v3-color-bg-danger-weak)"
      },
      "icon": {
        "color": "var(--seed-v3-color-fg-danger-contrast)"
      },
      "title": {
        "color": "var(--seed-v3-color-fg-danger-contrast)"
      },
      "label": {
        "color": "var(--seed-v3-color-fg-danger-contrast)"
      },
      "linkLabel": {
        "color": "var(--seed-v3-color-fg-danger-contrast)"
      },
      "actionableIcon": {
        "color": "var(--seed-v3-color-fg-danger-contrast)"
      }
    }
  },
  "variantDangerSolid": {
    "enabled": {
      "root": {
        "color": "var(--seed-v3-color-bg-danger-solid)"
      },
      "icon": {
        "color": "var(--seed-v3-color-fg-static-white)"
      },
      "title": {
        "color": "var(--seed-v3-color-fg-static-white)"
      },
      "label": {
        "color": "var(--seed-v3-color-fg-static-white)"
      },
      "linkLabel": {
        "color": "var(--seed-v3-color-fg-static-white)"
      },
      "actionableIcon": {
        "color": "var(--seed-v3-color-fg-static-white)"
      }
    }
  }
};

// src/component/progress-circle.vars.ts
var vars15 = {
  "base": {
    "enabled": {
      "root": {},
      "track": {
        "fill": "#0017580d"
      },
      "indicator": {
        "color": "#d1d3d8"
      },
      "indicator-path": {}
    }
  },
  "sizeSmall": {
    "enabled": {
      "root": {
        "size": "var(--seed-v3-unit-6)"
      },
      "track": {},
      "indicator": {}
    }
  },
  "sizeMedium": {
    "enabled": {
      "root": {
        "size": "var(--seed-v3-unit-10)"
      },
      "track": {},
      "indicator": {}
    }
  },
  "variantIndeterminate": {
    "enabled": {
      "root": {},
      "track": {},
      "indicator": {},
      "indicator-path": {
        "headDashDuration": "1.2s",
        "tailDashDuration": "1.2s",
        "rotateDuration": "1.2s",
        "headDashTimingFunction": "cubic-bezier(0.35, 0, 0.65, 1)",
        "tailDashTimingFunction": "cubic-bezier(0.35, 0, 0.65, 0.6)",
        "rotateTimingFunction": "cubic-bezier(0.35, 0.25, 0.65, 0.75)"
      }
    }
  },
  "variantDeterminate": {
    "enabled": {
      "root": {},
      "track": {},
      "indicator": {},
      "indicator-path": {
        "transitionDuration": "0.4s",
        "transitionTimingFunction": "cubic-bezier(0, 0, 0.15, 1)"
      }
    }
  }
};

// src/component/radio.vars.ts
var vars16 = {
  "base": {
    "enabled": {
      "root": {
        "color": "var(--seed-v3-color-bg-layer-default)",
        "strokeWidth": "1.25px",
        "strokeColor": "var(--seed-v3-color-stroke-control)",
        "cornerRadius": "var(--seed-v3-radius-full)"
      },
      "icon": {
        "cornerRadius": "var(--seed-v3-radius-full)"
      }
    },
    "enabledPressed": {
      "root": {
        "color": "var(--seed-v3-color-bg-layer-default-pressed)"
      }
    },
    "enabledSelected": {
      "root": {
        "color": "var(--seed-v3-color-bg-brand-solid)",
        "strokeWidth": "0px"
      },
      "icon": {
        "color": "var(--seed-v3-color-fg-static-white)"
      }
    },
    "enabledSelectedPressed": {
      "root": {
        "color": "var(--seed-v3-color-bg-brand-solid-pressed)"
      }
    },
    "disabled": {
      "root": {
        "color": "var(--seed-v3-color-palette-gray-300)"
      }
    },
    "disabledSelected": {
      "root": {
        "strokeColor": "var(--seed-v3-color-palette-gray-300)"
      },
      "icon": {
        "color": "var(--seed-v3-color-palette-gray-300)"
      }
    }
  },
  "sizeLarge": {
    "enabled": {
      "root": {
        "size": "var(--seed-v3-unit-x6)"
      },
      "icon": {
        "size": "var(--seed-v3-unit-x2_5)"
      }
    },
    "disabled": {
      "icon": {
        "size": "var(--seed-v3-unit-x3)"
      }
    }
  },
  "sizeMedium": {
    "enabled": {
      "root": {
        "size": "var(--seed-v3-unit-x5)"
      },
      "icon": {
        "size": "var(--seed-v3-unit-x2)"
      }
    },
    "disabled": {
      "icon": {
        "size": "var(--seed-v3-unit-x2_5)"
      }
    }
  },
  "sizeSmall": {
    "enabled": {
      "root": {
        "size": "var(--seed-v3-unit-x4_5)"
      },
      "icon": {
        "size": "var(--seed-v3-unit-x2)"
      }
    }
  }
};

// src/component/select-box.vars.ts
var vars17 = {
  "base": {
    "enabled": {
      "root": {
        "gap": "var(--seed-v3-unit-x3)"
      },
      "box": {
        "paddingX": "var(--seed-v3-unit-x4)",
        "paddingY": "19px",
        "gap": "var(--seed-v3-unit-x2_5)",
        "strokeWidth": "1px",
        "strokeColor": "var(--seed-v3-color-stroke-neutral)",
        "cornerRadius": "var(--seed-v3-radius-x3)"
      },
      "content": {
        "gap": "var(--seed-v3-unit-x0_5)"
      },
      "label": {
        "color": "var(--seed-v3-color-fg-neutral)",
        "fontWeight": "var(--seed-v3-font-weight-bold)",
        "fontSize": "var(--seed-v3-font-size-t5)",
        "lineHeight": "var(--seed-v3-line-height-t5)"
      },
      "description": {
        "color": "var(--seed-v3-color-fg-neutral-muted)",
        "fontWeight": "var(--seed-v3-font-weight-regular)",
        "fontSize": "var(--seed-v3-font-size-t4)",
        "lineHeight": "var(--seed-v3-line-height-t4)"
      },
      "control": {
        "marginY": "0"
      }
    },
    "pressed": {
      "box": {
        "color": "var(--seed-v3-color-bg-layer-default-pressed)"
      }
    },
    "selected": {
      "box": {
        "color": "var(--seed-v3-color-bg-neutral-weak)",
        "strokeColor": "var(--seed-v3-color-stroke-control)"
      }
    },
    "selectedPressed": {
      "box": {
        "color": "var(--seed-v3-color-bg-neutral-weak-pressed)"
      }
    }
  }
};

// src/component/segmented-control.vars.ts
var vars18 = {
  "base": {
    "enabled": {
      "root": {
        "padding": "var(--seed-v3-unit-x1)",
        "cornerRadius": "var(--seed-v3-radius-full)",
        "color": "var(--seed-v3-color-bg-neutral-weak)"
      },
      "segment": {
        "height": "var(--seed-v3-unit-x8)",
        "cornerRadius": "var(--seed-v3-radius-full)",
        "paddingX": "var(--seed-v3-unit-x4)",
        "minWidth": "86px",
        "fontSize": "var(--seed-v3-font-size-t5)",
        "lineHeight": "var(--seed-v3-line-height-t5)",
        "fontWeight": "var(--seed-v3-font-weight-medium)",
        "color": "var(--seed-v3-color-fg-neutral-muted)"
      },
      "indicator": {
        "cornerRadius": "var(--seed-v3-radius-full)",
        "color": "var(--seed-v3-color-bg-layer-default)"
      }
    },
    "enabledPressed": {
      "segment": {
        "color": "var(--seed-v3-color-bg-neutral-weak-pressed)"
      }
    },
    "selected": {
      "segment": {
        "fontWeight": "var(--seed-v3-font-weight-bold)"
      }
    },
    "enabledSelected": {
      "segment": {
        "color": "var(--seed-v3-color-fg-neutral)"
      }
    },
    "enabledSelectedPressed": {
      "indicator": {
        "color": "var(--seed-v3-color-bg-layer-default-pressed)"
      }
    },
    "disabled": {
      "segment": {
        "color": "var(--seed-v3-color-fg-disabled)"
      }
    }
  }
};

// src/component/switch.vars.ts
var vars19 = {
  "base": {
    "enabled": {
      "control": {
        "color": "var(--seed-v3-color-palette-gray-600)",
        "cornerRadius": "var(--seed-v3-radius-full)"
      },
      "thumb": {
        "color": "var(--seed-v3-color-fg-static-white)",
        "cornerRadius": "var(--seed-v3-radius-full)"
      }
    },
    "enabledSelected": {
      "control": {
        "color": "var(--seed-v3-color-bg-brand-solid)"
      }
    },
    "disabled": {
      "root": {
        "opacity": "0.38"
      }
    }
  },
  "sizeMedium": {
    "enabled": {
      "root": {
        "height": "31px",
        "width": "51px"
      },
      "control": {
        "paddingX": "2px",
        "paddingY": "2px"
      },
      "thumb": {
        "height": "27px",
        "width": "27px",
        "shadow": "[object Object] [object Object] [object Object] [object Object] #00000026, [object Object] [object Object] [object Object] [object Object] #0000000f"
      }
    }
  },
  "sizeSmall": {
    "enabled": {
      "root": {
        "height": "16px",
        "width": "26px"
      },
      "control": {
        "paddingX": "2px",
        "paddingY": "2px"
      },
      "thumb": {
        "height": "12px",
        "width": "12px"
      }
    }
  }
};

// src/component/tab.vars.ts
var vars20 = {
  "base": {
    "enabled": {
      "label": {
        "color": "var(--seed-v3-color-fg-neutral-subtle)"
      },
      "notification": {
        "size": "var(--seed-v3-unit-x1)",
        "cornerRadius": "var(--seed-v3-radius-full)",
        "color": "var(--seed-v3-color-bg-brand-solid)",
        "marginLeft": "var(--seed-v3-unit-x0_5)"
      }
    },
    "selected": {
      "label": {
        "color": "var(--seed-v3-color-fg-neutral)"
      }
    },
    "disabled": {
      "label": {
        "color": "var(--seed-v3-color-fg-disabled)"
      }
    }
  },
  "sizeMedium": {
    "enabled": {
      "root": {
        "minHeight": "44px",
        "paddingX": "var(--seed-v3-unit-x2_5)",
        "paddingY": "var(--seed-v3-unit-x2_5)"
      },
      "label": {
        "fontSize": "var(--seed-v3-font-size-t5)",
        "fontWeight": "var(--seed-v3-font-weight-bold)"
      }
    }
  },
  "sizeSmall": {
    "enabled": {
      "root": {
        "minHeight": "40px",
        "paddingX": "var(--seed-v3-unit-x2_5)",
        "paddingY": "var(--seed-v3-unit-x2_5)"
      },
      "label": {
        "fontSize": "var(--seed-v3-font-size-t4)",
        "fontWeight": "var(--seed-v3-font-weight-bold)"
      }
    }
  }
};

// src/component/tablist.vars.ts
var vars21 = {
  "base": {
    "enabled": {
      "root": {
        "color": "var(--seed-v3-color-bg-layer-default)",
        "strokeBottomWidth": "1px",
        "strokeColor": "var(--seed-v3-color-stroke-neutral)"
      },
      "indicator": {
        "height": "2px",
        "color": "var(--seed-v3-color-fg-neutral)"
      }
    }
  },
  "layoutHug": {
    "enabled": {
      "root": {
        "paddingX": "var(--seed-v3-unit-x4)"
      }
    }
  },
  "layoutFill": {
    "enabled": {
      "root": {
        "paddingX": "0px"
      }
    }
  },
  "sizeSmall": {
    "enabled": {
      "root": {
        "height": "40px"
      }
    }
  },
  "sizeMedium": {
    "enabled": {
      "root": {
        "height": "44px"
      }
    }
  }
};

// src/component/text-button.vars.ts
var vars22 = {
  "base": {
    "enabled": {
      "root": {
        "paddingY": "var(--seed-v3-unit-x0_5)",
        "borderWidth": "0.125rem"
      },
      "label": {
        "fontWeight": "var(--seed-v3-font-weight-regular)"
      },
      "prefixIcon": {
        "marginXEnd": "var(--seed-v3-unit-x1)"
      },
      "suffixIcon": {
        "marginXStart": "var(--seed-v3-unit-x0_5)"
      }
    },
    "pressed": {
      "root": {
        "color": "var(--seed-v3-color-palette-gray-200)",
        "borderColor": "var(--seed-v3-color-palette-gray-200)"
      }
    },
    "disabled": {
      "root": {
        "color": "var(--seed-v3-color-fg-disabled)"
      }
    }
  },
  "variantBrand": {
    "enabled": {
      "root": {
        "color": "var(--seed-v3-color-fg-brand)"
      }
    }
  },
  "variantNeutral": {
    "enabled": {
      "root": {
        "color": "var(--seed-v3-color-fg-neutral)"
      }
    }
  },
  "variantNeutralSubtle": {
    "enabled": {
      "root": {
        "color": "var(--seed-v3-color-fg-neutral-subtle)"
      }
    }
  },
  "variantDanger": {
    "enabled": {
      "root": {
        "color": "var(--seed-v3-color-fg-danger)"
      }
    }
  },
  "sizeLarge": {
    "enabled": {
      "root": {
        "cornerRadius": "var(--seed-v3-radius-x1_5)"
      },
      "prefixIcon": {
        "size": "var(--seed-v3-unit-x4)"
      },
      "suffixIcon": {
        "size": "var(--seed-v3-unit-x4)"
      },
      "label": {
        "fontSize": "var(--seed-v3-font-size-t6)",
        "lineHeight": "var(--seed-v3-line-height-t6)"
      }
    }
  },
  "sizeMedium": {
    "enabled": {
      "root": {
        "cornerRadius": "var(--seed-v3-radius-x1_5)"
      },
      "prefixIcon": {
        "size": "var(--seed-v3-unit-x3_5)"
      },
      "suffixIcon": {
        "size": "var(--seed-v3-unit-x3_5)"
      },
      "label": {
        "fontSize": "var(--seed-v3-font-size-t5)",
        "lineHeight": "var(--seed-v3-line-height-t5)"
      }
    }
  },
  "sizeSmall": {
    "enabled": {
      "root": {
        "cornerRadius": "var(--seed-v3-radius-x1)"
      },
      "prefixIcon": {
        "size": "var(--seed-v3-unit-x3_5)"
      },
      "suffixIcon": {
        "size": "var(--seed-v3-unit-x3_5)"
      },
      "label": {
        "fontSize": "var(--seed-v3-font-size-t4)",
        "lineHeight": "var(--seed-v3-line-height-t4)"
      }
    }
  }
};

// src/font-size.vars.ts
var font_size_vars_exports = {};
__export(font_size_vars_exports, {
  t1: () => t1,
  t10: () => t10,
  t2: () => t2,
  t3: () => t3,
  t4: () => t4,
  t5: () => t5,
  t6: () => t6,
  t7: () => t7,
  t8: () => t8,
  t9: () => t9
});
var t1 = "var(--seed-v3-font-size-t1)";
var t2 = "var(--seed-v3-font-size-t2)";
var t3 = "var(--seed-v3-font-size-t3)";
var t4 = "var(--seed-v3-font-size-t4)";
var t5 = "var(--seed-v3-font-size-t5)";
var t6 = "var(--seed-v3-font-size-t6)";
var t7 = "var(--seed-v3-font-size-t7)";
var t8 = "var(--seed-v3-font-size-t8)";
var t9 = "var(--seed-v3-font-size-t9)";
var t10 = "var(--seed-v3-font-size-t10)";

// src/font-weight.vars.ts
var font_weight_vars_exports = {};
__export(font_weight_vars_exports, {
  bold: () => bold,
  medium: () => medium,
  regular: () => regular
});
var regular = "var(--seed-v3-font-weight-regular)";
var medium = "var(--seed-v3-font-weight-medium)";
var bold = "var(--seed-v3-font-weight-bold)";

// src/line-height.vars.ts
var line_height_vars_exports = {};
__export(line_height_vars_exports, {
  t1: () => t12,
  t10: () => t102,
  t2: () => t22,
  t3: () => t32,
  t4: () => t42,
  t5: () => t52,
  t6: () => t62,
  t7: () => t72,
  t8: () => t82,
  t9: () => t92
});
var t12 = "var(--seed-v3-line-height-t1)";
var t22 = "var(--seed-v3-line-height-t2)";
var t32 = "var(--seed-v3-line-height-t3)";
var t42 = "var(--seed-v3-line-height-t4)";
var t52 = "var(--seed-v3-line-height-t5)";
var t62 = "var(--seed-v3-line-height-t6)";
var t72 = "var(--seed-v3-line-height-t7)";
var t82 = "var(--seed-v3-line-height-t8)";
var t92 = "var(--seed-v3-line-height-t9)";
var t102 = "var(--seed-v3-line-height-t10)";

// src/radius.vars.ts
var radius_vars_exports = {};
__export(radius_vars_exports, {
  full: () => full,
  x0_5: () => x0_5,
  x1: () => x1,
  x1_5: () => x1_5,
  x2: () => x2,
  x2_5: () => x2_5,
  x3: () => x3,
  x3_5: () => x3_5,
  x4: () => x4,
  x5: () => x5,
  x6: () => x6
});
var x0_5 = "var(--seed-v3-radius-x0_5)";
var x1 = "var(--seed-v3-radius-x1)";
var x1_5 = "var(--seed-v3-radius-x1_5)";
var x2 = "var(--seed-v3-radius-x2)";
var x2_5 = "var(--seed-v3-radius-x2_5)";
var x3 = "var(--seed-v3-radius-x3)";
var x3_5 = "var(--seed-v3-radius-x3_5)";
var x4 = "var(--seed-v3-radius-x4)";
var x5 = "var(--seed-v3-radius-x5)";
var x6 = "var(--seed-v3-radius-x6)";
var full = "var(--seed-v3-radius-full)";

// src/unit.vars.ts
var unit_vars_exports = {};
__export(unit_vars_exports, {
  x0_5: () => x0_52,
  x1: () => x12,
  x10: () => x10,
  x12: () => x122,
  x13: () => x13,
  x14: () => x14,
  x16: () => x16,
  x1_5: () => x1_52,
  x2: () => x22,
  x2_5: () => x2_52,
  x3: () => x32,
  x3_5: () => x3_52,
  x4: () => x42,
  x4_5: () => x4_5,
  x5: () => x52,
  x6: () => x62,
  x7: () => x7,
  x8: () => x8,
  x9: () => x9
});
var x0_52 = "var(--seed-v3-unit-x0_5)";
var x12 = "var(--seed-v3-unit-x1)";
var x1_52 = "var(--seed-v3-unit-x1_5)";
var x22 = "var(--seed-v3-unit-x2)";
var x2_52 = "var(--seed-v3-unit-x2_5)";
var x32 = "var(--seed-v3-unit-x3)";
var x3_52 = "var(--seed-v3-unit-x3_5)";
var x42 = "var(--seed-v3-unit-x4)";
var x4_5 = "var(--seed-v3-unit-x4_5)";
var x52 = "var(--seed-v3-unit-x5)";
var x62 = "var(--seed-v3-unit-x6)";
var x7 = "var(--seed-v3-unit-x7)";
var x8 = "var(--seed-v3-unit-x8)";
var x9 = "var(--seed-v3-unit-x9)";
var x10 = "var(--seed-v3-unit-x10)";
var x122 = "var(--seed-v3-unit-x12)";
var x13 = "var(--seed-v3-unit-x13)";
var x14 = "var(--seed-v3-unit-x14)";
var x16 = "var(--seed-v3-unit-x16)";

// src/horizontal-spacing.vars.ts
var horizontal_spacing_vars_exports = {};
__export(horizontal_spacing_vars_exports, {
  betweenChips: () => betweenChips,
  globalGutter: () => globalGutter
});
var betweenChips = "var(--seed-v3-horizontal-spacing-between-chips)";
var globalGutter = "var(--seed-v3-horizontal-spacing-global-gutter)";
export {
  color_exports as $color,
  component_exports as $component,
  font_size_vars_exports as $fontSize,
  font_weight_vars_exports as $fontWeight,
  horizontal_spacing_vars_exports as $horizontalSpacing,
  line_height_vars_exports as $lineHeight,
  radius_vars_exports as $radius,
  unit_vars_exports as $unit
};
/*! For license information please see index.mjs.LEGAL.txt */
//# sourceMappingURL=index.mjs.map
