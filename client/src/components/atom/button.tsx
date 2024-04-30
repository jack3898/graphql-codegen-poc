import { cn } from '@/utils/cn.js';
import { type ComponentPropsWithoutRef } from 'react';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {}

export function Button({ ...props }: ButtonProps): JSX.Element {
  return <button {...props} className={cn(props.className, 'rounded border bg-slate-200 p-2')} />;
}
