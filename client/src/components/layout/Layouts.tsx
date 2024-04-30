import { cn } from '@/utils/cn.js';
import { type ReactNode } from 'react';

export interface BentoLayoutProps {
  leftPanel: ReactNode;
  centralPanel: ReactNode;
  rightPanel: ReactNode;
  lowerPanel: ReactNode;
}

export function Layout(): void {}

Layout.BentoFull = function BentoFullLayout({
  leftPanel,
  centralPanel,
  rightPanel,
  lowerPanel
}: BentoLayoutProps): JSX.Element {
  return (
    <div
      className={cn(
        `h-full w-full grid [grid-template-areas:'left_center_right''bottom_bottom_bottom'] grid-cols-[auto_1fr_auto] gap-2`
      )}
    >
      <aside className="[grid-area:left]">{leftPanel}</aside>
      <main className="[grid-area:center]">{centralPanel}</main>
      <aside className="[grid-area:right]">{rightPanel}</aside>
      <footer className="[grid-area:bottom]">{lowerPanel}</footer>
    </div>
  );
};

export interface BentoRightLayoutProps {
  leftPanel: ReactNode;
  centralPanel: ReactNode;
  rightPanel: ReactNode;
  lowerPanel: ReactNode;
}

Layout.BentoRight = function BentoRightLayout({
  leftPanel,
  centralPanel,
  lowerPanel
}: BentoRightLayoutProps): JSX.Element {
  return (
    <div
      className={cn(
        `grid [grid-template-areas:'left_center''bottom_bottom'] grid-cols-[1fr_auto] gap-4`
      )}
    >
      <aside className="[grid-area:left]">{leftPanel}</aside>
      <main className="[grid-area:center]">{centralPanel}</main>
      <footer className="[grid-area:bottom]">{lowerPanel}</footer>
    </div>
  );
};
