type TargetNode = FrameNode | InstanceNode | ComponentNode | ComponentSetNode | GroupNode;
export function getInstanceFromSelection() {
  const selection = figma.currentPage.selection;

  const filter = selection.filter(
    (node) =>
      node.type === "FRAME" ||
      node.type === "INSTANCE" ||
      node.type === "COMPONENT" ||
      node.type === "COMPONENT_SET" ||
      node.type === "GROUP",
  ) as TargetNode[];

  if (filter.length === 0) {
    figma.notify("frame, instance, component, component_set, group 노드만 선택해주세요!", {
      error: true,
      timeout: 3000,
    });
    return [];
  }

  const self = filter.filter((node) => node.type === "INSTANCE") as InstanceNode[];

  const instances = filter.reduce(
    (acc, frame) => {
      const instances = frame.findAllWithCriteria({
        types: ["INSTANCE"],
      });
      // biome-ignore lint/performance/noAccumulatingSpread: <explanation>
      return [...acc, ...instances];
    },
    [...self] as InstanceNode[],
  );

  return instances;
}

export function getInstanceFromPage() {
  const instances = figma.currentPage.findAllWithCriteria({
    types: ["INSTANCE"],
  });

  return instances;
}

export async function getInstanceFromRoot() {
  await figma.loadAllPagesAsync();
  const instances = figma.root.findAllWithCriteria({
    types: ["INSTANCE"],
  });
  return instances;
}
