export function getScrollPercent(element: HTMLElement): number {
  return element.scrollTop / (element.scrollHeight - element.clientHeight);
}

export function scrollByPercent(element: HTMLElement, percent: number): void {
  element.scrollTop = (element.scrollHeight - element.clientHeight) * percent;
}
