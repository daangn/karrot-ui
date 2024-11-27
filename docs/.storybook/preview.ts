// import Seed Design
import "@seed-design/stylesheet/token.css";

import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    chromatic: {
      delay: 1000,
    },
  },
};

export default preview;
