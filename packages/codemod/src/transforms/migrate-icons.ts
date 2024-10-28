import type { Transform } from "jscodeshift";
import {
  replaceIdentifiers,
  replaceImportDeclarations,
  replaceStringLiterals,
} from "../utils/replace-node.js";
import { createLogger, format, transports } from "winston";
import { identifierMatchReact } from "../utils/identifier-match.js";

export interface MigrateIconsOptions {
  match?: {
    source: {
      startsWith: string;
      replaceWith: {
        default: string;
        multicolor: string;
      };
    }[];
    identifier: {
      oldName: string;
      newName: string;
      isActionRequired?: boolean;
      moveToMulticolor?: boolean;
    }[];
  };
}

export const reactMatch: MigrateIconsOptions["match"] = {
  source: [
    {
      startsWith: "@seed-design/icon",
      replaceWith: {
        default: "@daangn/react-monochrome-icon",
        multicolor: "@daangn/react-multicolor-icon",
      },
    },
    {
      startsWith: "@seed-design/react-icon",
      replaceWith: {
        default: "@daangn/react-monochrome-icon",
        multicolor: "@daangn/react-multicolor-icon",
      },
    },
  ],
  identifier: identifierMatchReact,
};

const migrateIcons: Transform = (file, api, { match = reactMatch }: MigrateIconsOptions) => {
  const logger =
    process.env.LOG === "true"
      ? createLogger({
          level: "info",
          format: format.combine(
            format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
            format.printf(
              ({ level, message, timestamp }) =>
                `${timestamp} [${level.toUpperCase()}]: ${message}`,
            ),
          ),
          transports: [
            new transports.File({ filename: "migrate-icons-combined.log", level: "debug" }),
            new transports.File({ filename: "migrate-icons-warnings.log", level: "warn" }),
          ],
        })
      : undefined;

  logger?.debug(`${file.path}: 확인 시작`);

  const j = api.jscodeshift;
  const tree = j(file.source);

  const oldNames = match.identifier.map(({ oldName }) => oldName);

  const stringLiterals = tree.find(j.StringLiteral, {
    value: (value) =>
      oldNames.includes(value) ||
      match.source.some(({ startsWith }) => value.startsWith(startsWith)),
  });

  logger?.debug(`${file.path}: string literal ${stringLiterals.length}개 발견`);

  logger?.debug(`${file.path}: string literal 변환 시작`);

  replaceStringLiterals({
    stringLiterals,
    match,
    logger,
    report: api.report,
    filePath: file.path,
  });

  const importDeclarations = tree.find(j.ImportDeclaration, {
    source: {
      value: (value: unknown) => {
        if (typeof value !== "string") return false;

        return match.source.some(({ startsWith }) => value.startsWith(startsWith));
      },
    },
  });

  if (importDeclarations.length === 0) {
    logger?.debug(`${file.path}: 이 파일에는 import문 없음`);
  }

  logger?.debug(`${file.path}: import문 ${importDeclarations.length}개 발견`);
  replaceImportDeclarations({
    importDeclarations,
    match,
    logger,
    report: api.report,
    filePath: file.path,
  });

  logger?.debug(`${file.path}: import문 변환 완료`);

  logger?.debug(`${file.path}: identifier 변환 시작`);

  const identifiers = tree.find(j.Identifier, {
    name: (value) => oldNames.includes(value),
  });

  logger?.debug(`${file.path}: identifier ${identifiers.length}개 발견`);
  replaceIdentifiers({
    identifiers,
    identifierMatch: match.identifier,
    logger,
    report: api.report,
    filePath: file.path,
  });

  logger?.debug(`${file.path}: identifier 변환 완료`);

  logger?.debug(`${file.path}: 확인 완료`);

  return tree.toSource();
};

export default migrateIcons;
