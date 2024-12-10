var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

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
module.exports = __toCommonJS(component_exports);

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
/*! For license information please see index.cjs.LEGAL.txt */
//# sourceMappingURL=index.cjs.map
