#!/usr/bin/env node

// TODO: load preset from config file

import {
  generateCssBundle,
  generateCssEach,
  generateDts,
  generateJs,
  type Config,
  type Preset,
} from "@seed-design/qvism-core";
import preset from "@seed-design/qvism-preset";
import fs from "fs-extra";
import path from "node:path";

const [, , format, dir = "./"] = process.argv;

const PREFIX = "seed"; // TODO: move to config file

function buildConfig(preset: Preset, config: Partial<Config>) {
  return {
    prefix: PREFIX,
    ...preset,
    ...config,
  };
}

async function writeCss() {
  const config = buildConfig(preset, {});
  const files = await generateCssEach(config);
  await Promise.all(
    files.map(async ({ name, css: cssCode }) => {
      console.log("Writing", name, "to", path.join(process.cwd(), dir, `${name}.css`));
      fs.writeFileSync(path.join(process.cwd(), dir, `${name}.css`), cssCode);
    }),
  );

  const css = await generateCssBundle(config);
  console.log("Writing css bundle to", path.join(process.cwd(), dir, "component.css"));
  fs.writeFileSync(path.join(process.cwd(), dir, "component.css"), css);

  const minifiedCss = await generateCssBundle({ ...config, minify: true });
  console.log("Writing minified css bundle to", path.join(process.cwd(), dir, "component.min.css"));
  fs.writeFileSync(path.join(process.cwd(), dir, "component.min.css"), minifiedCss);
}

async function writeCssInJs() {
  const config = buildConfig(preset, {});
  const options = { prefix: config.prefix };
  return Promise.all(
    Object.values(config.theme.recipes).map(async (definition) => {
      const name = definition.name;
      const jsCode = generateJs(definition, options);
      const dtsCode = generateDts(definition);

      console.log("Writing", name, "to", path.join(process.cwd(), dir, `${name}.mjs`));
      fs.writeFileSync(path.join(dir, `${name}.mjs`), jsCode);

      console.log("Writing", name, "to", path.join(process.cwd(), dir, `${name}.d.ts`));
      fs.writeFileSync(path.join(dir, `${name}.d.ts`), dtsCode);
    }),
  );
}

if (format === "css") {
  writeCss().then(() => {
    console.log("Done");
  });
} else if (format === "js") {
  writeCssInJs().then(() => {
    console.log("Done");
  });
} else {
  throw new Error("Invalid format");
}
