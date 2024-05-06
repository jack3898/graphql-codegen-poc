export function calculateNewZoom(current: number, direction: 1 | -1, slowness = 10): number {
  const delta = direction / slowness;

  return current + delta;
}
