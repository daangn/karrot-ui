import * as p from "@clack/prompts";
import { execa } from "execa";
import color from "picocolors";
import { getPackageManager } from "./get-package-manager";
import { getPackageInfo } from "./get-package-info";

interface InstallDependenciesProps {
  cwd: string;
  deps: string[];
  dev?: boolean;
}

export async function installDependencies({ cwd, deps, dev = false }: InstallDependenciesProps) {
  const { start, stop } = p.spinner();
  const packageManager = await getPackageManager(cwd);
  const packageInfo = getPackageInfo();

  // 이미 설치된 의존성 필터링
  const existingDeps = {
    ...packageInfo.dependencies,
    ...packageInfo.devDependencies,
  };

  const depsToInstall = deps.filter((dep) => !existingDeps[dep]);
  const filteredDeps = deps.filter((dep) => existingDeps[dep]);

  if (!depsToInstall.length) {
    return {
      installed: new Set(),
      filtered: new Set(),
    };
  }

  start(color.gray("의존성 설치중..."));

  const isDev = dev ? "-D" : null;
  const addCommand = packageManager === "npm" ? "install" : "add";
  const command = [addCommand, isDev, ...depsToInstall].filter(Boolean);

  try {
    await execa(packageManager, command, { cwd });
  } catch (error) {
    console.error(`의존성 설치 실패: ${error}`);
    process.exit(1);
  }

  stop("의존성 설치 완료.");

  return {
    installed: depsToInstall,
    filtered: filteredDeps,
  };
}
