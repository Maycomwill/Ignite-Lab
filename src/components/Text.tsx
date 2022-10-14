import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface TextProps {
  size?: 'xsm' | 'sm' | 'md' | 'lg' | 'xlg';
  children: ReactNode;
  asChild?: boolean;
}

export function Text({ size = 'sm', children, asChild }: TextProps) {

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
        }
      )}
    >
      {children}
    </Comp>
  )
}