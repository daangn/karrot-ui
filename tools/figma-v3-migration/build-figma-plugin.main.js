require("dotenv").config();

module.exports = (buildOptions) => ({
  ...buildOptions,
  define: {
    "process.env.MODE": `"${process.env.MODE}"`,
    "process.env.POSTHOG_API_KEY": `"${process.env.POSTHOG_API_KEY}"`,
    "process.env.POSTHOG_HOST": `"${process.env.POSTHOG_HOST}"`,
  },
  resolveExtensions: [".tsx", ".ts", ".jsx", ".js", ".css", ".json", ".mjs"],
});
