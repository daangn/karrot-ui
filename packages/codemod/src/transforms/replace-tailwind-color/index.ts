import type { Transform } from "jscodeshift";
import { colorMappings } from "@seed-design/migration-index/color";
import { TokenMigrationReporter } from "../../utils/reporter.js";

interface ColorMapping {
  previous: string;
  next: string[];
}

const reporter = new TokenMigrationReporter("replace-tailwind-color");

// text-primary -> text-fg-brand 등의 매핑
const tailwindColorMappings: ColorMapping[] = colorMappings.map((mapping) => ({
  previous: mapping.previous.replace(/^\$semantic\.color\./, "text-"),
  next: mapping.next.map((token) => {
    if (token.startsWith("$color.bg")) {
      return `text-${token.replace("$color.bg.", "bg-")}`;
    }
    if (token.startsWith("$color.fg")) {
      return `text-${token.replace("$color.fg.", "fg-")}`;
    }
    if (token.startsWith("$color.palette")) {
      return `text-${token.replace("$color.palette.", "")}`;
    }
    return token;
  }),
}));

const transform: Transform = (file, api) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  // JSX className 속성을 찾음
  root.find(j.JSXAttribute, { name: { name: "className" } }).forEach((path) => {
    if (path.node.value?.type !== "StringLiteral") return;

    const classNames = path.node.value.value.split(" ");
    const newClassNames = classNames.map((className) => {
      // 색상 관련 클래스인 경우만 처리
      if (!className.startsWith("text-")) return className;

      const mapping = tailwindColorMappings.find((m) => m.previous === className);
      if (!mapping) return className;

      if (mapping.next.length === 1) {
        // 매핑이 1개인 경우 자동 변환
        reporter.addResult({
          previousToken: className,
          nextToken: mapping.next[0],
          status: "success",
          line: path.node.loc?.start.line,
        });
        return mapping.next[0];
      }

      // 매핑이 여러개인 경우 reporter에 기록
      reporter.addResult({
        previousToken: className,
        nextToken: null,
        status: "failure",
        failureReason: `Multiple mappings available: ${mapping.next.join(", ")}`,
        line: path.node.loc?.start.line,
      });
      return className;
    });

    // 클래스명 업데이트
    path.node.value.value = newClassNames.join(" ");
  });

  reporter.writeReport();
  return root.toSource();
};

export default transform;
