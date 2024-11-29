export const vars = {
  base: {
    enabled: {
      root: {
        padding: "var(--seed-v3-unit-x1)",
        cornerRadius: "var(--seed-v3-radius-full)",
        color: "var(--seed-v3-color-bg-neutral-weak)",
      },
      trigger: {
        cornerRadius: "var(--seed-v3-radius-full)",
        paddingX: "var(--seed-v3-unit-x4)",
        minWidth: "86px",
        fontSize: "var(--seed-v3-font-size-t5)",
        lineHeight: "var(--seed-v3-line-height-t5)",
        fontWeight: "var(--seed-v3-font-weight-medium)",
        color: "var(--seed-v3-color-fg-neutral-muted)",
      },
      selectedIndicator: {
        cornerRadius: "var(--seed-v3-radius-full)",
        color: "var(--seed-v3-color-bg-layer-default)",
      },
    },
    pressed: {
      trigger: {
        color: "var(--seed-v3-color-bg-neutral-weak-pressed)",
      },
    },
    selected: {
      trigger: {
        color: "var(--seed-v3-color-fg-neutral)",
        fontWeight: "var(--seed-v3-font-weight-bold)",
      },
    },
    selectedPressed: {
      trigger: {
        color: "var(--seed-v3-color-bg-layer-default-pressed)",
      },
    },
    disabled: {
      trigger: {
        color: "var(--seed-v3-color-fg-disabled)",
      },
    },
  },
};
