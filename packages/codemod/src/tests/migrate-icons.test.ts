import migrateIcons, { reactMatch } from "../transforms/migrate-icons.js";
import { describe, expect, test } from "vitest";
import { applyTransform } from "jscodeshift/src/testUtils.js";

interface ApplyMigrateIconsTransformParams {
  input: string;
}

function applyMigrateIconsTransform({ input }: ApplyMigrateIconsTransformParams) {
  const transformResult = applyTransform(
    migrateIcons,
    { match: reactMatch },
    { path: "path/to/file", source: input },
    { parser: "tsx" },
  );

  return transformResult;
}

describe("어떤 변경도 일어나면 안 되는 경우", () => {
  test("import 없음", () => {
    const input = `console.log("Hello, world!", OldIcon1Thin);`;

    expect(applyMigrateIconsTransform({ input })).toMatch(input);
  });

  test("모든 import source match되지 않음", () => {
    const input = `import { OldIcon1Thin, OldIcon2Thin } from "unrelated-package";
		import { OldIcon3Thin as Icon3Alias } from "another-unrelated-package";
		import OldIcon4Thin from "yet-another-unrelated-package/OldIcon4Thin";
		import * as Icons from "yet-another-unrelated-package";
		
		console.log(OldIcon1Thin);

    function test() {
	  	return <OldIcon2Thin />;
    }`;

    expect(applyMigrateIconsTransform({ input })).toMatch(input);
  });

  test("패키지명 변경 필요 있고, importSpecifier length 1+지만 match 없음 (unlikely)", () => {
    const input = `import { IconNotMatched } from "@seed-design/icon";
		import { IconNotMatched as IconNotMatchedAlias } from "@seed-design/icon";
		import type { IconType } from "@seed-design/react-icon";
		import { type IconType2 } from "@seed-design/react-icon";`;

    expect(applyMigrateIconsTransform({ input })).toMatch(input);
  });

  test("detect inline svgs", () => {
    const input = `export function Test() {
    return (
      <svg
    aria-hidden="true"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.5179 6.98877C17.9658 7.3118 18.0671 7.93681 17.7441 8.38478L11.7108 16.7515C11.5351 16.9952 11.2591 17.1469 10.9592 17.1648C10.6593 17.1827 10.3672 17.0647 10.1638 16.8436L6.33048 12.677C5.95655 12.2705 5.98291 11.6379 6.38935 11.264C6.7958 10.89 7.42841 10.9164 7.80234 11.3228L10.8056 14.5873L16.1219 7.21498C16.4449 6.76702 17.0699 6.66574 17.5179 6.98877Z"
      fill="currentColor"
    />
  </svg>)}`;

    expect(applyMigrateIconsTransform({ input })).toMatch(input);
  });

  test("multiple inline svgs", () => {
    const input = `import React from "react";

export function Test() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-annoyed"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M8 15h8"></path>
      <path d="M8 9h2"></path>
      <path d="M14 9h2"></path>
    </svg>
  );
}

export function Test2() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-atom"
    >
      <circle cx="12" cy="12" r="1"></circle>
      <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"></path>
      <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"></path>
    </svg>
  );
}`;

    expect(applyMigrateIconsTransform({ input })).toMatch(input);
  });

  describe("importDeclaration: import source에만 변경 있는 경우", () => {
    test("패키지명 변경 필요 없지만 하위 경로 변경 필요하고, importDefaultSpecifier에 사용된 local specifier가 identifier와 match 없음 (deep import, unlikely)", () => {
      const input = `import IconNotMatched from "@seed-design/react-icon/IconUndoFill";`;

      expect(applyMigrateIconsTransform({ input })).toMatchInlineSnapshot(
        `"import IconNotMatched from "@daangn/react-monochrome-icon/IconArrowUturnLeftFill";"`,
      );
    });

    test("패키지명 변경 필요 있지만 importNamespaceSpecifier", () => {
      const input = `import * as Icons from "@seed-design/icon";
    import * as Icons2 from "@seed-design/react-icon";`;

      expect(applyMigrateIconsTransform({ input })).toMatchInlineSnapshot(`
      "import * as Icons from "@daangn/react-monochrome-icon";
          import * as Icons2 from "@daangn/react-monochrome-icon";"
    `);
    });
  });

  describe("importDeclaration: import source와 specifier 모두 변경 있는 경우", () => {
    test("[가장 일반적] 패키지명에 변경 필요하고, specifier match 있음", () => {
      const input = `import { IconSortThin, IconSellRegular, } from "@seed-design/icon";
    import { IconListFill as IconListAlias } from "@seed-design/icon";
    import { IconChartRegular } from "@seed-design/icon";`;

      expect(applyMigrateIconsTransform({ input })).toMatchInlineSnapshot(`
      "import { IconArrowUpArrowDownLine, IconPlusSquareLine } from "@daangn/react-monochrome-icon";
          import { IconDothorizline3VerticalFill as IconListAlias } from "@daangn/react-monochrome-icon";
          import { IconBarchartSquareLine } from "@daangn/react-monochrome-icon";"
    `);
    });

    test("[가장 일반적] 패키지명에 변경 필요하고, importDefaultSpecifier이지만, 사용된 local specifier가 identifier와 match 있는 경우 (deep import)", () => {
      const input = `import IconListRegular from "@seed-design/icon/IconListRegular";
		import IconSellThin from "@seed-design/icon/dist/lib/test/somewhat/IconSellThin";`;

      expect(applyMigrateIconsTransform({ input })).toMatchInlineSnapshot(`
      "import IconDothorizline3VerticalLine from "@daangn/react-monochrome-icon/IconDothorizline3VerticalLine";
      		import IconPlusSquareLine from "@daangn/react-monochrome-icon/dist/lib/test/somewhat/IconPlusSquareLine";"
    `);
    });

    test("복합", () => {
      const input = `import {
        IconSellRegular,
        IconListFill,
        IconAddFill as AddIconAlias,
      } from "@seed-design/react-icon";
      import IconSellFill from "@seed-design/react-icon/IconSellFill";
      import IconAddThin from '@karrotmarket/karrot-ui-icon/lib/react/IconAddThin';
      import IconCloseThin from '@karrotmarket/karrot-ui-icon/lib/react/IconCloseThin';
      import IconCarRegular from '@karrotmarket/karrot-ui-icon/lib/react/IconCarRegular';

      function App() {
        console.log(IconSellRegular);

        return (
          <>
            <IconListFill />
            <IconCloseThin />
            <IconCarRegular />
            <AddIconAlias />
          </>
        );
      }`;

      expect(applyMigrateIconsTransform({ input })).toMatchInlineSnapshot(`
      "import {
        IconPlusSquareLine,
        IconDothorizline3VerticalFill,
        IconPlusFill as AddIconAlias,
      } from "@daangn/react-monochrome-icon";
            import IconPlusSquareFill from "@daangn/react-monochrome-icon/IconPlusSquareFill";
            import IconPlusLine from "@daangn/react-monochrome-icon/IconPlusLine";
            import IconXmarkLine from "@daangn/react-monochrome-icon/IconXmarkLine";
            import IconCarFrontside from "@daangn/react-multicolor-icon/IconCarFrontside";

            function App() {
              console.log(IconPlusSquareLine);

              return (<>
                <IconDothorizline3VerticalFill />
                <IconXmarkLine />
                <IconCarFrontside />
                <AddIconAlias />
              </>);
            }"
    `);
    });
  });

  describe("identifiers: identifier 변경까지 있는 경우", () => {
    test("source match와 identifier match 있는 경우", () => {
      const input = `import { IconSellRegular, IconListFill } from "@seed-design/icon";

    console.log(IconSellRegular);

    return IconListFill;`;

      expect(applyMigrateIconsTransform({ input })).toMatchInlineSnapshot(`
      "import { IconPlusSquareLine, IconDothorizline3VerticalFill } from "@daangn/react-monochrome-icon";

          console.log(IconPlusSquareLine);

          return IconDothorizline3VerticalFill;"
    `);
    });

    test("source match와 identifier match 있는 경우 (jsx)", () => {
      const input = `import { IconSellRegular, IconListFill } from "@seed-design/icon";
		import { IconSellThin as IconSellAlias } from "@seed-design/icon";
		
		console.log(IconSellRegular);
		
    function test() {
      return <div>
        <IconListFill />
        <IconSellAlias />
      </div>;
    }`;

      expect(applyMigrateIconsTransform({ input })).toMatchInlineSnapshot(`
      "import { IconPlusSquareLine, IconDothorizline3VerticalFill } from "@daangn/react-monochrome-icon";
      		import { IconPlusSquareLine as IconSellAlias } from "@daangn/react-monochrome-icon";
      		
      		console.log(IconPlusSquareLine);
      		
          function test() {
            return (
              <div>
                <IconDothorizline3VerticalFill />
                <IconSellAlias />
              </div>
            );
          }"
    `);
    });

    test("source match와 identifier match 있는 경우 (jsx, 첫 줄에 주석 있음)", () => {
      const input = `// some comment
    import { IconSellRegular, IconListFill } from "@seed-design/icon";
		import { IconSellThin as IconSellAlias } from "@seed-design/icon";
		
		console.log(IconSellRegular);
		
    function test() {
      return <div>
        <IconListFill />
        <IconSellAlias />
      </div>;
    }`;

      expect(applyMigrateIconsTransform({ input })).toMatchInlineSnapshot(`
      "// some comment
          import { IconPlusSquareLine, IconDothorizline3VerticalFill } from "@daangn/react-monochrome-icon";
      		import { IconPlusSquareLine as IconSellAlias } from "@daangn/react-monochrome-icon";
      		
      		console.log(IconPlusSquareLine);
      		
          function test() {
            return (
              <div>
                <IconDothorizline3VerticalFill />
                <IconSellAlias />
              </div>
            );
          }"
    `);
    });

    test("source match와 identifier match 있는 경우 (jsx, 첫 줄에 directive 있음)", () => {
      const input = `"use client";
    
    import { IconSellRegular, IconListFill } from "@seed-design/icon";
		import { IconSellThin as IconSellAlias } from "@seed-design/icon";
		
		console.log(IconSellRegular);
		
    function test() {
      return <div>
        <IconListFill />
        <IconSellAlias />
      </div>;
    }`;

      expect(applyMigrateIconsTransform({ input })).toMatchInlineSnapshot(`
      ""use client";
          
          import { IconPlusSquareLine, IconDothorizline3VerticalFill } from "@daangn/react-monochrome-icon";
      		import { IconPlusSquareLine as IconSellAlias } from "@daangn/react-monochrome-icon";
      		
      		console.log(IconPlusSquareLine);
      		
          function test() {
            return (
              <div>
                <IconDothorizline3VerticalFill />
                <IconSellAlias />
              </div>
            );
          }"
    `);
    });

    test("패키지명 변경 필요하고, importNamespaceSpecifier", () => {
      const input = `import * as Icons from "@seed-design/icon";
    
    console.log(Icons.IconSellRegular);`;

      expect(applyMigrateIconsTransform({ input })).toMatchInlineSnapshot(`
      "import * as Icons from "@daangn/react-monochrome-icon";
          
          console.log(Icons.IconPlusSquareLine);"
    `);
    });
  });

  describe("n:1 매핑", () => {
    test("n:1 매핑", () => {
      const input = `import { IconSellThin, IconSellRegular, IconSellFill } from "@seed-design/icon";`;

      expect(applyMigrateIconsTransform({ input })).toMatchInlineSnapshot(
        `"import { IconPlusSquareLine, IconPlusSquareFill } from "@daangn/react-monochrome-icon";"`,
      );
    });

    test("n:1 매핑 with identifiers", () => {
      const input = `import {
      IconSellThin,
      IconSellRegular,
      IconSellFill,
      IconCertificationThin,
      IconCertificationRegular,
      IconCertificationFill
    } from "@seed-design/icon";
    
    console.log(IconSellFill);
    
    function test() {
      return (<div>
        <IconSellThin />
        <IconSellRegular />
        <IconCertificationRegular />
        <IconCertificationFill />
      </div>);
    }`;

      expect(applyMigrateIconsTransform({ input })).toMatchInlineSnapshot(`
      "import {
        IconPlusSquareLine,
        IconPlusSquareFill,
        IconCrosshairLine,
        IconCrosshairFill,
      } from "@daangn/react-monochrome-icon";
          
          console.log(IconPlusSquareFill);
          
          function test() {
            return (
              (<div>
                <IconPlusSquareLine />
                <IconPlusSquareLine />
                <IconCrosshairLine />
                <IconCrosshairFill />
              </div>)
            );
          }"
    `);
    });
  });

  describe("변환 정보 있지만 확인 필요함", () => {
    test("확인 필요한 importSpecifier (action required)", () => {
      const input = `import { IconSuggestRegular } from "@seed-design/icon";
    
    function test() {
      return <IconSuggestRegular />;
    }`;

      expect(applyMigrateIconsTransform({ input })).toMatchInlineSnapshot(`
      "import { IconLightbulbDot5Line } from "@daangn/react-monochrome-icon";
          
          function test() {
            return <IconLightbulbDot5Line />;
          }"
    `);
    });

    test("확인 필요한 importDefaultSpecifier (action required)", () => {
      const input = `import IconSuggestRegular from "@seed-design/icon/IconSuggestRegular";`;

      expect(applyMigrateIconsTransform({ input })).toMatchInlineSnapshot(
        `"import IconLightbulbDot5Line from "@daangn/react-monochrome-icon/IconLightbulbDot5Line";"`,
      );
    });

    test("확인 필요한 importNamespaceSpecifier (action required)", () => {
      const input = `import * as Icons from "@seed-design/icon";
    
    console.log(Icons.IconSuggestRegular);`;

      expect(applyMigrateIconsTransform({ input })).toMatchInlineSnapshot(`
      "import * as Icons from "@daangn/react-monochrome-icon";
          
          console.log(Icons.IconLightbulbDot5Line);"
    `);
    });
  });

  describe("멀티컬러로 넘어감", () => {
    test("멀티컬러로 넘어감", () => {
      const input = `import { IconCarRegular } from "@seed-design/icon";
    
    function test() {
      return <IconCarRegular />;
    }`;

      expect(applyMigrateIconsTransform({ input })).toMatchInlineSnapshot(`
      "import { IconCarFrontside } from "@daangn/react-multicolor-icon";
          
          function test() {
            return <IconCarFrontside />;
          }"
    `);
    });

    test("멀티컬러로 넘어감 (다양한 variants)", () => {
      const input = `import { IconCarRegular, IconCarFill, IconCarThin } from "@seed-design/icon";`;

      expect(applyMigrateIconsTransform({ input })).toMatchInlineSnapshot(
        `"import { IconCarFrontside } from "@daangn/react-multicolor-icon";"`,
      );
    });

    test("멀티컬러로 넘어감 (섞인 경우)", () => {
      const input = `import { IconCarRegular, IconCarThin, IconJobsRegular, IconJobsFill, IconSellRegular } from "@seed-design/icon";
    import IconRestaurantThin from "@seed-design/react-icon/lib/IconRestaurantThin";
    import IconSellRegular from "@seed-design/icon/IconSellRegular";
    import IconJobsThin from "@seed-design/icon/IconJobsThin";
    
    export function test() {
      return (<div>
        <IconJobsRegular />
        <IconCarRegular />
        <IconCarThin />
        <IconJobsFill />
        <IconSellRegular />
      </div>);}`;

      expect(applyMigrateIconsTransform({ input })).toMatchInlineSnapshot(`
      "import { IconCarFrontside, IconPersonMagnifyingglass } from "@daangn/react-multicolor-icon";
      import { IconPlusSquareLine } from "@daangn/react-monochrome-icon";
      import IconForkSpoonLine from "@daangn/react-monochrome-icon/lib/IconForkSpoonLine";
      import IconPlusSquareLine from "@daangn/react-monochrome-icon/IconPlusSquareLine";
      import IconPersonMagnifyingglass from "@daangn/react-multicolor-icon/IconPersonMagnifyingglass";

      export function test() {
        return (
          (<div>
            <IconPersonMagnifyingglass />
            <IconCarFrontside />
            <IconCarFrontside />
            <IconPersonMagnifyingglass />
            <IconPlusSquareLine />
          </div>)
        );}"
    `);
    });
  });

  describe("comments 유지", () => {
    test("comments 유지", () => {
      const input = `// comment
    import { IconArrowUpwardThin, IconArrowDownwardFill, IconArrowUpwardRegular } from "@seed-design/icon";
    // comment
    import { IconSellRegular as IconAlias } from "@seed-design/icon";
    // comment
    import { IconLocationRegular } from "@seed-design/icon";`;

      expect(applyMigrateIconsTransform({ input })).toMatchInlineSnapshot(`
    "// comment
        import { IconArrowUpLine, IconArrowDownFill } from "@daangn/react-monochrome-icon";
        // comment
        import { IconPlusSquareLine as IconAlias } from "@daangn/react-monochrome-icon";
        // comment
        import { IconLocationpinLine } from "@daangn/react-monochrome-icon";"
  `);
    });

    test("comments 유지, 중간에", () => {
      const input = `import {
      // test
      IconArrowUpwardThin,
      IconArrowUpwardFill
    } from "@seed-design/icon";`;

      expect(applyMigrateIconsTransform({ input })).toMatchInlineSnapshot(`
      "import {
      // test
      IconArrowUpLine, IconArrowUpFill
      } from "@daangn/react-monochrome-icon";"
    `);
    });

    test("comments 유지 (나눠지는 경우)", () => {
      const input = `// comment
    import { IconCarRegular, IconCarThin, IconJobsFill, IconSellRegular } from "@seed-design/icon";
    // comment
    import IconRestaurantThin from "@seed-design/react-icon/lib/IconRestaurantThin";
    
    export function test() {
      return (<div>
        <IconCarRegular />
        <IconCarThin />
        <IconJobsFill />
        <IconSellRegular />
      </div>);}`;

      expect(applyMigrateIconsTransform({ input })).toMatchInlineSnapshot(`
      "// comment
      import { IconCarFrontside, IconPersonMagnifyingglass } from "@daangn/react-multicolor-icon";

      // comment
      import { IconPlusSquareLine } from "@daangn/react-monochrome-icon";

      // comment
      import IconForkSpoonLine from "@daangn/react-monochrome-icon/lib/IconForkSpoonLine";

      export function test() {
        return (
          (<div>
            <IconCarFrontside />
            <IconCarFrontside />
            <IconPersonMagnifyingglass />
            <IconPlusSquareLine />
          </div>)
        );}"
    `);
    });
  });

  test("반환값", () => {
    const input = `import { IconCertificationRegular, IconSellRegular, IconCarFill } from "@seed-design/icon";

  function getIcon() {
    return <IconCertificationRegular />;
  }

  function getIcon2() {
    return <IconSellRegular />;
  }

  function getIcon3() {
    return <IconCarFill />;
  }

  console.log(getIcon());`;

    expect(applyMigrateIconsTransform({ input })).toMatchInlineSnapshot(`
    "import { IconCarFrontside } from "@daangn/react-multicolor-icon";
    import { IconCrosshairLine, IconPlusSquareLine } from "@daangn/react-monochrome-icon";

    function getIcon() {
      return <IconCrosshairLine />;
    }

    function getIcon2() {
      return <IconPlusSquareLine />;
    }

    function getIcon3() {
      return <IconCarFrontside />;
    }

    console.log(getIcon());"
  `);
  });

  test("조건부 렌더링", () => {
    const input = `import { IconCertificationRegular, IconSellRegular } from "@seed-design/icon";

  export function test() {
    const condition = true;

    return (
      <div>
        {condition ? <IconCertificationRegular /> : <IconSellRegular />}
      </div>
    );
  }`;

    expect(applyMigrateIconsTransform({ input })).toMatchInlineSnapshot(`
    "import { IconCrosshairLine, IconPlusSquareLine } from "@daangn/react-monochrome-icon";

      export function test() {
        const condition = true;

        return (
          (<div>
            {condition ? <IconCrosshairLine /> : <IconPlusSquareLine />}
          </div>)
        );
      }"
  `);
  });

  test("prop", () => {
    const input = `import { IconCertificationRegular, IconSellRegular } from "@seed-design/icon";

  function test() {
    return <SomeComponent icon={<IconCertificationRegular />} />;
  }

  function test2() {
    return <SomeComponent icon={IconSellRegular} />;
  }`;

    expect(applyMigrateIconsTransform({ input })).toMatchInlineSnapshot(`
    "import { IconCrosshairLine, IconPlusSquareLine } from "@daangn/react-monochrome-icon";

      function test() {
        return <SomeComponent icon={<IconCrosshairLine />} />;
      }

      function test2() {
        return <SomeComponent icon={IconPlusSquareLine} />;
      }"
  `);
  });

  test("objects", () => {
    const input = `import { IconCertificationRegular, IconSellRegular } from "@seed-design/icon";

  function test() {
    return [<IconCertificationRegular />, <IconSellRegular />];
  }
    
  function test2() {
    return [IconCertificationRegular, IconSellRegular];
  }

  function test3() {
    return { icon: <IconCertificationRegular />, icon2: IconSellRegular };
  }
    
  `;

    expect(applyMigrateIconsTransform({ input })).toMatchInlineSnapshot(`
    "import { IconCrosshairLine, IconPlusSquareLine } from "@daangn/react-monochrome-icon";

      function test() {
        return [<IconCrosshairLine />, <IconPlusSquareLine />];
      }
        
      function test2() {
        return [IconCrosshairLine, IconPlusSquareLine];
      }

      function test3() {
        return { icon: <IconCrosshairLine />, icon2: IconPlusSquareLine };
      }"
  `);
  });

  test("참조", () => {
    const input = `import * as icons from "@seed-design/icon";
  const path = "@seed-design/icon/IconSellRegular";
  const deepPath = "@seed-design/icon/lib/something/IconSellRegular";
  const pathToBeMulticolor = "@seed-design/icon/IconCarRegular";
  
  const iconName = "IconCertificationRegular";
  const iconName2 = "IconSellRegular";
  const IconComponent = icons[iconName];

  const config = {
    icon: "IconCertificationFill",
    icon2: "IconSellFill",
  }

  return <IconComponent />;`;

    expect(applyMigrateIconsTransform({ input })).toMatchInlineSnapshot(`
    "import * as icons from "@daangn/react-monochrome-icon";
      const path = "@daangn/react-monochrome-icon/IconPlusSquareLine";
      const deepPath = "@daangn/react-monochrome-icon/lib/something/IconPlusSquareLine";
      const pathToBeMulticolor = "@daangn/react-multicolor-icon/IconCarFrontside";
      
      const iconName = "IconCrosshairLine";
      const iconName2 = "IconPlusSquareLine";
      const IconComponent = icons[iconName];

      const config = {
        icon: "IconCrosshairFill",
        icon2: "IconPlusSquareFill",
      }

      return <IconComponent />;"
  `);
  });

  test("dynamic imports", () => {
    const input = `const Icon = React.lazy(() => import("@seed-design/icon/IconCertificationRegular"));
  const Icon2 = await import("@seed-design/icon/IconSellRegular");
  const path = "@seed-design/icon/IconSellRegular";
  const deepPath = "@seed-design/icon/lib/something/IconSellRegular";
  const LazyMulticolor = React.lazy(() => import("@seed-design/icon/IconCarRegular"));

  console.log(Icon, Icon2);`;

    expect(applyMigrateIconsTransform({ input })).toMatchInlineSnapshot(`
    "const Icon = React.lazy(() => import("@daangn/react-monochrome-icon/IconCrosshairLine"));
      const Icon2 = await import("@daangn/react-monochrome-icon/IconPlusSquareLine");
      const path = "@daangn/react-monochrome-icon/IconPlusSquareLine";
      const deepPath = "@daangn/react-monochrome-icon/lib/something/IconPlusSquareLine";
      const LazyMulticolor = React.lazy(() => import("@daangn/react-multicolor-icon/IconCarFrontside"));

      console.log(Icon, Icon2);"
  `);
  });

  test("docs", () => {
    const input = `import {
    IconSellRegular,
    IconListFill,
    IconCarRegular,
    IconAddFill as AddIconAlias,
  } from "@seed-design/react-icon";
  import IconSellFill from "@seed-design/react-icon/IconSellFill";

  function App() {
    console.log(IconSellRegular);

    return (
      <>
        <IconListFill />
        <AddIconAlias />
        <IconCarRegular />
      </>
    );
  }`;

    expect(applyMigrateIconsTransform({ input })).toMatchInlineSnapshot(`
    "import { IconCarFrontside } from "@daangn/react-multicolor-icon";

    import {
      IconPlusSquareLine,
      IconDothorizline3VerticalFill,
      IconPlusFill as AddIconAlias,
    } from "@daangn/react-monochrome-icon";

    import IconPlusSquareFill from "@daangn/react-monochrome-icon/IconPlusSquareFill";

    function App() {
      console.log(IconPlusSquareLine);

      return (<>
        <IconDothorizline3VerticalFill />
        <AddIconAlias />
        <IconCarFrontside />
      </>);
    }"
  `);
  });
});

describe("home -> house -> window4house", () => {
  test("import specifiers", () => {
    const input = `import { IconHomeFill, IconHomeRegular, IconHomeThin, IconCommunityRegular, IconHouseThin, IconHouseRegular, IconSellRegular } from "@seed-design/icon";

  function test() {
    return <div>
      <IconHomeThin />
      <IconHomeFill />
      <IconHouseThin />
      <IconHouseRegular />
    </div>;
  }`;

    expect(applyMigrateIconsTransform({ input })).toMatchInlineSnapshot(`
    "import { IconWindow4House } from "@daangn/react-multicolor-icon";
    import { IconHouseFill, IconHouseLine, IconPostLine, IconPlusSquareLine } from "@daangn/react-monochrome-icon";

    function test() {
      return (
        <div>
          <IconHouseLine />
          <IconHouseFill />
          <IconWindow4House />
          <IconWindow4House />
        </div>
      );
    }"
  `);
  });

  test("import default specifiers", () => {
    const input = `import IconHomeFill from "@seed-design/icon/IconHomeFill";
    import IconHomeRegular from "@seed-design/icon/IconHomeRegular";
    import IconCommunityRegular from "@seed-design/icon/IconCommunityRegular";
    import IconHouseThin from "@seed-design/icon/IconHouseThin";
    import IconSellRegular from "@seed-design/icon/IconSellRegular";
    
    function test() {
      return <div>
      <IconHomeThin />
      <IconHomeFill />
      <IconHouseThin />
      <IconHouseRegular />
    </div>;
      }`;

    expect(applyMigrateIconsTransform({ input })).toMatchInlineSnapshot(`
      "import IconHouseFill from "@daangn/react-monochrome-icon/IconHouseFill";
          import IconHouseLine from "@daangn/react-monochrome-icon/IconHouseLine";
          import IconPostLine from "@daangn/react-monochrome-icon/IconPostLine";
          import IconWindow4House from "@daangn/react-multicolor-icon/IconWindow4House";
          import IconPlusSquareLine from "@daangn/react-monochrome-icon/IconPlusSquareLine";
          
          function test() {
            return (
              <div>
              <IconHouseLine />
              <IconHouseFill />
              <IconWindow4House />
              <IconWindow4House />
            </div>
            );
            }"
    `);
  });
});
