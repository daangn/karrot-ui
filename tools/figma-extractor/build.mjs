import esbuild from "esbuild";
import pkg from "./package.json" with { type: "json" };

const DEFAULT_OPTIONS = {
  bundle: true,
  write: true,
  treeShaking: true,
  sourcemap: false,
  minify: true,
  format: "esm",
  platform: "node",
  target: ["node16"],
  external: [...Object.keys(pkg.dependencies)],
};

esbuild
  .build({
    entryPoints: ["./src/cli.ts"],
    outfile: "./bin/index.mjs",
    ...DEFAULT_OPTIONS,
  })
  .catch(() => process.exit(1));
