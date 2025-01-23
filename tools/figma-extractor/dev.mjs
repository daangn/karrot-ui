import esbuild from "esbuild";
import pkg from "./package.json" with { type: "json" };

const DEFAULT_OPTIONS = {
  bundle: true,
  write: true,
  treeShaking: true,
  sourcemap: false,
  minify: false,
  format: "esm",
  platform: "node",
  target: ["node16"],
  external: [...Object.keys(pkg.dependencies)],
};

esbuild
  .context({
    entryPoints: ["./src/cli.ts"],
    outfile: "./bin/index.mjs",
    ...DEFAULT_OPTIONS,
  })
  .then((ctx) => ctx.watch())
  .catch(() => process.exit(1));
