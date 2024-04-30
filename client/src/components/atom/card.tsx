import { cn } from '@/utils/cn.js';

export interface CardProps extends React.ComponentPropsWithoutRef<'div'> {}

export function Card(props: CardProps): JSX.Element {
  return <div {...props} className={cn(`rounded border`, props.className)} />;
}

interface CardBodyProps extends React.ComponentPropsWithoutRef<'div'> {}

Card.Body = function CardBody(props: CardBodyProps): JSX.Element {
  return <div {...props} className={cn('p-3', props.className)} />;
};
