import { cn } from '@/utils/cn.js';

interface H1Props extends React.ComponentPropsWithoutRef<'h1'> {}

export function H1(props: H1Props): JSX.Element {
  return <h1 {...props} className={cn(props.className, 'text-4xl font-bold')} />;
}

interface H2Props extends React.ComponentPropsWithoutRef<'h1'> {}

export function H2(props: H2Props): JSX.Element {
  return <h2 {...props} className={cn(props.className, 'text-2xl font-semibold')} />;
}

interface H3Props extends React.ComponentPropsWithoutRef<'h1'> {}

export function H3(props: H3Props): JSX.Element {
  return <h3 {...props} className={cn(props.className, 'text-xl font-semibold')} />;
}
