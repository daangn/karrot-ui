import esbuild from "esbuild";

import pkg from "./package.json" with { type: "json" };

import dotenv from "dotenv";

dotenv.config();

const define = {};

for (const k in process.env) {
  if (k.startsWith("PUBLIC_") === false) continue;

  define[`process.env.${k}`] = JSON.stringify(process.env[k]);
}

esbuild
  .build({
    entryPoints: ["./src/index.ts"],
    outfile: "./bin/index.mjs",
    bundle: true,
    write: true,
    treeShaking: true,
    sourcemap: false,
    minify: true,
    format: "esm",
    platform: "node",
    target: ["esnext"],
    external: [...Object.keys(pkg.dependencies)],
    define,
  })
  .catch(() => process.exit(1));

esbuild
  .build({
    entryPoints: ["./src/transforms/**/*.ts"],
    outdir: "./bin/transforms",
    outExtension: { ".js": ".mjs" },
    bundle: true,
    write: true,
    treeShaking: true,
    sourcemap: false,
    minify: true,
    format: "esm",
    platform: "node",
    target: ["esnext"],
    external: [...Object.keys(pkg.dependencies)],
    define,
  })
  .catch(() => process.exit(1));
