interface InferredComponentSetNode {
  name: string;
  key: string;
  id: string;
  variantGroupProperties?: Record<string, { values: readonly string[] }>;
  componentPropertyDefinitions?: {
    [propertyName: string]: {
      type: ComponentPropertyType;
      defaultValue: string | boolean;
      preferredValues?: InstanceSwapPreferredValue[];
      variantOptions?: readonly string[];
    };
  };
}

interface PageComponentSets {
  [pageName: string]: {
    [componentSetName: string]: InferredComponentSetNode;
  };
}

export function getCurrentPageComponentSetDefinition() {
  // 모든 페이지 가져오기
  const pages = figma.root.children;

  // 결과 객체 초기화
  const result: PageComponentSets = {};

  // 각 페이지별로 순회
  for (const page of pages) {
    // 페이지 내의 모든 컴포넌트 세트 찾기
    const componentSets = page.findAllWithCriteria({
      types: ["COMPONENT_SET"],
    });

    // 아이콘 컴포넌트 제외
    const filteredComponents = componentSets.filter((c) => !c.name.includes("icon_"));

    // 페이지별 컴포넌트 세트 매핑
    result[page.name] = filteredComponents.reduce(
      (acc, componentSet) => {
        acc[componentSet.name] = {
          name: componentSet.name,
          key: componentSet.key,
          id: componentSet.id,
          variantGroupProperties: componentSet.variantGroupProperties,
          componentPropertyDefinitions: componentSet.componentPropertyDefinitions,
        };
        return acc;
      },
      {} as Record<string, InferredComponentSetNode>,
    );
  }

  console.log("result", result);
}
