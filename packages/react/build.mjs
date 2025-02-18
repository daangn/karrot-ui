import { build } from "esbuild";
import { copy } from "esbuild-plugin-copy";

import pkg from "./package.json" assert { type: "json" };

const external = Object.keys({
  ...pkg.dependencies,
  ...pkg.peerDependencies,
});

const baseConfig = {
  entryPoints: ["./src/index.tsx", "./src/primitive.ts", "./src/vars.ts"],
  outdir: "lib",
  target: "es2019",
  bundle: true,
  sourcemap: true,
  external,
  plugins: [
    copy({
      resolveFrom: "cwd",
      assets: {
        from: ["../css/*.css"],
        to: ["./lib"],
      },
    }),
  ],
};

Promise.all([
  build({
    ...baseConfig,
    format: "cjs",
  }),
  build({
    ...baseConfig,
    format: "esm",
    outExtension: {
      ".js": ".mjs",
    },
  }),
]).catch(() => process.exit(1));
