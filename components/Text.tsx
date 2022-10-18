import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: 'xsm' | 'sm' | 'md' | 'lg' | 'xlg';
  children: ReactNode;
  asChild?: boolean;
  className?: string;
  
}

export function Text({ size = 'sm', children, asChild, className }: TextProps) {

  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      className={clsx(
        'text-gray-100 font-sans',
        {
          'text-xsm': size === 'xsm',
          'text-sm': size === 'sm',
          'text-md': size === 'md',
          'text-lg': size === 'lg',
          'text-xlg': size === 'xlg',
        },
        className
      )}
    >
      {children}
    </Comp>
  )
}