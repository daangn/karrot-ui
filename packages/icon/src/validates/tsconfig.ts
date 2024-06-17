import { TsConfigResult } from "get-tsconfig";
import kleur from "kleur";

export const validateTsconfigJSX = (tsconfig: TsConfigResult | null) => {
  if (!tsconfig) {
    console.log(
      kleur.red(
        "🚨 tsconfig 파일을 찾을 수 없습니다. seed-icon은 typescript 프로젝트를 기준으로 작성되었습니다. javascript를 계속해서 사용하고 싶으시다면 generate되는 파일을 직접 수정해주세요.",
      ),
    );
    console.log(
      kleur.red(
        "🚨 The tsconfig file was not found, the seed-icon was written based on the typescript project. If you want to continue using javascript, please modify the file that is generated by yourself.",
      ),
    );
    return;
  }

  const jsx = tsconfig.config.compilerOptions?.jsx;

  if (
    jsx === undefined ||
    jsx === "preserve" ||
    jsx === "react-native" ||
    jsx === "react-jsxdev"
  ) {
    console.log(
      kleur.red(
        "🚨 tsconfig 파일에 jsx 옵션이 제대로 설정되어 있지 않습니다. `seed-icon`은 JSX를 의존합니다. tsconfig.json에 `jsx` 필드를 `react` 또는 `react-jsx`로 설정해주세요.",
      ),
    );
    console.log(
      kleur.red(
        "🚨 The jsx option is not set in the tsconfig file. The `seed-icon` depends on JSX, please set the `jsx` field in tsconfig.json to `react` or `react-jsx`.",
      ),
    );
    return;
  }
};
