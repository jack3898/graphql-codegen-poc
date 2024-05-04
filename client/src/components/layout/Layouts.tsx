import { type ReactNode } from 'react';

export interface BentoLayoutProps {
  headerPanel: ReactNode;
  leftPanel: ReactNode;
  centerPanel: ReactNode;
  rightPanel: ReactNode;
  lowerPanel: ReactNode;
}

export function BentoFullLayout({
  headerPanel,
  leftPanel,
  centerPanel,
  rightPanel,
  lowerPanel
}: BentoLayoutProps): JSX.Element {
  return (
    <div
      className={`grid size-full grid-cols-[auto_1fr_auto] grid-rows-[auto_1fr_1fr_auto] gap-2 [grid-template-areas:'header_header_header''left_center_right''left_center_right''bottom_bottom_bottom']`}
    >
      <header className="[grid-area:header]">{headerPanel}</header>
      <aside className="[grid-area:left]">{leftPanel}</aside>
      <main className="[grid-area:center]">{centerPanel}</main>
      <aside className="[grid-area:right]">{rightPanel}</aside>
      <footer className="[grid-area:bottom]">{lowerPanel}</footer>
    </div>
  );
}
