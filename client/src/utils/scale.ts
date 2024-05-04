export function scale(
  width: number,
  height: number,
  by: number
): { width: number; height: number } {
  return {
    width: width * by,
    height: height * by
  };
}
