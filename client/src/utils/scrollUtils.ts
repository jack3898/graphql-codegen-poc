/**
 * Given a HTML element, identify how far it has scrolled from the top as a percentage.
 */
export function getScrollPercentage(element: HTMLElement): number {
  const scrollTop = element.scrollTop;
  const scrollHeight = element.scrollHeight;
  const clientHeight = element.clientHeight;

  // No overflow
  if (scrollHeight === clientHeight) {
    return 0;
  }

  const scrollableHeight = scrollHeight - clientHeight;
  const scrollPercentage = (scrollTop / scrollableHeight) * 100;

  return scrollPercentage;
}

/**
 * Pass a percentage and a HTML element, and scroll it to that position.
 */
export function scrollToPercentage(percentage: number, element: HTMLElement): void {
  const scrollHeight = element.scrollHeight;
  const clientHeight = element.clientHeight;

  // No overflow
  if (scrollHeight === clientHeight) {
    return;
  }

  const scrollableHeight = scrollHeight - clientHeight;
  const scrollTop = (percentage / 100) * scrollableHeight;

  element.scrollTop = scrollTop;
}
