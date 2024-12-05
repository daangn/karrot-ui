export const vars = {
  "base": {
    "enabled": {
      "indicator": {
        "transitionDuration": "0.3s",
        "transitionTimingFunction": "cubic-bezier(0, 0, 0.15, 1)"
      }
    }
  },
  "sizeSmall": {
    "enabled": {
      "root": {
        "size": "var(--seed-v3-unit-x6)"
      }
    }
  },
  "sizeMedium": {
    "enabled": {
      "root": {
        "size": "var(--seed-v3-unit-x10)"
      }
    }
  },
  "indeterminateTrue": {
    "enabled": {
      "indicator": {
        "headDuration": "1.2s",
        "tailDuration": "1.2s",
        "rotateDuration": "1.2s",
        "headTimingFunction": "cubic-bezier(0.35, 0, 0.65, 1)",
        "tailTimingFunction": "cubic-bezier(0.35, 0, 0.65, 0.6)",
        "rotateTimingFunction": "cubic-bezier(0.35, 0.25, 0.65, 0.75)"
      }
    }
  },
  "variantNeutral": {
    "enabled": {
      "track": {
        "fill": "var(--seed-v3-color-palette-gray-300)"
      },
      "indicator": {
        "color": "var(--seed-v3-color-palette-gray-600)"
      }
    }
  },
  "variantBrand": {
    "enabled": {
      "track": {
        "fill": "var(--seed-v3-color-palette-carrot-200)"
      },
      "indicator": {
        "color": "var(--seed-v3-color-bg-brand-solid)"
      }
    }
  },
  "variantWhite": {
    "enabled": {
      "track": {
        "fill": "var(--seed-v3-color-palette-gray-600)"
      },
      "indicator": {
        "color": "var(--seed-v3-color-bg-static-white)"
      }
    }
  }
}