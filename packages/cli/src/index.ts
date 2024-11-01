#!/usr/bin/env node

import { addCommand } from "@/src/commands/add";
import { getPackageInfo } from "@/src/utils/get-package-info";
import { cac } from "cac";
import { initCommand } from "./commands/init";
import { checkDeprecatedIconFilesCommand } from "@/src/commands/check-deprecated-icon-files";

const NAME = "seed-design";
const CLI = cac(NAME);

async function main() {
  const packageInfo = getPackageInfo();

  /* Commands */
  addCommand(CLI);
  initCommand(CLI);
  checkDeprecatedIconFilesCommand(CLI);

  CLI.version(packageInfo.version || "1.0.0", "-v, --version");
  CLI.help();
  CLI.parse();
}

main();
