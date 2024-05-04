export function clamp(min: number, max: number, num: number): number {
  return Math.min(max, Math.max(min, num));
}
