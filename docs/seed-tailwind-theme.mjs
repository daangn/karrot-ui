export default {
  extend: {
    colors: {
      seed: {
        palette: {
          gray: {
            0: "var(--seed-color-palette-gray-00)",
            100: "var(--seed-color-palette-gray-100)",
            200: "var(--seed-color-palette-gray-200)",
            300: "var(--seed-color-palette-gray-300)",
            400: "var(--seed-color-palette-gray-400)",
            500: "var(--seed-color-palette-gray-500)",
            600: "var(--seed-color-palette-gray-600)",
            700: "var(--seed-color-palette-gray-700)",
            800: "var(--seed-color-palette-gray-800)",
            900: "var(--seed-color-palette-gray-900)",
          },
          blue: {
            100: "var(--seed-color-palette-blue-100)",
            200: "var(--seed-color-palette-blue-200)",
            300: "var(--seed-color-palette-blue-300)",
            400: "var(--seed-color-palette-blue-400)",
            500: "var(--seed-color-palette-blue-500)",
            600: "var(--seed-color-palette-blue-600)",
            700: "var(--seed-color-palette-blue-700)",
            800: "var(--seed-color-palette-blue-800)",
            900: "var(--seed-color-palette-blue-900)",
            1000: "var(--seed-color-palette-blue-1000)",
          },
          carrot: {
            100: "var(--seed-color-palette-carrot-100)",
            200: "var(--seed-color-palette-carrot-200)",
            300: "var(--seed-color-palette-carrot-300)",
            400: "var(--seed-color-palette-carrot-400)",
            500: "var(--seed-color-palette-carrot-500)",
            600: "var(--seed-color-palette-carrot-600)",
            700: "var(--seed-color-palette-carrot-700)",
            800: "var(--seed-color-palette-carrot-800)",
            900: "var(--seed-color-palette-carrot-900)",
            1000: "var(--seed-color-palette-carrot-1000)",
          },
          green: {
            100: "var(--seed-color-palette-green-100)",
            200: "var(--seed-color-palette-green-200)",
            300: "var(--seed-color-palette-green-300)",
            400: "var(--seed-color-palette-green-400)",
            500: "var(--seed-color-palette-green-500)",
            600: "var(--seed-color-palette-green-600)",
            700: "var(--seed-color-palette-green-700)",
            800: "var(--seed-color-palette-green-800)",
            900: "var(--seed-color-palette-green-900)",
            1000: "var(--seed-color-palette-green-1000)",
          },
          purple: {
            100: "var(--seed-color-palette-purple-100)",
            200: "var(--seed-color-palette-purple-200)",
            300: "var(--seed-color-palette-purple-300)",
            400: "var(--seed-color-palette-purple-400)",
            500: "var(--seed-color-palette-purple-500)",
            600: "var(--seed-color-palette-purple-600)",
            700: "var(--seed-color-palette-purple-700)",
            800: "var(--seed-color-palette-purple-800)",
            900: "var(--seed-color-palette-purple-900)",
            1000: "var(--seed-color-palette-purple-1000)",
          },
          red: {
            100: "var(--seed-color-palette-red-100)",
            200: "var(--seed-color-palette-red-200)",
            300: "var(--seed-color-palette-red-300)",
            400: "var(--seed-color-palette-red-400)",
            500: "var(--seed-color-palette-red-500)",
            600: "var(--seed-color-palette-red-600)",
            700: "var(--seed-color-palette-red-700)",
            800: "var(--seed-color-palette-red-800)",
            900: "var(--seed-color-palette-red-900)",
            1000: "var(--seed-color-palette-red-1000)",
          },
          yellow: {
            100: "var(--seed-color-palette-yellow-100)",
            200: "var(--seed-color-palette-yellow-200)",
            300: "var(--seed-color-palette-yellow-300)",
            400: "var(--seed-color-palette-yellow-400)",
            500: "var(--seed-color-palette-yellow-500)",
            600: "var(--seed-color-palette-yellow-600)",
            700: "var(--seed-color-palette-yellow-700)",
            800: "var(--seed-color-palette-yellow-800)",
            900: "var(--seed-color-palette-yellow-900)",
            1000: "var(--seed-color-palette-yellow-1000)",
          },
          "static-black": {
            DEFAULT: "var(--seed-color-palette-static-black)",
            "alpha-50": "var(--seed-color-palette-static-black-alpha-50)",
            "alpha-200": "var(--seed-color-palette-static-black-alpha-200)",
            "alpha-500": "var(--seed-color-palette-static-black-alpha-500)",
          },
          "static-white": {
            DEFAULT: "var(--seed-color-palette-static-white)",
            "alpha-50": "var(--seed-color-palette-static-white-alpha-50)",
            "alpha-200": "var(--seed-color-palette-static-white-alpha-200)",
          },
        },
        fg: {
          brand: {
            contrast: "var(--seed-color-fg-brand-contrast)",
            DEFAULT: "var(--seed-color-fg-brand)",
          },
          critical: {
            contrast: "var(--seed-color-fg-critical-contrast)",
            DEFAULT: "var(--seed-color-fg-critical)",
          },
          disabled: "var(--seed-color-fg-disabled)",
          informative: {
            contrast: "var(--seed-color-fg-informative-contrast)",
            DEFAULT: "var(--seed-color-fg-informative)",
          },
          magic: {
            contrast: "var(--seed-color-fg-magic-contrast)",
            DEFAULT: "var(--seed-color-fg-magic)",
          },
          neutral: {
            inverted: "var(--seed-color-fg-neutral-inverted)",
            muted: "var(--seed-color-fg-neutral-muted)",
            subtle: "var(--seed-color-fg-neutral-subtle)",
            DEFAULT: "var(--seed-color-fg-neutral)",
          },
          placeholder: "var(--seed-color-fg-placeholder)",
          positive: {
            contrast: "var(--seed-color-fg-positive-contrast)",
            DEFAULT: "var(--seed-color-fg-positive)",
          },
          warning: {
            contrast: "var(--seed-color-fg-warning-contrast)",
          },
        },
        bg: {
          brand: {
            solid: {
              pressed: "var(--seed-color-bg-brand-solid-pressed)",
              DEFAULT: "var(--seed-color-bg-brand-solid)",
            },
            weak: {
              pressed: "var(--seed-color-bg-brand-weak-pressed)",
              DEFAULT: "var(--seed-color-bg-brand-weak)",
            },
          },
          critical: {
            solid: {
              pressed: "var(--seed-color-bg-critical-solid-pressed)",
              DEFAULT: "var(--seed-color-bg-critical-solid)",
            },
            weak: {
              pressed: "var(--seed-color-bg-critical-weak-pressed)",
              DEFAULT: "var(--seed-color-bg-critical-weak)",
            },
          },
          disabled: "var(--seed-color-bg-disabled)",
          informative: {
            solid: {
              pressed: "var(--seed-color-bg-informative-solid-pressed)",
              DEFAULT: "var(--seed-color-bg-informative-solid)",
            },
            weak: {
              pressed: "var(--seed-color-bg-informative-weak-pressed)",
              DEFAULT: "var(--seed-color-bg-informative-weak)",
            },
          },
          layer: {
            basement: "var(--seed-color-bg-layer-basement)",
            default: {
              pressed: "var(--seed-color-bg-layer-default-pressed)",
              DEFAULT: "var(--seed-color-bg-layer-default)",
            },
            fill: "var(--seed-color-bg-layer-fill)",
            floating: {
              pressed: "var(--seed-color-bg-layer-floating-pressed)",
              DEFAULT: "var(--seed-color-bg-layer-floating)",
            },
          },
          neutral: {
            solid: {
              pressed: "var(--seed-color-bg-neutral-solid-pressed)",
              DEFAULT: "var(--seed-color-bg-neutral-solid)",
            },
            weak: {
              pressed: "var(--seed-color-bg-neutral-weak-pressed)",
              DEFAULT: "var(--seed-color-bg-neutral-weak)",
            },
          },
          overlay: {
            muted: "var(--seed-color-bg-overlay-muted)",
            DEFAULT: "var(--seed-color-bg-overlay)",
          },
          positive: {
            solid: {
              pressed: "var(--seed-color-bg-positive-solid-pressed)",
              DEFAULT: "var(--seed-color-bg-positive-solid)",
            },
            weak: {
              pressed: "var(--seed-color-bg-positive-weak-pressed)",
              DEFAULT: "var(--seed-color-bg-positive-weak)",
            },
          },
          warning: {
            solid: "var(--seed-color-bg-warning-solid)",
            weak: {
              pressed: "var(--seed-color-bg-warning-weak-pressed)",
              DEFAULT: "var(--seed-color-bg-warning-weak)",
            },
          },
        },
        stroke: {
          brand: "var(--seed-color-stroke-brand)",
          control: "var(--seed-color-stroke-control)",
          critical: "var(--seed-color-stroke-critical)",
          field: {
            focused: "var(--seed-color-stroke-field-focused)",
            DEFAULT: "var(--seed-color-stroke-field)",
          },
          neutral: {
            muted: "var(--seed-color-stroke-neutral-muted)",
            DEFAULT: "var(--seed-color-stroke-neutral)",
          },
          "on-image": "var(--seed-color-stroke-on-image)",
          positive: "var(--seed-color-stroke-positive)",
        },
      },
    },
  },
};
