#!/usr/bin/env node

// TODO: load preset from config file

import {
  generateCss,
  generateCssBundle,
  generateDts,
  generateJs,
  type Config,
} from "@seed-design/qvism-core";
import preset from "@seed-design/qvism-preset";
import fs from "fs-extra";
import path from "node:path";

const [, , format, dir = "./"] = process.argv;

async function writeCss() {
  const { recipes, prefix } = preset as Config;
  const options = { prefix };

  await Promise.all(
    Object.entries(recipes).map(async ([name, definition]) => {
      const cssCode = await generateCss(definition, options);
      console.log("Writing", name, "to", path.join(process.cwd(), dir, `${name}.css`));
      fs.writeFileSync(path.join(process.cwd(), dir, `${name}.css`), cssCode);
    }),
  );

  const css = await generateCssBundle(Object.values(recipes), options);
  console.log("Writing css bundle to", path.join(process.cwd(), dir, "component.css"));
  fs.writeFileSync(path.join(process.cwd(), dir, "component.css"), css);

  const minifiedCss = await generateCssBundle(Object.values(recipes), { minify: true, prefix });
  console.log("Writing minified css bundle to", path.join(process.cwd(), dir, "component.min.css"));
  fs.writeFileSync(path.join(process.cwd(), dir, "component.min.css"), minifiedCss);
}

async function writeCssInJs() {
  const { recipes, prefix } = preset as Config;
  const options = { prefix };

  return Promise.all(
    Object.entries(recipes).map(async ([name, definition]) => {
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
