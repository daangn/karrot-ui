export const vars = {
  "base": {
    "enabled": {
      "root": {
        "padding": "var(--seed-v3-unit-s1)",
        "cornerRadius": "var(--seed-v3-radius-full)",
        "color": "var(--seed-v3-color-bg-neutral-weak)"
      },
      "segment": {
        "height": "var(--seed-v3-unit-s8)",
        "cornerRadius": "var(--seed-v3-radius-full)",
        "paddingX": "var(--seed-v3-unit-s4)",
        "minWidth": "86px",
        "fontSize": "var(--seed-v3-font-size-s5)",
        "lineHeight": "var(--seed-v3-line-height-s5)",
        "fontWeight": "var(--seed-v3-font-weight-medium)",
        "color": "var(--seed-v3-color-fg-neutral-muted)"
      },
      "indicator": {
        "cornerRadius": "var(--seed-v3-radius-full)",
        "color": "var(--seed-v3-color-bg-layer-default)",
        "shadow": "0px 1px 6px 0px #0000000d",
        "transformDuration": "var(--seed-v3-duration-s4)",
        "transformTimingFunction": "var(--seed-v3-timing-function-easing)"
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
}