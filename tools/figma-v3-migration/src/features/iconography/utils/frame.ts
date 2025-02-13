export function findClosestFrameParent(node: BaseNode): FrameNode | undefined {
  if (!node.parent) {
    figma.notify("parent node가 없습니다.");
    throw new Error("no parent");
  }
  // NOTE: `;` 로 이어붙여진 id를 가진 frame은 selectionToLink가 먹히지 않음
  if (node.id.includes(";")) return findClosestFrameParent(node.parent);
  if (node.type === "FRAME") return node as FrameNode;
  return findClosestFrameParent(node.parent);
}
