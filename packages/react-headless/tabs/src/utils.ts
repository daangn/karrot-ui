export function getPrevIndex(index: number, length: number): number {
  if (length <= 0) {
    throw new Error("Length must be a positive number.");
  }
  return (index - 1 + length) % length;
}

export function getNextIndex(index: number, length: number): number {
  if (length <= 0) {
    throw new Error("Length must be a positive number.");
  }
  return (index + 1) % length;
}
